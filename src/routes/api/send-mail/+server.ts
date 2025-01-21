import { SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
    const { contactName, contactEmail, projectInfo } = await request.json();

    if (!contactName || !contactEmail || !projectInfo) {
        return json({ message: "Could not send email. Missing data." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
        return json({ message: "Invalid email format" }, { status: 400 });
    }

    const message = {
        to: 'joey.stephens524@gmail.com',
        from: 'owner@em3536.josephdstephens.com',
        subject: 'Portfolio Contact Form',
        html: `Someone sent you a contact form from your portfolio. <br />
        Name: ${contactName}
        Email: ${contactEmail}
        Project Info: ${projectInfo}`,
    };

    try {
        await sgMail.send(message);
        return json({ emailSentSuccessfully: true });
    } catch (err) {
        console.error('Error response from SendGrid:');
        return json({err}, { status: 500 });
    }
}
