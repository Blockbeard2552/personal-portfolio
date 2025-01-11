import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { json } from '@sveltejs/kit';


export async function POST({ request }) {
    const resend = new Resend(RESEND_API_KEY);
    const { contactName, contactMail, projectInfo } = 
    await request.json();

    if (!contactName || !contactMail || !projectInfo) {
        return json({ message: "Missing required fields" }, { status: 400 });
    }

    const message = {
        to: ['delivered@resend.dev'],
        from: 'Joey <onboarding@resend.dev>',
        subject: 'Portfolio Contact Form',
        html: `<p>Name: ${contactName}</p><p>Email: ${contactMail}</p><p>Project Info: ${projectInfo}</p>`,
    };

    try {
        await resend.emails.send(message);
        return json({ emailSentSuccessfully: true });
    } catch (err) {
        return json({ err }, { status: 500 });
    }
}