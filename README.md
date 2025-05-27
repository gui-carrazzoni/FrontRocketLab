# E-commerce React com Tema Noturno

Uma aplicação de e-commerce moderna construída com React, TypeScript e Tailwind CSS, apresentando um tema noturno.

## 🚀 Funcionalidades

- Lista de produtos com layout responsivo
- Detalhes do produto em página dedicada
- Carrinho de compras funcional
- Tema noturno consistente
- Interface moderna e responsiva
- Feedback visual para interações do usuário

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [pnpm](https://pnpm.io/) (recomendado instalar via `npm install -g pnpm`)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/gui-carrazzoni/FrontRocketLab
```

2. Navegue até o diretório do projeto:
```bash
cd FrontRocketLab
```

3. Instale as dependências:
```bash
pnpm install
```

## 🎮 Rodando a aplicação

1. Para iniciar e rodar o servidor de desenvolvimento:
```bash
pnpm run dev
```

## 🛠️ Construído com

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e eficiente

## 📁 Estrutura do Projeto

```
FrontRocketLab/
├── public/
│   └── images/          # Imagens dos produtos
├── src/
│   ├── context/        # Contextos React (ex: CartContext)
│   ├── data/          # Dados estáticos (ex: produtos)
│   ├── pages/         # Componentes de página
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Ponto de entrada da aplicação
├── package.json
├── pnpm-lock.yaml     # Lock file do pnpm
└── README.md
```

## 🔄 Fluxo da Aplicação

1. A página inicial (`/`) exibe a lista de produtos
2. Clique em um produto para ver seus detalhes (`/product/:id`)
3. Adicione produtos ao carrinho usando o botão "Adicionar ao Carrinho"
4. Acesse o carrinho para ver os itens adicionados
5. Ajuste quantidades ou remova itens conforme necessário
6. Finalize a compra para ver a mensagem de sucesso

## 📝 Notas Adicionais

- As imagens dos produtos devem ser colocadas no diretório `public/images/products/
- O projeto usa React Router para navegação
- O estado do carrinho é gerenciado através do Context
- A interface é responsiva para diferentes tamanhos de tela
