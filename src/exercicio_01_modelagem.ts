// Exercício 1: Modelagem relacional e cálculo de estoque

// Categoria é uma entidade: tem tabela própria, id e nome.
interface Categoria {
  id: number
  nome: string
}

// O relacionamento vira chave estrangeira: o produto guarda o id da categoria.
interface Produto {
  id: number
  nome: string
  preco: number
  quantidade: number
  idCategoria: number
}

function calcularValorTotalEstoque(lista: Produto[]): number {
  return lista.reduce((acumulador, item) => acumulador + item.preco * item.quantidade, 0)
}

const categorias: Categoria[] = [
  { id: 1, nome: 'Periférico' },
  { id: 2, nome: 'Monitor' },
]

// Cada produto aponta para uma categoria pelo id, do mesmo jeito que a coluna
// categoria_id apontaria para a tabela categorias no PostgreSQL.
const produtos: Produto[] = [
  { id: 1, nome: 'Teclado Mecânico', preco: 150.0, quantidade: 10, idCategoria: 1 },
  { id: 2, nome: 'Mouse Óptico', preco: 80.0, quantidade: 25, idCategoria: 1 },
  { id: 3, nome: 'Monitor 24"', preco: 750.0, quantidade: 5, idCategoria: 2 },
]

const total = calcularValorTotalEstoque(produtos)
console.log(`Categorias: ${categorias.map((c) => c.nome).join(', ')}`)
console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`)
// Saída esperada:
// Categorias: Periférico, Monitor
// Valor total do estoque: R$ 7250.00

export {}
