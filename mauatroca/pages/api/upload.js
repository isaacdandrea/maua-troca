import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, tipo, conteudo } = req.body;

    try {
      // Executa o comando SQL para inserir o arquivo
      const [result] = await db.execute(
        'INSERT INTO arquivos (nome, tipo, conteudo) VALUES (?, ?, ?)',
        [nome, tipo, Buffer.from(conteudo, 'base64')]
      );

      res.status(200).json({ message: "Arquivo armazenado com sucesso!", id: result.insertId });
    } catch (error) {
      console.error("Erro ao armazenar o arquivo:", error);
      res.status(500).json({ message: "Erro ao armazenar o arquivo." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido." });
  }
}
