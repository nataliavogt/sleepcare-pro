# 📚 Guia Completo de Customização - SleepCare Pro

## 🎯 Índice
1. [Integração de Email](#integração-de-email)
2. [Personalização de Cores](#personalização-de-cores)
3. [Mudança de Fontes](#mudança-de-fontes)
4. [Customização de Domínio](#customização-de-domínio)
5. [Alterações de Texto e Branding](#alterações-de-texto-e-branding)
6. [Dicas Avançadas](#dicas-avançadas)

---

## 📧 Integração de Email

### Opção 1: EmailJS (RECOMENDADO - Mais Fácil)

**Passo 1: Criar conta gratuita**
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up Free"
3. Registre com email (nataliavogt@outlook.com)
4. Confirme via email

**Passo 2: Configurar Serviço de Email**
1. No painel, vá para "Email Services"
2. Clique em "Add Service"
3. Escolha "Gmail" ou "Outlook"
4. Siga as instruções (autorizar acesso)

**Passo 3: Criar Template de Email**
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Cole este template:

```
Subject: Seu acesso ao SleepCare Pro foi aprovado! ✓

Olá {{patient_name}},

Tenho o prazer de informar que sua solicitação de acesso ao SleepCare Pro foi APROVADA!

📋 SEUS DADOS DE ACESSO:
- Email: {{patient_email}}
- Senha: {{temporary_password}}
- Link de acesso: https://seu-dominio.com/telemedicine_platform_v2.html

🔒 PRIMEIRA VEZ?
1. Acesse o link acima
2. Faça login com seu email
3. Altere sua senha na primeira entrada
4. Preencha seu perfil médico

❓ DÚVIDAS?
Entre em contato: nataliavogt@outlook.com
Telefone: (seu telefone)

Atenciosamente,
Dra. Natália Vogt
Especialista em Medicina do Sono

---
SleepCare Pro - Plataforma Segura de Telemedicina
```

**Passo 4: Obter Credenciais**
1. Vá para "Account > API Keys"
2. Copie:
   - Public Key
   - Service ID
   - Template ID

**Passo 5: Adicionar ao HTML**

No arquivo `telemedicine_admin_system.html`, procure por `// ===== UTILITIES =====` e adicione antes:

```javascript
// ===== EMAIL CONFIGURATION =====
const EMAILJS_CONFIG = {
    publicKey: 'SEU_PUBLIC_KEY_AQUI',
    serviceId: 'SEU_SERVICE_ID_AQUI',
    templateId: 'SEU_TEMPLATE_ID_AQUI'
};

// Inicialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

function sendApprovalEmail(patient) {
    const templateParams = {
        to_email: patient.email,
        patient_name: patient.name,
        patient_email: patient.email,
        temporary_password: 'senha123' // Gere aleatória em produção
    };

    emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
        .then((response) => {
            console.log('Email enviado com sucesso!', response.status, response.text);
            showNotification(`Email de aprovação enviado para ${patient.email}`, 'success');
        }, (error) => {
            console.log('Erro ao enviar email:', error);
            showNotification('Email enviado, mas com aviso (verifique console)', 'warning');
        });
}
```

**Passo 6: Integrar ao Botão de Aprovação**

Encontre a função `approvePatientAccess` e substitua por:

```javascript
function approvePatientAccess(patientId) {
    const pending = getPendingPatients();
    const patient = pending.find(p => p.id === patientId);

    if (patient) {
        savePatient(patient);
        const updated = pending.filter(p => p.id !== patientId);
        localStorage.setItem('sleepcare_pending_patients', JSON.stringify(updated));
        addAuditLog(`Acesso aprovado para paciente: ${patient.name}`);
        
        // ENVIAR EMAIL
        sendApprovalEmail(patient);
        
        loadAccessControl();
        showNotification(`Acesso aprovado para ${patient.name}!`, 'success');
    }
}
```

**Passo 7: Adicionar Script EmailJS no HEAD**

No `<head>` do arquivo HTML, após `<meta name="viewport"...>`, adicione:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```

### Opção 2: Formspree (Alternativa)

Se preferir Formspree:
1. Acesse: https://formspree.io/
2. Crie conta com nataliavogt@outlook.com
3. Crie novo form
4. Use o endpoint fornecido para enviar emails

---

## 🎨 Personalização de Cores

### Onde Estão Definidas as Cores?

No arquivo HTML, procure pela seção `<style>` (geralmente começando na linha 7)

### Cores Principais do Sistema

```css
/* CORES PRINCIPAIS - Procure por estas linhas */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* Roxo/Azul */
color: #667eea;  /* Azul roxo - botões, headings */
background: #667eea;  /* Fundo botões primários */
color: #764ba2;  /* Roxo mais escuro - h3 */
```

### Como Mudar as Cores

**EXEMPLO: Mudar de Roxo/Azul para Verde/Azul Claro**

1. Abra o arquivo em um editor de texto (Bloco de Notas, VS Code, etc)
2. Use `Ctrl+H` (Find & Replace)
3. Substitua:

| Original | Novo |
|----------|------|
| `#667eea` | `#10b981` (verde) |
| `#764ba2` | `#059669` (verde escuro) |

**Paletas de Cores Recomendadas para Saúde:**

**Opção 1: Verde (Calmante)**
```css
#10b981 (verde primário)
#059669 (verde escuro)
#dcfce7 (verde claro)
```

**Opção 2: Azul (Profissional)**
```css
#0b63e5 (azul vivo)
#0c4a6e (azul escuro)
#e0e7ff (azul claro)
```

**Opção 3: Teal (Moderno)**
```css
#0d9488 (teal)
#134e4a (teal escuro)
#d1faf6 (teal claro)
```

---

## 🔤 Mudança de Fontes

### Fonte Atual
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Como Mudar

**Opção 1: Usar Google Fonts (RECOMENDADO)**

1. Acesse: https://fonts.google.com/
2. Escolha uma fonte (ex: Poppins, Inter, Raleway)
3. Clique em "Select this style"
4. Copie o código `<link>` fornecido
5. Cole no `<head>` do HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

6. Procure por `font-family: 'Segoe UI'` no CSS
7. Substitua por:

```css
font-family: 'Poppins', sans-serif;
```

**Fonts Recomendadas para Plataformas Médicas:**
- **Poppins** - Moderna, clara
- **Inter** - Profissional, legível
- **Raleway** - Elegante
- **Roboto** - Versátil, confiável

---

## 🌐 Customização de Domínio

### Opção 1: Hospedar em GitHub Pages (GRATUITO)

**Passo 1: Criar repositório**
1. Acesse: https://github.com/
2. Crie conta ou faça login
3. Clique em "New repository"
4. Nome: `sleepcare-pro`
5. Deixe "Public"

**Passo 2: Fazer upload dos arquivos**
1. Clique em "uploading an existing file"
2. Arraste seus arquivos HTML

**Passo 3: Ativar GitHub Pages**
1. Vá para "Settings"
2. Procure "Pages"
3. Em "Source", selecione "main branch"
4. Seu site estará em: `https://seuusername.github.io/sleepcare-pro`

### Opção 2: Usar Domínio Personalizado

**Com GitHub Pages:**
1. Compre domínio (Namecheap, GoDaddy, Hostinger)
2. Em "Settings > Pages", coloque o domínio
3. Siga as instruções de DNS

**Com Vercel (Mais Fácil):**
1. Acesse: https://vercel.com/
2. Conecte seu GitHub
3. Importe o repositório
4. Vercel fornece domínio automático
5. Upgrade para domínio personalizado

---

## ✏️ Alterações de Texto e Branding

### Mudar Nome da Clínica

Procure por estas linhas e substitua:

```html
<!-- HEADER -->
<h1>💤 SleepCare Pro</h1>

<!-- LOGIN PAGE -->
<h1>💤 SleepCare Pro</h1>
<p>Painel Administrativo - Medicina do Sono</p>

<!-- TITLE -->
<title>SleepCare Pro - Sistema Administrativo</title>
```

**Substitua por:**
```html
<h1>💤 Clínica Natália Vogt</h1>
<p>Especializada em Medicina do Sono</p>
<title>Clínica Natália Vogt - Telemedicina</title>
```

### Mudar Dados do Administrador

Procure por:
```javascript
const ADMIN_CREDENTIALS = {
    email: 'nataliavogt@outlook.com',
    password: 'admin123'
};
```

Altere para sua senha segura:
```javascript
const ADMIN_CREDENTIALS = {
    email: 'nataliavogt@outlook.com',
    password: 'SuaSenhaForte123!@#' // Use senhas fortes!
};
```

### Mudar Dados de Contato

Procure por linhas com seus dados:
```javascript
<span id="currentUser">Natália Vogt</span>
```

---

## 🔧 Dicas Avançadas

### 1. Adicionar Novo Botão no Menu

No arquivo HTML, procure por:
```html
<nav>
    <button class="nav-btn active" data-view="dashboard">📊 Dashboard</button>
    <button class="nav-btn" data-view="patients">👥 Pacientes</button>
```

Adicione:
```html
<button class="nav-btn" data-view="seu-novo-botao">📌 Seu Menu</button>
```

Depois, crie a view correspondente:
```html
<div id="seu-novo-botao" class="view hidden">
    <div class="card">
        <h2>Seu Novo Conteúdo</h2>
        <!-- Adicione o conteúdo aqui -->
    </div>
</div>
```

### 2. Mudar Ícones

Todos os ícones são **Emojis** (fáceis de mudar):

```html
<!-- Procure por emojis -->
💤 (sono)
👥 (pacientes)
📊 (dashboard)
🔐 (segurança)
📧 (email)
```

### 3. Adicionar Logo da Clínica

No `<head>`, adicione:
```html
<link rel="icon" href="https://seu-logo-url.com/logo.png" type="image/png">
```

No header, substitua:
```html
<h1>💤 SleepCare Pro</h1>
```

Por:
```html
<img src="https://seu-logo-url.com/logo.png" height="40" style="margin-right: 15px;">
<h1>SleepCare Pro</h1>
```

### 4. Mudar Tamanhos de Fonte

Procure por:
```css
font-size: 28px;  /* Títulos principais */
font-size: 20px;  /* Subtítulos */
font-size: 14px;  /* Texto normal */
font-size: 13px;  /* Texto pequeno */
```

### 5. Adicionar Rodapé

Antes de `</body>`, adicione:

```html
<footer style="background: #f9fafb; padding: 20px; text-align: center; color: #999; margin-top: 40px; border-top: 1px solid #e0e0e0;">
    <p>&copy; 2026 Dra. Natália Vogt - Medicina do Sono. Todos os direitos reservados.</p>
    <p style="font-size: 12px;">Plataforma desenvolvida com SleepCare Pro | LGPD Compliant</p>
</footer>
```

---

## 📝 Checklist de Customização

- [ ] Email de aprovação configurado
- [ ] Cores personalizadas (roxo → sua cor)
- [ ] Fontes atualizadas
- [ ] Nome da clínica alterado
- [ ] Domínio personalizado (opcional)
- [ ] Logo da clínica adicionada
- [ ] Rodapé com dados da clínica
- [ ] Senha de admin alterada
- [ ] Dados de contato atualizados

---

## 🆘 Dúvidas Comuns

**P: Como faço backup dos meus dados?**
R: Os dados estão no localStorage do navegador. Para backup, use DevTools (F12 > Application > Local Storage) ou exporte periodicamente.

**P: Posso mudar a estrutura dos formulários?**
R: Sim! Procure por `<form id="...">` e edite os campos dentro.

**P: Como adiciono mais campos ao cadastro?**
R: Encontre o formulário de cadastro e adicione:
```html
<div>
    <label>Seu Campo</label>
    <input type="text" id="seuCampo" placeholder="Placeholder" required>
</div>
```

**P: Posso usar em mobile?**
R: Sim! O design é responsivo. Teste em DevTools (F12 > Toggle device toolbar).

**P: Qual é a melhor forma de fazer alterações?**
R: Use um editor como VS Code, faça alterações pequenas, teste no navegador, guarde backups!

---

## 📚 Recursos Úteis

- **Google Fonts**: https://fonts.google.com/
- **Color Picker**: https://colorpicker.com/
- **EmailJS**: https://www.emailjs.com/
- **GitHub Pages**: https://pages.github.com/
- **VS Code**: https://code.visualstudio.com/ (editor recomendado)

---

**Última atualização:** Maio 2026
**Desenvolvido para:** Dra. Natália Vogt
**Versão:** 2.0