# Arquitetura

## Objetivo

Separar as responsabilidades entre interface administrativa, player de TV, comunicação com API e persistência.

## Camadas

### Frontend

Responsável por:

- autenticação e sessão do usuário;
- gerenciamento de promoções;
- gerenciamento de displays;
- configurações;
- gerenciamento de TVs físicas;
- player de mídia;
- interação com a API.

### API

Responsável por:

- autenticação e autorização;
- CRUD de promoções;
- CRUD de displays;
- configurações do estabelecimento;
- gerenciamento de dispositivos;
- isolamento por tenant;
- comunicação com banco de dados.

### Banco de dados

A persistência real utiliza MySQL.

A versão pública não contém credenciais, dumps ou dados de produção.

## Multi-tenant

A aplicação possui conceito de tenant/estabelecimento. As URLs e recursos podem ser associados ao tenant para que diferentes operações compartilhem a mesma aplicação mantendo seus dados separados.

## TVs físicas

O produto diferencia:

- **Display:** configuração lógica do conteúdo que será exibido.
- **Dispositivo:** TV física autorizada a consumir aquele conteúdo.

Um dispositivo pode passar por estados como pendente, autorizado, ativo ou revogado.

## Segurança

Na aplicação real existem mecanismos de autenticação para usuários administrativos e tokens de dispositivos para TVs autorizadas.

Na versão de portfólio, detalhes sensíveis da implementação foram reduzidos ou documentados apenas conceitualmente.
