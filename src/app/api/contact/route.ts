import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // Check for API key (Simulate success if missing in dev, or log error)
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Simulating email send.");
      console.log("Transmission Data:", { name, email, message });

      // Artificial delay for realism
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return NextResponse.json(
        { success: true, message: "Transmission simulation successful" },
        { status: 200 }
      );
    }

    const { Resend } = require("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: emailData, error } = await resend.emails.send({
      from: "Zenith Codex <onboarding@resend.dev>", // Default reliable sender for testing
      to: ["delivered@resend.dev"], // Replace with actual admin email when verified
      subject: `[Zenith Contact] Uplink from ${name}`,
      html: `
        <h1>New Contact Transmission</h1>
        <p><strong>Identifier:</strong> ${name}</p>
        <p><strong>Frequency:</strong> ${email}</p>
        <hr />
        <h3>Payload:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      reply_to: email, // Valid property is reply_to or replyTo depending on SDK version, Resend usually uses reply_to in API or replyTo in SDK. Let's stick to standard object structure.
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: "Transmission failed at relay" }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Message transmitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
