// /* eslint-disable @typescript-eslint/no-unused-vars */
// import express, { Request, Response } from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';

// // Configuração do servidor
// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Configuração do Nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Ou outro serviço de sua escolha
//   auth: {
//     user: 'seu-email@gmail.com', // Seu e-mail
//     pass: 'sua-senha-ou-app-password', // Senha ou App Password
//   },
// });

// // Rota para enviar o e-mail
// app.post('/enviar-email', (req: Request, res: Response) => {
//   const { nome, email, mensagem } = req.body;

//   const mailOptions = {
//     from: email,
//     to: 'seu-email@gmail.com', // E-mail para o qual você quer enviar
//     subject: `Mensagem de ${nome}`,
//     text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send('Erro ao enviar e-mail');
//     }
//     res.status(200).send('E-mail enviado com sucesso');
//   });
// });

// // Inicia o servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });
