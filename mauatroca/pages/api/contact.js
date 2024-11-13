import { Resend } from 'resend';

const resend = new Resend('re_FNGfmCFM_5LYd6XA8EiopFhaeBvQD8GeF');




// pages/api/contact.js
export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 'no-store'); // Desativa o cache da página

  // Resto do código de getServerSideProps
  return {
    props: {
      // Suas props aqui
    },
  };
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;
  
      // Aqui você pode processar os dados - por exemplo, salvá-los em um banco de dados
      console.log('Dados do formulário recebidos:', formData);

      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'natsugustavo@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });

      console.log('email enviado');

    }
    else{
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }

  }
  