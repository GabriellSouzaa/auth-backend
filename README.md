
# 🛠️ Auth Backend – API de Autenticação

Backend em Node.js com autenticação via JWT, utilizando PostgreSQL e Prisma ORM.

---

## 📦 Tecnologias

- Node.js v22.17.0
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT (jsonwebtoken)
- Bcrypt
- Zod (validação)
- ESLint + Prettier

---

## 🚀 Como rodar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/auth-backend.git
cd auth-backend

# 2. Instale as dependências
npm install

# 3. Copie e configure o .env
cp .env.example .env
```



```bash
# 4. Rode as migrations
npx prisma migrate dev --name init

# 5. Inicie o servidor
npm run dev
```

---

## 📁 Estrutura de Pastas

```
src/
├── controllers/        # Funções das rotas (register, login, profile)
├── middlewares/        # Middleware de autenticação e validação
├── routes/             # Definições das rotas
├── services/           # Lógica de negócio (usuário)
├── repositories/       # Operações com Prisma
├── utils/              # Schemas Zod
├── server.ts           # Ponto de entrada
```

---

## 📌 API – Endpoints

| Método | Rota         | Descrição                                 | Protegida |
|--------|--------------|-------------------------------------------|-----------|
| POST   | `/api/register` | Registra novo usuário                     | ❌        |
| POST   | `/api/login`    | Autentica usuário, retorna JWT           | ❌        |
| GET    | `/api/profile`  | Retorna dados do usuário autenticado     | ✅        |

### 🔐 Autenticação

Para acessar rotas protegidas como `/api/profile`, envie o token no cabeçalho:

```
Authorization: Bearer SEU_TOKEN
```

---

## ✅ Scripts úteis

```bash
npm run dev      # Executa o servidor com ts-node-dev
npm run build    # Compila o projeto para JavaScript
npm run start    # Executa a versão buildada
```

---

## 🧪 Testando com Insomnia ou Postman

1. Registre um usuário em `/api/register`
2. Faça login em `/api/login` e copie o token JWT
3. Use o token como `Bearer Token` no header para acessar `/api/profile`

---

## 📌 Observações

- A senha é armazenada com hash (bcrypt)
- O JWT tem tempo de expiração e é validadO em middleware
- Todas as entradas são validadas com Zod

---

## 🧾 Licença

MIT
