import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, name, email, phone, subject, message, city, date, service } = body;

    const userEmail = "digitalsolution3600@gmail.com";
    console.log("Attempting SMTP connection with:", userEmail);
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: "fikbdzqnvfgxzmdk",
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
      debug: true,
      logger: true
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log("Transporter verified successfully");
    } catch (verifyError: any) {
      console.error("Transporter verification failed:", verifyError);
      return NextResponse.json({ 
        error: "SMTP Verification Failed", 
        details: verifyError.message 
      }, { status: 500 });
    }

    const isAppointment = type === "appointment";
    const emailSubject = isAppointment
      ? `New Appointment Request: ${service} from ${name}`
      : `New Contact Form Inquiry: ${subject || "No Subject"} from ${name}`;

    const htmlContent = isAppointment
      ? `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; border: none; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); background: #ffffff;">
          <div style="background: linear-gradient(135deg, #9d174d 0%, #831843 100%); padding: 40px 20px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Appointment Request</h1>
            <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">A new patient is waiting for consultation</p>
          </div>
          <div style="padding: 30px;">
            <div style="margin-bottom: 25px;">
              <h2 style="font-size: 14px; color: #9d174d; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Patient Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #111;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0; color: #111;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Phone</strong></td><td style="padding: 8px 0; color: #111; font-weight: bold;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Location</strong></td><td style="padding: 8px 0; color: #111;">${city || "Not specified"}</td></tr>
              </table>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h2 style="font-size: 14px; color: #9d174d; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Consultation Info</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 120px;"><strong>Service</strong></td><td style="padding: 8px 0; color: #111; font-weight: bold;">${service}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Date</strong></td><td style="padding: 8px 0; color: #111;">${date || "ASAP"}</td></tr>
              </table>
            </div>

            <div style="background: #fcfcfc; border: 1px solid #f0f0f0; border-radius: 12px; padding: 20px;">
              <h3 style="margin-top: 0; font-size: 13px; color: #888; text-transform: uppercase;">Message from Patient:</h3>
              <p style="margin-bottom: 0; color: #444; line-height: 1.6;">${message || "No additional notes provided."}</p>
            </div>
          </div>
          <div style="background: #f8f8f8; padding: 20px; text-align: center; border-top: 1px solid #eee;">
            <p style="margin: 0; font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 2px;">Raj Nursing Home Management System</p>
          </div>
        </div>
      `
      : `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; border: none; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); background: #ffffff;">
          <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 20px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">New Inquiry</h1>
            <p style="margin: 10px 0 0; opacity: 0.8; font-size: 14px;">Incoming message from the website contact form</p>
          </div>
          <div style="padding: 30px;">
            <div style="margin-bottom: 25px; background: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6;">
              <h2 style="font-size: 18px; color: #1e293b; margin: 0 0 5px;">${subject || "General Inquiry"}</h2>
              <p style="margin: 0; color: #64748b; font-size: 14px;">From: <strong>${name}</strong> (${email})</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; color: #64748b; width: 100px; font-size: 13px;"><strong>Phone No:</strong></td><td style="padding: 10px 0; color: #1e293b; font-weight: bold;">${phone}</td></tr>
              </table>
            </div>

            <div style="line-height: 1.8; color: #334155; body-background: #ffffff; padding: 10px 0;">
              ${message || "No message content."}
            </div>
          </div>
          <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">Automated Notification Service</p>
          </div>
        </div>
      `;

    const mailOptions = {
      from: "digitalsolution3600@gmail.com",
      to: ["drvipinkumarsharma@gmail.com", "digitalsolution3600@gmail.com"],
      subject: emailSubject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("DETAILED ERROR SENDING EMAIL:", error);
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: error.message,
      code: error.code
    }, { status: 500 });
  }
}
