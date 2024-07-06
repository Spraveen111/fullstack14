import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const client = new twilio(process.env.SID, process.env.AUTH);

export default async function whatsappSms(messageBody, phoneNumber) {
  try {
    const message = await client.messages.create({
      body: messageBody,
      from: "whatsapp:+14155238886",
      to: `whatsapp:${phoneNumber}`,
    });
    console.log(`Message sent successfully with SID: ${message.sid}`);
    return message.sid; // or any other meaningful response
  } catch (error) {
    console.error(`Failed to send WhatsApp message: ${error.message}`);
    throw error;
  }
}
