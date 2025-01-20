import { SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
    const { contactName, contactMail, projectInfo } = await request.json();

    if (!contactName || !contactMail || !projectInfo) {
        return json({ message: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactMail)) {
        return json({ message: "Invalid email format" }, { status: 400 });
    }

    const message = {
        to: 'joey.stephens524@gmail.com',
        from: 'owner@em3536.josephdstephens.com',
        subject: 'Portfolio Contact Form',
        html: `<p>Name: ${contactName}</p><p>Email: ${contactMail}</p><p>Project Info: ${projectInfo}</p>`,
    };

    try {
        await sgMail.send(message);
        return json({ emailSentSuccessfully: true });
    } catch (err) {
        console.error('Error response from Resend:');
        return json({err}, { status: 500 });
    }
}
