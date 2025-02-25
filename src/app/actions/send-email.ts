'use server';

import sgMail, { type MailDataRequired } from '@sendgrid/mail';
import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join('response.json');
console.log(`filePath: ${filePath}`);

type Recipient = {
  name: string;
  email: string;
};

const recipients: Recipient[] = [];

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('Missing SENDGRID_API_KEY');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendTestEmail() {
  const messages: MailDataRequired[] = recipients.map((recipient) => ({
    to: recipient.email,
    from: {
      email: 'hello@harleyeverafter.com',
      name: 'Kaitlyn Russell and Zackery Harley',
    },
    templateId: 'd-86b96f23ca8a488fbcc70e19c25e55be',
    dynamicTemplateData: {
      name: recipient.name,
    },
  }));

  try {
    const response = await sgMail.send(messages);
    await fs.writeFile(filePath, JSON.stringify(response, null, 2));
    const numberOfSuccessfulEmails = response.filter(
      // @ts-expect-error statusCode is not in the type definition
      (r) => r[0].statusCode >= 200 && r[0].statusCode < 300,
    ).length;
    console.log(`${numberOfSuccessfulEmails} emails sent`);
  } catch (error) {
    console.error(error);
    await fs.writeFile(filePath, JSON.stringify(error, null, 2));
  }
}
