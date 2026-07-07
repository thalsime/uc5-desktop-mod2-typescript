// Exercício 1: Modelagem de tipos e cálculo de estoque

enum Categoria {
  Eletronico = 'Eletronico',
  Periferico = 'Periferico',
  Acessorio = 'Acessorio',
}

interface Produto {
  id: number
  nome: string
  preco: number
  quantidade: number
  categoria: Categoria
}

function calcularValorTotalEstoque(produtos: Produto[]): number {
  return produtos.reduce((total, p) => total + p.preco * p.quantidade, 0)
}

const estoque: Produto[] = [
  { id: 1, nome: 'Monitor 24"', preco: 1200.0, quantidade: 3, categoria: Categoria.Eletronico },
  { id: 2, nome: 'Teclado Mecânico', preco: 350.0, quantidade: 5, categoria: Categoria.Periferico },
  { id: 3, nome: 'Mouse Gamer', preco: 150.0, quantidade: 8, categoria: Categoria.Periferico },
]

const total = calcularValorTotalEstoque(estoque)
console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`)
// Saída esperada: Valor total do estoque: R$ 6550.00

export {}
