import type { NextApiRequest, NextApiResponse } from 'next';
import Groq from 'groq-sdk';
import { encode } from '@toon-format/toon';
import { encode as encodeTokenizer } from "gpt-tokenizer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, knowledgeContext, selectedFormat } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const systemPrompt = `You are Mini Masi. This is your background. You are based off Tomas Gonzalez, a software engineer. Keep answers brief—no more than 2–3 sentences unless explicitly asked.

IMPORTANT: If the user wants to contact Tomas, hire him, or send him a message, respond with exactly "[REDIRECT:CONTACT]" at the start of your message, followed by a brief note like "I'd love to hear from you! Let me take you to the contact page."`;
    const toonString = encode(knowledgeContext, { delimiter: ',' });
    const jsonString = JSON.stringify(knowledgeContext);
    
    let dataString: string;
    let formatLabel: string;
    let formatInstruction: string;
    let jsonTokenCount: number | undefined;
    let toonTokenCount: number | undefined;
    
    // Choose data format based on selectedFormat
    if (selectedFormat === 'efficient') {
      // Count tokens for both formats
      jsonTokenCount = encodeTokenizer(jsonString).length;
      toonTokenCount = encodeTokenizer(toonString).length;
      
      // Use whichever has fewer tokens
      if (jsonTokenCount <= toonTokenCount) {
        dataString = jsonString;
        formatLabel = 'JSON';
        formatInstruction = 'Data is in JSON format. Parse carefully.';
      } else {
        dataString = toonString;
        formatLabel = 'TOON';
        formatInstruction = 'Data is in TOON format (Token-Oriented Object Notation). Parse carefully.';
      }
      
      console.log(`Efficient mode: JSON=${jsonTokenCount}, TOON=${toonTokenCount}, Using=${formatLabel}`);
    } else {
      dataString = selectedFormat === 'json' ? jsonString : toonString;
      formatLabel = selectedFormat === 'json' ? 'JSON' : 'TOON';
      formatInstruction = selectedFormat === 'json' 
        ? 'Data is in JSON format. Parse carefully.'
        : 'Data is in TOON format (Token-Oriented Object Notation). Parse carefully.';
      
      console.log(`Using format: ${formatLabel}`);
    }
    
    const query = message;
    
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: 'system',
          content: systemPrompt + ' ' + formatInstruction
        },
        {
          role: 'user',
          content: `Data (${formatLabel}):
        \`\`\`${selectedFormat === 'json' ? 'json' : 'toon'}
        ${dataString}
        \`\`\`
        
        Question: ${query}`
        }
        
      ],
      temperature: 0.0,
      max_completion_tokens: 100,
      top_p: 1,
      stream: true,
      stop: null,
    });

    // Set headers for streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Stream the response
    let usageData: any;
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
      
      // Capture usage data if available (Groq includes this in the final chunk)
      if ((chunk as any).usage) {
        usageData = (chunk as any).usage;
      }
    }

    // Log token usage and send to client
    if (usageData) {
      console.log("Prompt tokens:", usageData.prompt_tokens);
      console.log("Completion tokens:", usageData.completion_tokens);
      console.log("Total tokens:", usageData.total_tokens);
      
      // Send stats to client
      const statsData: any = {
        format: formatLabel,
        promptTokens: usageData.prompt_tokens,
        completionTokens: usageData.completion_tokens,
        totalTokens: usageData.total_tokens
      };
      
      // Add efficient mode data if applicable
      if (selectedFormat === 'efficient' && jsonTokenCount !== undefined && toonTokenCount !== undefined) {
        statsData.isEfficient = true;
        statsData.jsonTokens = jsonTokenCount;
        statsData.toonTokens = toonTokenCount;
      }
      
      res.write(`data: ${JSON.stringify({ stats: statsData })}\n\n`);
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('Error calling Groq API:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
}

