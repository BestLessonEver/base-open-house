import { NextRequest, NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/lib/resend";

interface Registration {
  parent_name: string;
  email: string;
  phone: string;
  student_name: string;
  student_age: number;
  instrument_interest: string;
  comments?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: Registration = await request.json();

    // Validate required fields
    const requiredFields = [
      "parent_name",
      "email",
      "phone",
      "student_name",
      "student_age",
      "instrument_interest",
    ];

    for (const field of requiredFields) {
      if (!body[field as keyof Registration]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate age
    if (body.student_age < 3 || body.student_age > 18) {
      return NextResponse.json(
        { error: "Student age must be between 3 and 18" },
        { status: 400 }
      );
    }

    // Send to n8n webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...body,
            submitted_at: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Continue even if webhook fails
      }
    }

    // Send confirmation email
    try {
      await sendConfirmationEmail(body.email, body.parent_name, body.student_name);
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the registration if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Registration successful!",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
