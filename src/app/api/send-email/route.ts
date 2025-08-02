import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, plan, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create mailto URL with pre-filled data
    const subject = encodeURIComponent(`Driving School Inquiry - ${plan || 'General'}`);
    const emailBody = encodeURIComponent(`Hello,

I would like to inquire about your driving school services.

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Plan: ${plan || 'Not specified'}

Message:
${message}

Best regards,
${name}`);

    const mailtoUrl = `mailto:aminmakki@hotmail.com?subject=${subject}&body=${emailBody}`;

    return NextResponse.json({
      success: true,
      message: 'Email client will open with pre-filled data',
      mailtoUrl: mailtoUrl
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
