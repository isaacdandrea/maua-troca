# Lista inicial de pessoas com suas salas
pessoas = {f"Pessoa {i}": f"Sala {i}" for i in range(1, 51)}

# Escolhas de sala simuladas para cada pessoa
escolhas = {
    "Pessoa 1": "Sala 2", "Pessoa 2": "Sala 3", "Pessoa 3": "Sala 4", "Pessoa 4": "Sala 5",
    "Pessoa 5": "Sala 6", "Pessoa 6": "Sala 7", "Pessoa 7": "Sala 8", "Pessoa 8": "Sala 9",
    "Pessoa 9": "Sala 10", "Pessoa 10": "Sala 1",  # Ciclo de 10 pessoas

    "Pessoa 11": "Sala 12", "Pessoa 12": "Sala 13", "Pessoa 13": "Sala 11",  # Ciclo de 3 pessoas
    "Pessoa 14": "Sala 15", "Pessoa 15": "Sala 14",  # Ciclo de 2 pessoas

    "Pessoa 16": "Sala 17", "Pessoa 17": "Sala 18", "Pessoa 18": "Sala 19", "Pessoa 19": "Sala 20",
    "Pessoa 20": "Sala 21", "Pessoa 21": "Sala 22", "Pessoa 22": "Sala 23", "Pessoa 23": "Sala 16",  # Ciclo de 8 pessoas

    "Pessoa 24": "Sala 25", "Pessoa 25": "Sala 26", "Pessoa 26": "Sala 27", "Pessoa 27": "Sala 28",
    "Pessoa 28": "Sala 24",  # Ciclo de 5 pessoas

    "Pessoa 29": "Sala 30", "Pessoa 30": "Sala 31", "Pessoa 31": "Sala 32", "Pessoa 32": "Sala 29",  # Sem ciclo
    "Pessoa 33": "Sala 34", "Pessoa 34": "Sala 35", "Pessoa 35": "Sala 36",  # Sem ciclo

    "Pessoa 36": "Sala 37", "Pessoa 37": "Sala 38", "Pessoa 38": "Sala 39", "Pessoa 39": "Sala 40",
    "Pessoa 40": "Sala 41", "Pessoa 41": "Sala 42", "Pessoa 42": "Sala 36",  # Ciclo de 7 pessoas

    "Pessoa 43": "Sala 44", "Pessoa 44": "Sala 45", "Pessoa 45": "Sala 46", "Pessoa 46": "Sala 43",  # Ciclo de 4 pessoas

    "Pessoa 47": "Sala 48", "Pessoa 48": "Sala 49", "Pessoa 49": "Sala 50", "Pessoa 50": "Sala 47"   # Sem ciclo
}

# Função para encontrar ciclos com a menor quantidade de pessoas primeiro
def encontrar_ciclos_otimizados(pessoas, escolhas):
    trocas_realizadas = []
    salas_ocupadas = set()

    # Função auxiliar para realizar busca de ciclo com o menor comprimento possível
    def busca_ciclo(inicio, visitados):
        ciclo = []
        proxima_pessoa = inicio

        while proxima_pessoa not in ciclo:
            ciclo.append(proxima_pessoa)
            sala_desejada = escolhas.get(proxima_pessoa)

            if not sala_desejada or sala_desejada in salas_ocupadas:
                return []  # Se não houver sala ou a sala já estiver ocupada, o ciclo é inválido

            # Encontrar quem está na sala desejada
            proxima_pessoa = next((p for p, s in pessoas.items() if s == sala_desejada), None)
            if proxima_pessoa in visitados:
                return []  # Se chegarmos a uma pessoa já visitada, aborta o ciclo

        # Validar se o ciclo encontrado é fechado e mínimo
        return ciclo if proxima_pessoa == inicio and len(ciclo) > 1 else []

    # Iterar sobre as pessoas para tentar formar ciclos pequenos primeiro
    for pessoa in pessoas:
        if pessoa not in salas_ocupadas:
            # Inicia a busca de ciclo com essa pessoa
            ciclo = busca_ciclo(pessoa, set(salas_ocupadas))
            if ciclo:
                # Marcar as salas como ocupadas e adicionar o ciclo aos realizados
                trocas_realizadas.append(ciclo)
                for p in ciclo:
                    salas_ocupadas.add(pessoas[p])

    return trocas_realizadas

# Executar a função para encontrar ciclos priorizando os menores
ciclos_de_troca = encontrar_ciclos_otimizados(pessoas, escolhas)

# Exibir os ciclos encontrados
print("Ciclos de troca encontrados (priorizando os menores):")
for ciclo in ciclos_de_troca:
    print(" -> ".join(ciclo))

# Encontrar e exibir as pessoas que não conseguiram formar ciclos
pessoas_sem_ciclo = [p for p in pessoas if pessoas[p] not in {pessoas[p] for ciclo in ciclos_de_troca for p in ciclo}]
print("\nPessoas que não conseguiram formar ciclos:")
for pessoa in pessoas_sem_ciclo:
    print(f"{pessoa} (Sala atual: {pessoas[pessoa]})")
