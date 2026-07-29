interface NotificationData {
  fullName: string;
  email: string;
  phone?: string;
  description?: string;
}

export function notificationEmail(data: NotificationData): string {
  const { fullName, email, phone, description } = data;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" style="width:100%;max-width:600px;margin:40px auto;background:#ffffff;border-radius:8px;overflow:hidden;">
    <tr>
      <td style="padding:30px 40px;background:#1a1a2e;text-align:center;">
        <img src="https://wemediacrew.com/logo.png" alt="WeMediaCrew" style="height:40px;" />
      </td>
    </tr>
    <tr>
      <td style="padding:30px 40px;">
        <h1 style="margin:0 0 5px;font-size:20px;color:#1a1a2e;">New Contact Form Submission</h1>
        <p style="margin:0 0 25px;color:#6b7280;font-size:14px;">You have received a new inquiry from your website contact form.</p>
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#6b7280;width:100px;"><strong>Name</strong></td>
            <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#6b7280;"><strong>Email</strong></td>
            <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#6b7280;"><strong>Phone</strong></td>
            <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;font-size:14px;color:#6b7280;"><strong>Message</strong></td>
            <td style="padding:12px 0;font-size:14px;color:#111827;line-height:1.5;">${description || '—'}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 40px;background:#f9fafb;text-align:center;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">WeMediaCrew &copy; ${new Date().getFullYear()} &bull; Dubai &bull; Toronto</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
