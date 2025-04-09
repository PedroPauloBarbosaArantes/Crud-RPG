# Sistema de Gerenciamento de RPG - API

Este é um sistema de gerenciamento para um jogo de RPG (Role-Playing Game) que permite o gerenciamento de Personagens e Itens Mágicos através de uma API REST.

## Entidades

### Personagem
- **Atributos:**
  - Identificador
  - Nome do Jogador
  - Nome do Personagem
  - Classe (Guerreiro, Mago, Arqueiro, Ladino ou Bardo)
  - Level
  - Lista de Itens Mágicos
  - Força
  - Defesa

- **Regras:**
  - Na criação, o personagem tem 10 pontos para distribuir entre Força e Defesa
  - Os valores de Força e Defesa consideram os itens mágicos equipados
  - Pode possuir apenas 1 Item Mágico do tipo Amuleto

### Item Mágico
- **Atributos:**
  - Identificador
  - Nome
  - Tipo (Arma, Armadura ou Amuleto)
  - Força
  - Defesa

- **Regras:**
  - Armas: Defesa obrigatoriamente zero
  - Armaduras: Força obrigatoriamente zero
  - Amuletos: Podem ter Força e Defesa
  - Força e Defesa devem estar entre 0 e 10
  - Não podem ter Força e Defesa iguais a zero

## Funcionalidades

1. **Gerenciamento de Personagens**
   - Cadastrar Personagem
   - Listar Personagens
   - Buscar Personagem por Identificador
   - Atualizar Nome de Personagem
   - Remover Personagem

2. **Gerenciamento de Itens Mágicos**
   - Cadastrar Item Mágico
   - Listar Itens Mágicos
   - Buscar Item Mágico por Identificador
   - Adicionar Item Mágico ao Personagem
   - Listar Itens Mágicos por Personagem
   - Remover Item Mágico do Personagem
   - Buscar Amuleto do Personagem

## Tecnologias Utilizadas
- JavaScript
- Node.js
- Postman

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```

## Testando com Postman

### Configuração Inicial
1. Abra o Postman
2. Crie uma nova coleção
3. O servidor estará rodando em `http://localhost:3000` (Para alterar a port vá ao arquivo sever.js e altere a const port)

### Endpoints Disponíveis

#### Personagens

1. **Criar Personagem**
   - Método: POST
   - URL: `http://localhost:3000/personagens`
   - Body (JSON):
   ```json
   {
       "id": "1",
       "nomeJogador": "João",
       "nomePersonagem": "Aragorn",
       "classe": "Guerreiro",
       "level": 1,
       "força": 7,
       "defesa": 3
   }
   ```

2. **Listar Personagens**
   - Método: GET
   - URL: `http://localhost:3000/personagens`

3. **Buscar Personagem por ID**
   - Método: GET
   - URL: `http://localhost:3000/personagens/1`

4. **Atualizar Nome do Personagem**
   - Método: PUT
   - URL: `http://localhost:3000/personagens/1/nome`
   - Body (JSON):
   ```json
   {
       "novoNome": "Aragorn II"
   }
   ```

5. **Remover Personagem**
   - Método: DELETE
   - URL: `http://localhost:3000/personagens/1`

#### Itens Mágicos

1. **Criar Item Mágico**
   - Método: POST
   - URL: `http://localhost:3000/itens`
   - Body (JSON):
   ```json
   {
       "id": "1",
       "nome": "Espada Flamejante",
       "tipo": "Arma",
       "força": 5,
       "defesa": 0
   }
   ```

2. **Listar Itens Mágicos**
   - Método: GET
   - URL: `http://localhost:3000/itens`

3. **Buscar Item por ID**
   - Método: GET
   - URL: `http://localhost:3000/itens/1`

#### Relacionamento Personagem-Item

1. **Adicionar Item ao Personagem**
   - Método: POST
   - URL: `http://localhost:3000/personagens/1/itens/1`

2. **Listar Itens do Personagem**
   - Método: GET
   - URL: `http://localhost:3000/personagens/1/itens`

3. **Remover Item do Personagem**
   - Método: DELETE
   - URL: `http://localhost:3000/personagens/1/itens/1`

4. **Buscar Amuleto do Personagem**
   - Método: GET
   - URL: `http://localhost:3000/personagens/1/amuleto`

## Exemplos de Testes

### Fluxo Completo de Teste

1. Criar um personagem
2. Criar um item mágico
3. Adicionar o item ao personagem
4. Verificar os itens do personagem
5. Atualizar o nome do personagem
6. Remover o item do personagem
7. Remover o personagem

### Teste de Validações

1. Tentar criar personagem com soma de força e defesa diferente de 10
2. Tentar criar item com valores inválidos
3. Tentar adicionar mais de um amuleto ao personagem
4. Tentar adicionar item a personagem inexistente

## Respostas da API

- **Sucesso**: Status 200 ou 201 com os dados solicitados
- **Erro de Validação**: Status 400 com mensagem de erro
- **Não Encontrado**: Status 404 com mensagem de erro
- **Remoção**: Status 204 (sem conteúdo)
