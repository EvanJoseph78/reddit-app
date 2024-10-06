// pages/api/clerk/webhook.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { type, data } = req.body;

    // Verifica se o evento é de criação de um novo usuário
    if (type === 'session.created') {
      const { id, username, email, first_name, last_name } = data;

      // Apenas registra os detalhes do novo usuário no console
      console.log("Novo usuário criado no Clerk:");
      console.log(`ID: ${id}`);
      console.log(`Username: ${username}`);
      console.log(`Email: ${email}`);
      console.log(`First Name: ${first_name}`);
      console.log(`Last Name: ${last_name}`);

      // Retorna uma resposta de sucesso
      res.status(200).json({ message: 'User creation event logged' });
    } else {
      // Caso o evento não seja o esperado
      res.status(400).json({ message: 'Event type not handled' });
    }
  } else {
    // Método não permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

