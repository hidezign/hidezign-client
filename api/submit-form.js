// Vercel serverless function to handle form submissions to Airtable
// This avoids CORS issues by proxying requests through the server

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { tableId, fields } = req.body;

    // Validate input
    if (!tableId || !fields) {
      return res.status(400).json({ error: 'Missing tableId or fields' });
    }

    // Get credentials from environment variables
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Airtable credentials not configured');
      return res.status(500).json({ error: 'Server not properly configured' });
    }

    // Make request to Airtable API
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${tableId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [{ fields }],
        }),
      }
    );

    // Handle response
    const data = await response.json();

    if (!response.ok) {
      console.error('Airtable API error:', data);
      return res.status(response.status).json({
        error: data.error?.message || 'Failed to submit form',
        details: data,
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
}
