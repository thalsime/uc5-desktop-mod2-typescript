// Exercício 2: Busca de produtos por texto (tipagem de parâmetros e retorno)

interface Produto {
  id: number
  nome: string
  preco: number
  quantidade: number
}

function buscarProdutosPorTexto(produtos: Produto[], termo: string): Produto[] {
  const termoNormalizado = termo.toLowerCase()
  return produtos.filter(p => p.nome.toLowerCase().includes(termoNormalizado))
}

const catalogo: Produto[] = [
  { id: 1, nome: 'Monitor 24"', preco: 1200.0, quantidade: 3 },
  { id: 2, nome: 'Teclado Mecânico', preco: 350.0, quantidade: 5 },
  { id: 3, nome: 'Mouse Gamer', preco: 150.0, quantidade: 8 },
  { id: 4, nome: 'Teclado Membrana', preco: 80.0, quantidade: 12 },
]

const resultado = buscarProdutosPorTexto(catalogo, 'teclado')
console.log(`Produtos encontrados para "teclado":`)
resultado.forEach(p => console.log(`  - ${p.nome} (R$ ${p.preco.toFixed(2)})`))
// Saída esperada:
// Produtos encontrados para "teclado":
//   - Teclado Mecânico (R$ 350.00)
//   - Teclado Membrana (R$ 80.00)

export {}
