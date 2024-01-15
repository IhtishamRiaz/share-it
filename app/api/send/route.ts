import EmailTemplate from "@/emails/email-template";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_fsfisHBF_CBhUAXchm5QBT3ozpYwhVRfx");

export async function POST(req: Request) {
   const { emailToSend, shortUrl, userName, fileName, fileType, fileSize } =
      await req.json();

   try {
      const data = await resend.emails.send({
         from: "ShareIt <onboarding@resend.dev>",
         to: ["riaz4u72nb+github@gmail.com"],
         subject: `${userName} shared a file with you`,
         react: EmailTemplate({
            emailToSend,
            shortUrl,
            userName,
            fileName,
            fileType,
            fileSize,
         }),
      });

      return Response.json(data);
   } catch (error) {
      return Response.json({ error });
   }
}
