import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  error?: string;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GOOGLE_APP_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
      secure: true,
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GOOGLE_APP_EMAIL,
      subject,
      html: `
      <p>
      From: Name: 
      <strong>${name}</strong> 
      ,
      email: <strong>${email}</strong></p><br/>
      <stong>${subject}<strong><br/>
      <p>${message}</p><br/>`,
    });

    res.status(200).json({ message: "Email Sen Success" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}