# Nome do Projeto

> Descrição curta do que o projeto faz e para quem ele serve.

Aplicação construída com **React**, **TypeScript** e **Vite**, com HMR (Hot Module Replacement) e regras de ESLint configuradas.

## Sumário

- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Configuração do ESLint](#configuração-do-eslint)
- [React Compiler](#react-compiler)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

### Plugins oficiais do Vite para React

Este template permite escolher entre dois plugins oficiais:

| Plugin | Compilador | Observação |
| --- | --- | --- |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) | [Oxc](https://oxc.rs) | Opção padrão do template |
| [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) | [SWC](https://swc.rs/) | Alternativa baseada em SWC |

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- Gerenciador de pacotes: npm, pnpm ou yarn

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera a build de produção na pasta `dist` |
| `npm run preview` | Serve localmente a build de produção |
| `npm run lint` | Executa o ESLint em todo o projeto |

## Estrutura do projeto

```text
.
├── public/             # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens, fontes e outros recursos
│   ├── components/     # Componentes reutilizáveis
│   ├── App.tsx         # Componente raiz
│   └── main.tsx        # Ponto de entrada da aplicação
├── eslint.config.js    # Configuração do ESLint
├── tsconfig.app.json   # TypeScript (código da aplicação)
├── tsconfig.node.json  # TypeScript (arquivos de configuração)
└── vite.config.ts      # Configuração do Vite
```

> Ajuste a estrutura acima conforme as pastas reais do seu projeto.

## Configuração do ESLint

Para aplicações em produção, recomenda-se habilitar as regras de lint com checagem de tipos.

### Regras com checagem de tipos

Em `eslint.config.js`, substitua `tseslint.configs.recommended` por uma das opções abaixo:

```js
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Outras configs...

      // Recomendado (substitui tseslint.configs.recommended)
      tseslint.configs.recommendedTypeChecked,
      // Alternativa com regras mais estritas
      tseslint.configs.strictTypeChecked,
      // Opcional: regras de estilo
      tseslint.configs.stylisticTypeChecked,

      // Outras configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // outras opções...
    },
  },
])
```

### Regras específicas para React

Você também pode instalar o [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) e o [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom):

```bash
npm install -D eslint-plugin-react-x eslint-plugin-react-dom
```

```js
// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Outras configs...

      // Regras de lint para React
      reactX.configs['recommended-typescript'],
      // Regras de lint para React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // outras opções...
    },
  },
])
```

## React Compiler

O React Compiler **não está habilitado** neste template, pois impacta o desempenho de desenvolvimento e de build. Para ativá-lo, siga a [documentação oficial](https://react.dev/learn/react-compiler/installation).

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3. Faça commit das alterações: `git commit -m "feat: adiciona minha feature"`
4. Envie para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.
