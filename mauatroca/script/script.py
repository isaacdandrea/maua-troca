import mysql.connector

# Conectar ao banco de dados MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="senha",
    database="meu_banco"
)

cursor = db.cursor()
cursor.execute("SELECT * FROM arquivos")

# Recuperar todos os dados
arquivos = cursor.fetchall()

# Gerar o conteúdo HTML
html_content = """
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arquivos</title>
</head>
<body>
    <h1>Lista de Arquivos</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
        </tr>
"""

# Preencher a tabela com os dados do banco
for arquivo in arquivos:
    html_content += f"""
        <tr>
            <td>{arquivo[0]}</td> <!-- ID -->
            <td>{arquivo[1]}</td> <!-- Nome -->
            <td>{arquivo[2]}</td> <!-- Tipo -->
        </tr>
    """

# Finalizar o HTML
html_content += """
    </table>
</body>
</html>
"""

# Salvar o HTML em um arquivo
with open("arquivos.html", "w") as f:
    f.write(html_content)

# Fechar a conexão
cursor.close()
db.close()
