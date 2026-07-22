import dbConnect from "../../lib/database";
import Appointment from "../../models/appointment";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, phone, email, service, preferredDate, preferredTime, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: "Full name and phone number are required fields." 
      });
    }

    // Prepare Appointment payload
    const additionalInfoText = [
      preferredTime ? `Time Window: ${preferredTime}` : null,
      message ? `Message: ${message}` : null
    ].filter(Boolean).join("\n");

    const referenceId = `VC-${Date.now().toString().slice(-6)}`;

    // Format pre-filled WhatsApp link for direct patient dispatch
    const waMessageText = `Hello Vedara Care, I would like to make an inquiry.\n\n` +
      `• *Ref:* ${referenceId}\n` +
      `• *Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Department:* ${service || 'General Inquiry'}\n` +
      (preferredDate ? `• *Preferred Date:* ${preferredDate}\n` : '') +
      (preferredTime ? `• *Time Window:* ${preferredTime}\n` : '') +
      (message ? `• *Details:* ${message}\n` : '');

    const whatsappUrl = `https://wa.me/971555867466?text=${encodeURIComponent(waMessageText)}`;

    // Try saving to Database if connected
    let savedInDb = false;
    try {
      await dbConnect();
      const newAppointment = new Appointment({
        fullName: name,
        phone: phone,
        email: email || "",
        concern: service || "General Contact Inquiry",
        additionalInfo: additionalInfoText,
        preferredDate: preferredDate ? new Date(preferredDate) : undefined,
        source: "Contact Page Form",
        status: "new"
      });
      await newAppointment.save();
      savedInDb = true;
    } catch (dbErr) {
      console.warn("DB connect or save warning (proceeding gracefully):", dbErr.message);
    }

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
      referenceId,
      whatsappUrl,
      savedInDb
    });

  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error handling submission. Please try again or WhatsApp us."
    });
  }
}
