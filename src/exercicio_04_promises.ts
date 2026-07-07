// Exercício 4: Programação assíncrona com Promise e tipagem de retorno

interface Produto {
  id: number
  nome: string
  preco: number
}

function consultarProdutoBanco(id: number): Promise<Produto> {
  return new Promise((resolve, reject) => {
    const bancoDados: Produto[] = [
      { id: 1, nome: 'Monitor 24"', preco: 1200.0 },
      { id: 2, nome: 'Teclado Mecânico', preco: 350.0 },
    ]

    setTimeout(() => {
      const produto = bancoDados.find(p => p.id === id)
      if (produto) {
        resolve(produto)
      } else {
        reject(new Error(`Produto com id=${id} não encontrado.`))
      }
    }, 200)
  })
}

async function main() {
  try {
    const produto = await consultarProdutoBanco(1)
    console.log(`Produto encontrado: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`)
  } catch (erro) {
    console.error('Erro na consulta:', erro)
  }

  try {
    await consultarProdutoBanco(99)
  } catch (erro) {
    if (erro instanceof Error) {
      console.error('Erro esperado:', erro.message)
    }
  }
}

main()
// Saída esperada:
// Produto encontrado: Monitor 24" - R$ 1200.00
// Erro esperado: Produto com id=99 não encontrado.

export {}
