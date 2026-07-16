# UC5 - Exercícios Módulo 2: TypeScript

Exercícios de tipagem estática, interfaces, funções tipadas e programação
assíncrona em TypeScript puro (sem framework). Cada arquivo em `src/` é
auto-contido.

## Exercícios

| Arquivo                       | Conteúdo                                              |
|-------------------------------|-------------------------------------------------------|
| `exercicio_01_modelagem.ts`   | Modelagem relacional com `interface` e chave estrangeira; cálculo de estoque |
| `exercicio_02_busca.ts`       | Busca por texto com tipagem de parâmetros e retorno    |
| `exercicio_03_validacao.ts`   | Validação de formulário com interface de erros         |
| `exercicio_04_promises.ts`    | `Promise` tipada e `async/await`                       |

## Como usar

```bash
git clone https://github.com/thalsime/uc5-desktop-mod2-typescript.git
cd uc5-desktop-mod2-typescript
npm install
npx tsc
node dist/exercicio_01_modelagem.js
```

## Requisitos

- Node.js 22+ (LTS ativo)
- npm 10+

## Stack

- TypeScript 5 (modo estrito)
