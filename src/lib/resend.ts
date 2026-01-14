import { Resend } from "resend";

let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (resendInstance) {
    return resendInstance;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  resendInstance = new Resend(apiKey);
  return resendInstance;
}

export async function sendConfirmationEmail(
  to: string,
  parentName: string,
  studentName: string
) {
  const resend = getResend();

  const { data, error } = await resend.emails.send({
    from: "Bay Area String Ensembles <info@bestlessonever.com>",
    to: [to],
    subject: "Registration for BASE Open House - Jan 31st",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; padding: 30px 0; background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); border-radius: 12px; margin-bottom: 30px;">
            <h1 style="color: #d4a574; margin: 0; font-size: 28px;">Bay Area String Ensembles</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Open House Registration Confirmed</p>
          </div>

          <h2 style="color: #0f172a; margin-bottom: 20px;">Hello ${parentName}!</h2>

          <p>Thank you for registering <strong>${studentName}</strong> for the BASE Open House! </p>
          <p>We're excited to meet your family and introduce you to our exciting new string program.</p>

          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #0f172a; margin: 0 0 15px 0; font-size: 18px;">Event Details</h3>
            <p style="margin: 8px 0;"><strong>Date:</strong> Saturday, January 31st, 2025</p>
            <p style="margin: 8px 0;"><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
            <p style="margin: 8px 0;"><strong>Location:</strong> Best Lesson Ever!</p>
            <p style="margin: 8px 0;">3222 FM 528, Friendswood, TX 77546</p>
          </div>

          <h3 style="color: #0f172a;">What to Expect</h3>
          <ul style="padding-left: 20px;">
            <li>Meet Director Lyndon Wang</li>
            <li>Learn about violin, viola, and cello and try out the instruments</li>
            <li>Instrument rental and purchase information from Lisle Violin Shop</li>
            <li>Tour our facilities</li>
            <li>Answer your questions about our program</li>
          </ul>

          <div style="background: #0f172a; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
            <a href="https://share.google/ZjoS0c6UGpSFnb28W" style="display: inline-block; background: #d4a574; color: #0f172a; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600;">Get Directions</a>
          </div>

          <p style="color: #666; font-size: 14px;">If you have any questions before the event, please don't hesitate to reach out.</p>
          <p><a href="tel:281-940-4101">Call Us: 281-940-4101</a></p>
          <p>We look forward to seeing you!</p>

          <p style="margin-top: 30px;">
            <strong>Lyndon Wang</strong><br>
            <span style="color: #666;">Director, Bay Area String Ensembles</span>
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

          <p style="color: #999; font-size: 12px; text-align: center;">
            Bay Area String Ensembles<br>
            Best Lesson Ever! | 3222 FM 528, Friendswood, TX 77546
          </p>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error("Error sending email:", error);
    throw error;
  }

  return data;
}

export async function sendLeadNotification(registration: {
  parent_name: string;
  email: string;
  phone: string;
  student_name: string;
  student_age: number;
  instrument_interest: string;
  comments?: string;
}) {
  const resend = getResend();

  const { data, error } = await resend.emails.send({
    from: "BASE Open House <info@bestlessonever.com>",
    to: ["bestlessoninfo@gmail.com", "lwang9480@gmail.com"],
    subject: "New Open House Registration",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0f172a; margin-bottom: 20px;">New Open House Registration</h2>

          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #0f172a; margin: 0 0 15px 0; font-size: 18px;">Parent Information</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${registration.parent_name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${registration.email}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${registration.phone}</p>
          </div>

          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #0f172a; margin: 0 0 15px 0; font-size: 18px;">Student Information</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${registration.student_name}</p>
            <p style="margin: 8px 0;"><strong>Age:</strong> ${registration.student_age}</p>
            <p style="margin: 8px 0;"><strong>Instrument Interest:</strong> ${registration.instrument_interest}</p>
          </div>

          ${registration.comments ? `
          <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #0f172a; margin: 0 0 15px 0; font-size: 18px;">Comments/Questions</h3>
            <p style="margin: 8px 0;">${registration.comments}</p>
          </div>
          ` : ''}

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

          <p style="color: #999; font-size: 12px; text-align: center;">
            Bay Area String Ensembles<br>
            Open House Registration System
          </p>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error("Error sending lead notification:", error);
    throw error;
  }

  return data;
}
