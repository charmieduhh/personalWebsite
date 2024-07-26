import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log('body', email, subject, message);
  try {
    const data = await resend.emails.send({
      // have to use domain that's verified for 'from'
      // ex. if ur domain is 'charmie.dev' from would be info@charmie.dev
      // don't need to create another email for 'from' as long as domain is in it
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: 
          EmailTemplate({ firstName: 'John' }),
        
    });
    if (data.status === 'success') {
      return NextResponse.json({ message: 'Email sent!' })
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
