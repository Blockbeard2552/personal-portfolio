import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const resend = new Resend(RESEND_API_KEY);
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
        from: 'owner@josephdstephens.com',
        subject: 'Portfolio Contact Form',
        html: `<p>Name: ${contactName}</p><p>Email: ${contactMail}</p><p>Project Info: ${projectInfo}</p>`,
    };

    try {
        await resend.emails.send(message);
        return json({ emailSentSuccessfully: true });
    } catch (err) {
        console.error('Error response from Resend:');
        return json({err}, { status: 500 });
    }
}
