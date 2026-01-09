# 🎯 EliteTracker Frontend

Interface web moderna e responsiva do projeto EliteTracker, desenvolvida com React, TypeScript e Vite.

## 📋 Sobre o Projeto

EliteTracker é um gerenciador de hábitos diários e tempos de focos, que ajuda melhorar a produtividade do dia a dia!

## ✨ Funcionalidades

- ⚡ Interface rápida e responsiva
- 🎨 Design moderno e intuitivo
- 🔐 Sistema de autenticação
- 📊 Visualização de dados em tempo real
- 🌙 Tema claro/escuro (se aplicável)

## 🚀 Tecnologias Utilizadas

- **[React]** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript]** - Superset JavaScript com tipagem estática
- **[Vite]** - Build tool moderna e extremamente rápida
- **[CSSMODULES]** - Estilização dos componentes
- **[Biome]** - Linter e formatador de código


## 📁 Estrutura do Projeto

```
elite-tracker-frontend/
├── src/
│   ├── assets/          # Imagens, ícones e arquivos estáticos
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── common/      # Componentes comuns (botões, inputs, etc)
│   │   ├── layout/      # Componentes de layout (header, footer, etc)
│   │   └── features/    # Componentes específicos de features
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Custom hooks
│   ├── services/        # Serviços (API calls, etc)
│   ├── contexts/        # Context API do React
│   ├── utils/           # Funções utilitárias
│   ├── types/           # Tipos TypeScript
│   ├── styles/          # Arquivos CSS globais
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada da aplicação
├── public/              # Arquivos públicos
├── index.html           # HTML template
├── .env                 # Variáveis de ambiente
├── vite.config.ts       # Configuração do Vite
├── tsconfig.json        # Configuração do TypeScript
├── biome.json           # Configuração do Biome
├── postcss.config.cjs   # Configuração do PostCSS
└── package.json         # Dependências e scripts
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Verifica o código com Biome
- `npm run format` - Formata o código automaticamente

## 🔌 Integração com a API

A aplicação consome a API do EliteTracker. Certifique-se de que a API está rodando antes de iniciar o frontend.

**Repositório da API:** [EliteTracker-Api](https://github.com/RondneyLoiola/EliteTracker-Api)


⌨️ Desenvolvido com 💙 por [Rondney Loiola](https://github.com/RondneyLoiola)
