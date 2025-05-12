"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/Email-Template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: EmailTemplateProps) => {
  try {
    await resend.emails.send({
      from: `Enes SARIHAN Portfolio Site`,
      to: ["enessarihan35@icloud.com"],
      subject: emailFormData.subject,
      react: EmailTemplate({
        email: emailFormData.email,
        message: emailFormData.message,
        subject: emailFormData.subject,
        name: emailFormData.name,
      }),
    });

    console.log("Email başarıylar gönderilmiştir.");
  } catch (error) {
    throw error;
  }
};
