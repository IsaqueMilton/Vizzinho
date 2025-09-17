# Vizzinho — template

Repositório inicial gerado para você (Next.js + Tailwind + MDX + Supabase optional).

**O que inclui**
- Home (hero + CTAs) — `pages/index.js`
- Downloads — `pages/downloads.js`
- Docs (MDX support) — `pages/docs/[slug].js` + `content/docs/example.mdx`
- Request Access — front + API route `pages/request-access.js` & `pages/api/request.js` (Supabase optional)
- Admin — `pages/admin.js` (protegido por ENV var ADMIN_PASSWORD)
- Blog — `pages/blog/index.js` + example post in `content/blog/hello.mdx`
- Tailwind + basic styling (theme inspirado em Llama.com com cor amarela)

**Como usar**
1. Instale dependências:
```bash
npm install
```
2. Rodar em desenvolvimento:
```bash
npm run dev
# abrir http://localhost:3000
```
3. Deploy no Vercel:
- Conecte este repositório no Vercel e defina as variáveis de ambiente (opcionais):
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `ADMIN_PASSWORD` (senha simples para o admin page)
- Clique em Deploy.

**Supabase (opcional)**
Se for usar Supabase para armazenar requests, crie a tabela `access_requests` com:
```sql
create table access_requests (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text,
  organization text,
  message text,
  created_at timestamptz default now()
);
```

---

Personalize cores, textos e assets em `styles/globals.css` e nos componentes em `components/`.
