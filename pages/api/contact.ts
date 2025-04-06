import type { NextApiRequest, NextApiResponse } from 'next';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize AWS SES client
const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body as ContactData;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Create the email parameters
    const params = {
      Source: "tpg3@njit.edu", // Your verified email in SES
      Destination: {
        ToAddresses: ["tpg3@njit.edu"], // Your email address
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `Portfolio Contact: ${subject}`,
        },
        Body: {
          Text: {
            Data: `
              Name: ${name}
              Email: ${email}
              Subject: ${subject}
              Message: ${message}
            `,
          },
          Html: {
            Data: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
          },
        },
      },
    };

    // Send the email using AWS SES
    const command = new SendEmailCommand(params);
    await ses.send(command);

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message',
      error: error.message || 'Unknown error occurred'
    });
  }
} 