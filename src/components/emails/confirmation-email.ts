export function confirmationEmail(name: string): string {
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
      <td style="padding:40px 40px 30px;">
        <h1 style="margin:0 0 20px;font-size:22px;color:#1a1a2e;">Thank you for contacting WeMediaCrew</h1>
        <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">Hi ${name},</p>
        <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">Thank you for reaching out to us. We have received your inquiry and our team will review it shortly.</p>
        <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.7;">We typically respond within <strong>one business day</strong>.</p>
        <table role="presentation" style="width:100%;">
          <tr>
            <td style="text-align:center;padding:10px 0;">
              <a href="https://wemediacrew.com" style="display:inline-block;padding:14px 44px;background:#ffd731;color:#1a1a2e;text-decoration:none;font-weight:700;font-size:15px;border-radius:50px;">Visit Website</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:30px 40px;background:#f9fafb;text-align:center;border-top:1px solid #e5e7eb;">
        <p style="margin:0 0 4px;font-weight:700;color:#1a1a2e;font-size:14px;">WeMediaCrew</p>
        <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.5;">Digital Marketing &bull; Branding &bull; Web Development</p>
        <p style="margin:12px 0 0;font-size:12px;color:#9ca3af;">Dubai &bull; Toronto</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
