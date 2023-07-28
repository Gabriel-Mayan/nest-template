import { config } from 'dotenv';
import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

import { generateWelcomeEmail } from '@shared/utils/email.util';

config();

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendEmail(
    to: string,
    subject: string,
    content: string,
  ): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const mailOptions: nodemailer.SendMailOptions = {
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        text: content,
      };

      this.transporter.sendMail(mailOptions, (error: Error | null) => {
        if (error) {
          reject(error);
        }

        resolve(true);
      });
    });
  }

  async sendWelcomeMail(user: any) {
    const { email, name, createdAt } = user;
    const { subject, content } = generateWelcomeEmail(name, email, createdAt);

    return await this.sendEmail(email, subject, content);
  }
}
