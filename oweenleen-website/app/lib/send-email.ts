// TODO: Replace this with a real email sending service (e.g., SendGrid, Nodemailer)
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  console.log("--- Sending Email ---");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("HTML:", html);
  console.log("---------------------");

  // Simulate a successful email send
  return Promise.resolve();
}
