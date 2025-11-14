import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  const STRAPI_API_TOKEN = process.env.STRAPI_READ_TOKEN;

  try {
    // Fetch resume data from Strapi
    const strapiRes = await fetch(`${STRAPI_URL}/api/resumes?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {}),
      },
    });

    if (!strapiRes.ok) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    const data = await strapiRes.json();
    const resumeFileUrl = data.data[0].resume.url;

    if (!resumeFileUrl) {
      return res.status(404).json({ error: 'Resume file not available' });
    }

    // Redirect to the resume file
    const fullFileUrl = `${STRAPI_URL}${resumeFileUrl}`;
    res.redirect(302, fullFileUrl);
  } catch (error) {
    console.error('Error fetching resume:', error);
    res.status(500).json({ error: 'Failed to fetch resume' });
  }
}

