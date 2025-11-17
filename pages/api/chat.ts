import type { NextApiRequest, NextApiResponse } from 'next';
import Groq from 'groq-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, knowledgeContext } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are Mini Masi, an AI assistant representing Tomas Gonzalez. You have access to detailed information about Tomas's skills, experience, and personality. Use this context to answer questions accurately and in a friendly, professional manner.\n\nContext about Tomas:\n${knowledgeContext || 'No additional context provided.'}`,
        },
        {
          role: "user",
          content: message,
        }
      ],
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null,
    });

    // Set headers for streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Stream the response
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('Error calling Groq API:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
}

