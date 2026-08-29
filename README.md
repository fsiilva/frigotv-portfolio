# FrigoTV — Digital Signage Platform

Plataforma Full Stack para gerenciamento e exibição de promoções em TVs de estabelecimentos comerciais.

> Este repositório é uma versão de portfólio do projeto. Configurações, credenciais, dados, domínios e componentes específicos do ambiente de produção foram removidos ou adaptados.

## Visão geral

O FrigoTV nasceu a partir de uma necessidade real: facilitar o gerenciamento de promoções e a distribuição de conteúdo para TVs em pontos de venda.

A solução evoluiu para uma aplicação com painel administrativo, player web para TVs, gerenciamento de displays e dispositivos, autenticação, rotas multi-tenant, API REST e recursos de IA para auxiliar na criação de conteúdo promocional.

## Tecnologias

- React
- TypeScript
- Vite
- Node.js
- Express
- MySQL
- API REST
- JWT
- Tailwind CSS
- Git / GitHub
- Docker
- Linux / VPS
- Google Gemini API

## Principais funcionalidades

- Cadastro e gerenciamento de promoções
- Player web para exibição em TVs
- Gerenciamento de displays
- Ativação e revogação de TVs físicas
- Rotas por tenant/estabelecimento
- Painel administrativo
- Autenticação
- Configurações personalizadas por estabelecimento
- Letreiro/ticker de mensagens
- Programação de conteúdo
- Atualização periódica dos dados exibidos
- Integração entre frontend, API e banco de dados
- Geração de conteúdo promocional com IA

## Arquitetura

```text
TV / Browser
     |
     v
React + TypeScript
     |
     v
REST API
     |
     +---- Autenticação
     +---- Promoções
     +---- Displays
     +---- Dispositivos/TVs
     +---- Configurações
     +---- Multi-tenant
     |
     v
MySQL
```

Consulte [docs/architecture.md](docs/architecture.md) para uma visão mais detalhada.

## Desenvolvimento assistido por IA

O projeto foi desenvolvido com um fluxo assistido por IA utilizando ChatGPT e OpenAI Codex.

A IA foi utilizada como ferramenta de apoio para:

- planejamento de funcionalidades;
- geração e refatoração de código;
- revisão de implementações;
- debugging;
- análise de erros;
- criação de consultas e integrações;
- documentação;
- testes e evolução das funcionalidades.

Minha atuação no projeto envolve a identificação do problema, levantamento de requisitos, definição das regras de negócio, decisões funcionais, validação das implementações, testes, troubleshooting, Git/GitHub, infraestrutura e deploy.

Mais detalhes em [docs/ai-assisted-development.md](docs/ai-assisted-development.md).

## Integração de IA no produto

Além do uso de IA durante o desenvolvimento, o próprio produto possui integração com IA generativa para auxiliar na criação de textos promocionais e mensagens para o letreiro digital.

A integração é realizada no backend, mantendo a chave da API em variável de ambiente.

## Segurança e versão de portfólio

Este repositório não representa uma cópia literal do ambiente de produção.

Foram intencionalmente removidos ou alterados:

- credenciais;
- variáveis de ambiente reais;
- URLs e domínios privados;
- dados de clientes;
- informações corporativas;
- configurações de produção;
- componentes que poderiam expor detalhes internos.

O objetivo deste repositório é demonstrar arquitetura, tecnologias, decisões de desenvolvimento e conceitos utilizados no projeto.

## Screenshots

As imagens do projeto serão adicionadas na pasta `screenshots/`.

Sugestões:

- Dashboard administrativo
- Cadastro de promoções
- Player de TV
- Gerenciamento de dispositivos
- Configurações da loja

## Executando uma versão de demonstração

```bash
git clone https://github.com/fsiilva/frigotv-portfolio.git
cd frigotv-portfolio
npm install
cp .env.example .env
npm run dev
```

> A versão pública pode utilizar dados mockados ou uma API de demonstração. Nenhuma credencial de produção é necessária.

## Autor

**Antônio Flávio da Silva Patricio**

- GitHub: https://github.com/fsiilva
- LinkedIn: https://www.linkedin.com/in/fsiilva/

## Status

Projeto real em evolução. Este repositório é mantido exclusivamente como portfólio técnico.
