// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     // Log 1: Check if API key is loaded
//     console.log('API Key exists:', !!process.env.RESEND_API_KEY);
//     console.log('API Key prefix:', process.env.RESEND_API_KEY?.slice(0, 6));

//     const body = await req.json();
//     console.log('Request body received:', body);

//     const { data, error } = await resend.emails.send({
//       from: 'onboarding@resend.dev',   // ← hardcoded for testing
//       to: 'tahirahsan450@gmail.com',            // ← hardcoded YOUR email for testing
//       subject: 'Test',
//       html: '<p>Test email</p>',
//     });

//     console.log('Resend response data:', data);
//     console.log('Resend response error:', error);

//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ success: true });

//   } catch (err: any) {
//     console.error('CAUGHT ERROR:', err.message);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      fullName,
      patchType,
      quantity,
      size,
      delivery,
      backing,
      border,
      thread,
      designName,
      company,
      phone,
    } = body;

    const { error } = await resend.emails.send({
      from: 'orders@yourdomain.com',   // ← replace with your verified domain email
      to: email,                        // sends to actual customer
      subject: '✅ Quote Request Received – We\'ll Be In Touch Soon!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1d3557;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1d3557, #457b9d); padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Quote Request Received!</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0;">We'll get back to you within 24 hours</p>
          </div>

          <!-- Body -->
          <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; margin-top: 0;">Hi <strong>${fullName}</strong>,</p>
            <p style="color: #555;">Thanks for submitting your quote request! Here's a summary of your order details:</p>

            <!-- Order Summary Table -->
            <table style="width: 100%; border-collapse: collapse; margin: 24px 0; background: white; border-radius: 8px; overflow: hidden;">
              ${patchType ? `
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; width: 40%; background: #f8f9fa;">Patch Type</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; text-transform: capitalize;">${patchType.replace(/-/g, ' ')}</td>
              </tr>` : ''}
              ${size && size !== '" × "' ? `
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Size</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0;">${size}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Quantity</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0;">${quantity}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Delivery</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; text-transform: capitalize;">${delivery === 'express' ? '🚀 Express (10–14 Days)' : '📦 Standard (20–30 Days)'}</td>
              </tr>
              ${backing ? `
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Backing</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; text-transform: capitalize;">${backing.replace(/-/g, ' ')}</td>
              </tr>` : ''}
              ${border ? `
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Border</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; text-transform: capitalize;">${border.replace(/-/g, ' ')}</td>
              </tr>` : ''}
              ${thread ? `
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Thread</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; text-transform: capitalize;">${thread}</td>
              </tr>` : ''}
              ${designName ? `
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Design Name</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0;">${designName}</td>
              </tr>` : ''}
              ${company ? `
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Company</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0; font-weight: bold; background: #f8f9fa;">Phone</td>
                <td style="padding: 12px 16px; border: 1px solid #e0e0e0;">${phone}</td>
              </tr>
            </table>

            <!-- CTA Banner -->
            <div style="background: #e63946; color: white; padding: 24px; border-radius: 8px; text-align: center; margin-top: 24px;">
              <p style="margin: 0; font-size: 16px; font-weight: bold;">What happens next?</p>
              <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.9;">Our team will review your request and send you a detailed quote within <strong>24 hours</strong>.</p>
            </div>

            <!-- Footer -->
            <p style="margin-top: 32px; color: #888; font-size: 13px; text-align: center;">
              Questions? Reply to this email or contact us directly.<br/>
              <strong style="color: #1d3557;">The Patches Team</strong>
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error('Server error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}