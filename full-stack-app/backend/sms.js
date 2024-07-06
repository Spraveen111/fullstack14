import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

export default async function sendSMS(messageBody, toPhoneNumber) {
  const client = new twilio(process.env.SID, process.env.AUTH);

  try {
    const message = await client.messages.create({
      body: messageBody,
      to: toPhoneNumber,
      from: "+17087264376",
    });
    console.log(`Message sent with SID: ${message.sid}`);
    return message.sid; // Return SID or any other meaningful response
  } catch (error) {
    console.error(`Failed to send message: ${error.message}`);
    throw error;
  }
}
