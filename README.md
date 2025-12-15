# Azul Corporativo Viagens

Site institucional responsivo para agência de viagens corporativas focada em PMEs.

## 🚀 Como rodar o projeto localmente

1.  Clone o repositório
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse `http://localhost:5173`

## 📦 Deploy na Vercel

Este projeto está pronto para ser implantado na [Vercel](https://vercel.com). Siga os passos abaixo:

### Pré-requisitos
- Ter uma conta na Vercel (pode criar com GitHub/GitLab/Bitbucket).
- Ter o código em um repositório git (GitHub, GitLab, etc).

### Passo a passo

1.  Acesse o dashboard da Vercel e clique em **"Add New..."** > **"Project"**.
2.  Importe o repositório git do projeto.
3.  A Vercel detectará automaticamente que é um projeto **Vite**. As configurações de build padrão (`npm run build`) e output (`dist`) já estarão corretas.
4.  Clique em **Deploy**.

> **Nota:** O arquivo `vercel.json` incluído na raiz do projeto garante que o roteamento (React Router) funcione corretamente, redirecionando todas as requisições para `index.html`.

## 🛠 Tecnologias

- React
- Vite
- React Router DOM
- CSS Modules / Variáveis CSS (Vanilla)
- Lucide React (Ícones)
