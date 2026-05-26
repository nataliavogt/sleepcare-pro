# 🚀 Deploy SleepCare Pro em Vercel

## Pré-requisitos

1. Conta no GitHub (para conectar repositório)
2. Conta no Vercel (vercel.com)
3. Firebase Project criado
4. Credenciais do Firebase
5. Variáveis de ambiente configuradas

## Passo 1: Preparar Repositório GitHub

```bash
# Se não tiver ainda feito git init
git init
git add .
git commit -m "Initial commit: SleepCare Pro MVP"

# Criar novo repositório no GitHub
# Vá para https://github.com/new

# Depois, fazer push
git remote add origin https://github.com/seu-usuario/sleepcare-pro.git
git branch -M main
git push -u origin main
```

## Passo 2: Deploy em Vercel

### Opção A: Via CLI (Recomendado)

```bash
npm i -g vercel
vercel login
vercel
```

Siga as instruções no terminal para conectar seu repositório.

### Opção B: Via Dashboard Vercel

1. Vá para [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Vercel detectará que é Next.js automaticamente
5. Clique em "Deploy"

## Passo 3: Configurar Variáveis de Ambiente

No dashboard Vercel, vá para:
**Settings → Environment Variables**

Adicione todas as variáveis de `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
EMAIL_FROM=noreply@sleepcarepro.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=sua-senha-app
WHATSAPP_BUSINESS_API_TOKEN=
WHATSAPP_BUSINESS_PHONE_NUMBER_ID=
DOCTOR_EMAIL=nataliavogt@outlook.com
NODE_ENV=production
NEXT_PUBLIC_APP_URL=seu-dominio.vercel.app
```

## Passo 4: Domínio Personalizado (Opcional)

1. No dashboard Vercel, vá para **Settings → Domains**
2. Clique em "Add"
3. Digite seu domínio
4. Configure DNS conforme instruções

## Passo 5: Verificar Deployment

Após alguns minutos, seu site estará online em:
`https://seu-projeto.vercel.app`

## Troubleshooting

### Erro: "NEXT_PUBLIC_* não encontrado"
- Certifique-se de adicionar variáveis `NEXT_PUBLIC_` no Vercel
- Redeploy após adicionar variáveis

### Erro: "Firebase config inválido"
- Verifique as credenciais do Firebase
- Teste localmente com `npm run dev`

### Erro: "Email não enviando"
- Configure SMTP credentials corretos
- Teste com `npm run dev`

## Continuous Deployment

Vercel faz redeploy automático sempre que você faz push para `main`.

Para desabilitar:
**Settings → Git → Auto-deploy → Off**

## Contato

Dra. Natália Vogt
CRM 53990 | RQE 4762
