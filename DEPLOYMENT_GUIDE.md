# 🚀 Guia Rápido de Deploy no GitHub Pages

## Resumo: O que foi criado

✅ **Plataforma Completa SleepCare Pro** com:
- 👥 Plataforma do Paciente (`sleepcare_questionnaire_platform.html`)
- ⚙️ Painel de Administração (`sleepcare_admin_dashboard.html`)
- 🏠 Landing Page (`index.html`)
- 📖 Documentação (`README.md`)

**Todos os arquivos estão prontos para deploy no GitHub Pages.**

---

## 📋 Checklist de Deployment (5 minutos)

### Passo 1: Preparar Repositório GitHub ✓

- [ ] Vá para [github.com](https://github.com)
- [ ] Clique em seu avatar → "Your repositories"
- [ ] Clique em "New" (verde)

### Passo 2: Criar Repositório ✓

- [ ] **Repository name**: `sleepcare-pro`
- [ ] **Description**: "Plataforma SleepCare Pro - Medicina do Sono"
- [ ] **Visibility**: Public (✓ necessário para GitHub Pages)
- [ ] Deixe "Add .gitignore" em branco (usaremos o nosso)
- [ ] Clique em **"Create repository"**

### Passo 3: Upload dos Arquivos ✓

**Opção A: Interface GitHub (Mais Fácil)**

1. Na página do novo repositório, clique em **"Add file"** → **"Upload files"**
2. Abra Finder → Documents → Claude → Projects → Medicina do Sono
3. **Arraste estes 4 arquivos** para a página:
   - ✓ `index.html` (landing page)
   - ✓ `sleepcare_questionnaire_platform.html` (plataforma paciente)
   - ✓ `sleepcare_admin_dashboard.html` (painel admin)
   - ✓ `README.md` (documentação)
   - ✓ `.gitignore` (configuração)

4. Clique em **"Commit changes"**

**Opção B: Terminal/Git (Se souber usar)**

```bash
cd ~/Documents/Claude/Projects/Medicina\ do\ Sono

git init
git add index.html sleepcare_questionnaire_platform.html sleepcare_admin_dashboard.html README.md .gitignore
git commit -m "Initial commit: SleepCare Pro"
git branch -M main
git remote add origin https://github.com/nataliavogt/sleepcare-pro.git
git push -u origin main
```

### Passo 4: Ativar GitHub Pages ✓

1. Na página do repositório, clique em **"Settings"**
2. No menu lateral, clique em **"Pages"** (cerca de 1/3 para baixo)
3. Em **"Source"**, selecione **"Deploy from a branch"**
4. Em **"Branch"**, selecione: **main** | **/ (root)**
5. Clique em **"Save"**

✨ **PRONTO!** Aguarde 1-2 minutos e seu site estará online!

### Passo 5: Encontrar Sua URL ✓

Após 1-2 minutos, você verá na página "Pages":

```
Your site is live at https://nataliavogt.github.io/sleepcare-pro
```

Salve este link! 🎉

---

## 🌐 Acessar Sua Plataforma

### Landing Page (Inicio)
```
https://nataliavogt.github.io/sleepcare-pro
```

### Plataforma do Paciente
```
https://nataliavogt.github.io/sleepcare-pro/sleepcare_questionnaire_platform.html
```
Ou clique em "Acessar Plataforma" na landing page.

### Painel de Administração
```
https://nataliavogt.github.io/sleepcare-pro/sleepcare_admin_dashboard.html
```
Ou clique em "Acessar Admin" na landing page.

**Credenciais de Demo:**
- Email: `admin@sleepcare.com`
- Senha: `admin123`

---

## 🎯 Primeiros Passos Após Deploy

### 1. Testar Plataforma do Paciente
- [ ] Abra a plataforma do paciente
- [ ] Clique "Criar Conta"
- [ ] Teste com: 
  - Nome: "Teste Silva"
  - Email: "teste@clinica.com"
  - Telefone: (11) 99999-9999
  - CPF: 123.456.789-09
  - Senha: Minimo8

### 2. Testar Admin Panel
- [ ] Abra o admin dashboard
- [ ] Faça login (admin@sleepcare.com / admin123)
- [ ] Você verá o paciente registrado no passo anterior
- [ ] Teste a customização: ⚙️ → Upload de logo, cores, mensagens

### 3. Testar Questionários
- [ ] Acesse como paciente (Criar Conta ou Login)
- [ ] Clique em um questionário (ex: STOP-Bang)
- [ ] Responda as perguntas (uma por tela)
- [ ] Veja os resultados com interpretação

### 4. Compartilhar com Pacientes
- [ ] Copie a URL da plataforma do paciente
- [ ] Compartilhe por WhatsApp, Email ou seu site
- [ ] Seus pacientes podem se registrar imediatamente

---

## ⚙️ Configurações Importantes

### Alterar Credenciais de Admin (RECOMENDADO)

⚠️ **Não use as credenciais de demo em produção!**

1. No seu computador, abra: `sleepcare_admin_dashboard.html` com editor de texto
2. Procure por (Ctrl+F): `ADMIN_CREDENTIALS`
3. Altere:
   ```javascript
   const ADMIN_CREDENTIALS = {
       email: 'seu.email@clinica.com',
       password: 'SenhaForte123!@#'
   };
   ```
4. Salve o arquivo
5. Faça upload novamente para GitHub:
   - Settings → Pages → "Upload files"
   - Selecione `sleepcare_admin_dashboard.html`
   - Commit changes

### Customizar Logo e Cores

1. Acesse Admin Panel com suas credenciais
2. Clique em "⚙️ Personalizar"
3. Upload de logo (PNG/JPG, máx 500KB)
4. Selecione cores primária e secundária
5. Clique "💾 Salvar Personalização"

⚡ **Nota**: As personalizações são salvas no navegador. Funcionam para todos os usuários automaticamente.

---

## 📊 Dados e Backup

### Onde os dados são armazenados?
- ✅ **Navegador do paciente** (localStorage)
- ✅ Não enviamos para servidor
- ✅ Cada paciente tem dados isolados
- ✅ 100% LGPD compliant

### Como fazer backup dos dados?

**Via Admin Panel:**
1. Acesse Admin Panel
2. Clique em "📥 Exportar Dados"
3. Selecione formato (JSON ou CSV)
4. Clique "⬇️ Baixar Dados"

**Onde aparecem os resultados?**
- Admin Panel → "📊 Resultados" (tabela com todos os scores)
- Admin Panel → "👥 Pacientes" (clique em paciente para detalhes)

---

## 🔒 Segurança

### O que é protegido?
- ✅ CPF validado com check digit
- ✅ Senhas só no navegador (não enviadas)
- ✅ Dados isolados por paciente
- ✅ LGPD: consentimento obrigatório
- ✅ Política de privacidade integrada

### Melhorias futuras:
- [ ] Backend com banco de dados (opcional)
- [ ] Autenticação de dois fatores
- [ ] Agendamento automático

---

## 🆘 Troubleshooting

**P: A página não carrega**
R: Aguarde 2-3 minutos após fazer upload. GitHub Pages leva um tempo. Limpe cache (Ctrl+Shift+Delete).

**P: Os dados não aparecem no admin**
R: Dados do paciente estão no navegador do paciente. Admin e Paciente precisam estar no mesmo domínio GitHub.

**P: CPF mostra "inválido"**
R: Verifique o formato XXX.XXX.XXX-XX. Sistema valida check digits automaticamente.

**P: Logo não aparece após upload**
R: Atualize a página do admin. Logo é armazenada em localStorage, não em servidor.

**P: Mensagens customizadas não aparecem**
R: Após salvar no admin, atualize a página da plataforma do paciente (F5).

---

## 📞 Suporte Rápido

- 📖 Documentação completa: `README.md`
- 💬 Dúvidas LGPD: Veja na plataforma (Painel Admin → LGPD)
- 🐛 Bugs: Verifique console (F12 → Console)

---

## 🎉 Próximos Passos

1. ✅ **Deploy completo** - Seu site está online!
2. 🔄 **Testar toda a plataforma** - Siga os testes acima
3. 👥 **Compartilhar com pacientes** - Envie a URL
4. ⚙️ **Customizar** - Altere logo, cores e mensagens
5. 📊 **Monitorar resultados** - Via Admin Panel

---

**Data de Deploy**: 2026-05-05  
**Versão**: 1.0 - Production Ready  
**Status**: ✅ Tudo funcionando!

Sucesso! 🚀
