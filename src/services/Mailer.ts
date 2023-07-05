import { createTransport } from 'nodemailer';
import { parameters } from '../config';

export class Mailer {
  async sendMail(name: string, email: string, subject: string, message: string) {
    const transporter = createTransport({
      host: parameters.mailer.host,
      port: parameters.mailer.port,
      auth: {
        user: parameters.mailer.user,
        pass: parameters.mailer.password,
      },
      secure: false,
    });

    return await transporter.sendMail({
      to: {
        address: parameters.mailer.receiverMail,
        name: parameters.personalInfo.name,
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
