import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function contact(req, res) {
  try {
    await sendgrid.send({
      to: 'atendimento@bmbike.com.br',
      from: 'suportebmbike@gmail.com',
      subject: `E-mail de ${req.body.email} para cadastro como cliente.`,
      text: "| Dados da empresa/cliente que quer se cadastrar |\nRazão Social: " + req.body.razao + "\nNome Fantasia: " + req.body.fantasia + "\nCNPJ: " + req.body.cnpj + "\nInscrição Estadual: " + req.body.estadual + "\nTelefone: " + req.body.fone + "\nE-mail: " + req.body.email + "\nCEP: " + req.body.cep + "\nCidade: " + req.body.cidade + "\nEstado: " + req.body.uf + "\nBairro: " + req.body.bairro + "\nEndereço: " + req.body.endereco + "\nNúmero: " + req.body.numero,
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

export default contact;