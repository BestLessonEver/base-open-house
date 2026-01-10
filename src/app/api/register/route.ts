import { NextRequest, NextResponse } from "next/server";
import { supabase, Registration } from "@/lib/supabase";
import { sendConfirmationEmail } from "@/lib/resend";

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

    // Insert into Supabase
    const { data, error: dbError } = await supabase
      .from("base_registrations")
      .insert([
        {
          parent_name: body.parent_name,
          email: body.email,
          phone: body.phone,
          student_name: body.student_name,
          student_age: body.student_age,
          instrument_interest: body.instrument_interest,
          comments: body.comments || null,
        },
      ])
      .select()
      .single();

    if (dbError) {
      // Check for unique constraint violation (duplicate email)
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "This email is already registered for the event." },
          { status: 409 }
        );
      }
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save registration" },
        { status: 500 }
      );
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
      data,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
