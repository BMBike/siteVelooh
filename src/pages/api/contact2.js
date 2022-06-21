import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function contact2(req, res) {
  try {
    await sendgrid.send({
      to: 'suportebmbike@gmail.com',
      from: 'mensageirobmbike@gmail.com',
      subject: `E-mail de ${req.body.emailFeedback} para Feedback.`,
      text: "Nome: " + req.body.nomeFeedback + "\nE-mail: " + req.body.emailFeedback + "\nMensagem: " + req.body.mensagem,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error: error.message
    });
  }

  return res.status(200).json({
    error: ''
  });
};

export default contact2;