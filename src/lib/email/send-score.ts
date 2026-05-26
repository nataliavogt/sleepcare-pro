import nodemailer from 'nodemailer';

export async function sendScoreEmail(
  patientEmail: string,
  patientName: string,
  questionnaireType: string,
  score: number,
  maxScore: number,
  interpretation: string
): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'DM Sans', sans-serif; color: #62210F; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #C76134; color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background-color: #EADACA; padding: 20px; margin-top: 20px; border-radius: 8px; }
            .score-box { background-color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; border: 2px solid #C76134; }
            .score-value { font-size: 48px; font-weight: bold; color: #C76134; margin: 10px 0; }
            .interpretation { color: #62210F; font-weight: bold; font-size: 16px; }
            .footer { font-size: 12px; color: #99A8AD; text-align: center; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>SleepCare Pro</h1>
              <p>Resultado do Questionário</p>
            </div>

            <div class="content">
              <p>Olá ${patientName},</p>

              <p>Seu questionário <strong>${questionnaireType.toUpperCase()}</strong> foi respondido com sucesso!</p>

              <div class="score-box">
                <p>Seu Score:</p>
                <div class="score-value">${score}/${maxScore}</div>
                <div class="interpretation">${interpretation}</div>
              </div>

              <p>Este resultado foi registrado e será analisado por Dra. Natália Vogt.</p>

              <p>Se você tiver dúvidas sobre seu resultado, entre em contato com o consultório.</p>

              <p>Atenciosamente,<br/>
              <strong>SleepCare Pro - Medicina do Sono</strong><br/>
              Dra. Natália Vogt<br/>
              CRM 53990 | RQE 4762</p>
            </div>

            <div class="footer">
              <p>Este é um email automático. Por favor, não responda este email.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar para o paciente
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: patientEmail,
      subject: `SleepCare Pro - Resultado do ${questionnaireType.toUpperCase()}`,
      html: htmlContent,
    });

    // Enviar para a doutora
    const doctorHtmlContent = `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'DM Sans', sans-serif; color: #62210F; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #C76134; color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .content { background-color: #EADACA; padding: 20px; margin-top: 20px; border-radius: 8px; }
            .score-box { background-color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; border: 2px solid #C76134; }
            .score-value { font-size: 48px; font-weight: bold; color: #C76134; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>SleepCare Pro - Novo Resultado</h1>
            </div>

            <div class="content">
              <p><strong>Paciente:</strong> ${patientName} (${patientEmail})</p>
              <p><strong>Questionário:</strong> ${questionnaireType.toUpperCase()}</p>

              <div class="score-box">
                <p>Score: <strong>${score}/${maxScore}</strong></p>
                <p>${interpretation}</p>
              </div>

              <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.DOCTOR_EMAIL || 'nataliavogt@outlook.com',
      subject: `[SleepCare] Novo resultado - ${patientName}`,
      html: doctorHtmlContent,
    });

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}
