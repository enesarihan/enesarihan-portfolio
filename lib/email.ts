"use server";

import { EmailTemplate, EmailTemplateProps } from "@/components/Email-Template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: EmailTemplateProps) => {
  try {
    await resend.emails.send({
      from: `Enes SARIHAN Portfolio Site`,
      to: ["enessarihan35@icloud.com"],
      subject: emailFormData.subject,
      react: await EmailTemplate({
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
