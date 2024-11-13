import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Consulta todos os arquivos do banco de dados
      const [rows] = await db.execute('SELECT * FROM arquivos');

      // Retorna os dados encontrados
      res.status(200).json(rows);
    } catch (error) {
      console.error("Erro ao obter arquivos:", error);
      res.status(500).json({ message: "Erro ao obter arquivos." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido." });
  }
}
