import { MAILERSEND_API_KEY } from '$env/static/private';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { json } from '@sveltejs/kit';

console.log('API Key loaded:', MAILERSEND_API_KEY ? 'Yes' : 'No');
const mailerSend = new MailerSend({
    apiKey: MAILERSEND_API_KEY,
});

export async function POST({ request }) {
    const { contactName, contactEmail, projectInfo } = await request.json();

    if (!contactName || !contactEmail || !projectInfo) {
        return json({ message: "Could not send email. Missing data." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
        return json({ message: "Invalid email format" }, { status: 400 });
    }

    const sentFrom = new Sender('leads@josephdstephens.com', 'Joseph Stephens Portfolio');
    const recipients = [new Recipient('joey.stephens524@gmail.com', 'Joey Stephens')];

    const htmlContent = `
        <h2>New Portfolio Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${contactEmail}</p>
        <p><strong>Project Information:</strong></p>
        <p>${projectInfo}</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
            This email was sent from your portfolio contact form at josephdstephens.com
        </p>
    `;

    const textContent = `
New Portfolio Contact Form Submission

Name: ${contactName}
Email: ${contactEmail}
Project Information: ${projectInfo}

---
This email was sent from your portfolio contact form at josephdstephens.com
    `;

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject('New Portfolio Contact: ' + contactName)
        .setHtml(htmlContent)
        .setText(textContent);

    try {
        const response = await mailerSend.email.send(emailParams);
        console.log('MailerSend response:', response);
        return json({ emailSentSuccessfully: true });
    } catch (err) {
        console.error('MailerSend Error:', err);
        if (err && typeof err === 'object' && 'response' in err && err.response) {
            console.error('MailerSend Error Details:', err.response);
        }
        return json({ message: "Failed to send email", error: err instanceof Error ? err.message : String(err) }, { status: 500 });
    }
}
