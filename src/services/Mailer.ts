import { createTransport } from 'nodemailer';

export class Mailer {
  async sendMail(name: string, email: string, subject: string, message: string) {
    const transporter = createTransport({
      host: import.meta.env.MAILER_HOST,
      port: parseInt(import.meta.env.MAILER_PORT),
      auth: {
        user: import.meta.env.MAILER_USER,
        pass: import.meta.env.MAILER_PASSWORD,
      },
      secure: false,
    });

    return await transporter.sendMail({
      to: {
        address: import.meta.env.MAILER_RECEIVER_MAIL,
        name: 'Paweł Mrowiec',
      },
      from: {
        address: email,
        name: name,
      },
      text: message,
      subject,
    });
  }
}
