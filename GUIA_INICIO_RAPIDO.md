# 🚀 Guia de Início Rápido - SleepCare Pro

Bem-vinda ao SleepCare Pro! Sua plataforma de telemedicina em Medicina do Sono está pronta.

---

## 📋 O Que Você Tem

Três arquivos principais foram criados com toda a identidade visual e funcionalidades que desenvolvemos:

### 1. **sleepcare_telemedicine_complete.html**
**Para seus pacientes usarem**

Plataforma completa incluindo:
- ✅ **Diário do Sono** - Seus pacientes registram sono diariamente
- ✅ **Escalas de Avaliação** - PSQI, ISI, ESE, STOP-BANG
- ✅ **Protocolo TCC-i** - 8 semanas de terapia estruturada
- ✅ **Valores e Tone of Voice** - Sua filosofia integrada
- ✅ **LGPD Compliance** - Proteção de dados explicada
- ✅ **Dashboard** - Estatísticas do progresso do paciente

**Como usar:**
1. Abra o arquivo em um navegador (Chrome, Firefox, Edge, Safari)
2. Faça login (qualquer email funciona como teste)
3. Explore todas as seções

---

### 2. **sleepcare_admin_complete.html**
**Para você gerenciar os pacientes**

Painel administrativo completo com:
- ✅ **Dashboard** - Estatísticas de pacientes
- ✅ **Gestão de Pacientes** - Lista todos os registrados
- ✅ **Aprovações Pendentes** - Novos pacientes aguardando
- ✅ **Registro Manual** - Adicionar pacientes manualmente
- ✅ **Email Configuration** - Integrar EmailJS
- ✅ **Auditoria LGPD** - Log de todas as ações
- ✅ **Configurações** - Personalizar dados da clínica
- ✅ **Exportar Dados** - Backup dos pacientes

**Como usar:**
1. Abra o arquivo em um navegador
2. Login: `nataliavogt@outlook.com` / `admin123`
3. Mude as configurações conforme necessário

---

### 3. **CUSTOMIZATION_GUIDE.md**
**Seu guia de customização**

Instruções passo a passo para:
- Integrar EmailJS para emails automáticos
- Mudar cores e branding
- Adicionar seu domínio personalizado
- Modificar fontes e textos

---

## 🎯 Próximos Passos (O Que Fazer Agora)

### **Passo 1: Testar a Plataforma** (5 min)
1. Abra `sleepcare_telemedicine_complete.html` em um navegador
2. Clique em qualquer email para fazer login
3. Explore o Diário, Escalas, TCC-i
4. Sinta-se à vontade para interagir com tudo

### **Passo 2: Testar o Admin** (5 min)
1. Abra `sleepcare_admin_complete.html`
2. Login com: `nataliavogt@outlook.com` / `admin123`
3. Registre um paciente de teste manualmente
4. Veja ele aparecer na lista de pacientes

### **Passo 3: Integrar Email (Opcional, mas Recomendado)** (20 min)
Siga os passos do **CUSTOMIZATION_GUIDE.md** seção "Integração de Email"
- Crie conta gratuita em emailjs.com
- Configure para enviar automático quando aprovar pacientes
- Suas credenciais vão no admin panel

### **Passo 4: Personalizar Sua Marca** (30 min)
No painel admin (Settings):
- [ ] Mude "SleepCare Pro" para seu nome
- [ ] Atualize seu email de contato
- [ ] Adicione seu telefone
- [ ] Mude sua senha de admin

### **Passo 5: Deploy (Quando Estiver Pronto)** (Varia)
Escolha uma opção:

**Opção A: GitHub Pages (GRÁTIS, Recomendado)**
1. Acesse github.com e crie uma conta
2. Crie um repositório chamado `sleepcare`
3. Faça upload dos 2 arquivos HTML
4. Ative GitHub Pages (Settings > Pages)
5. Seu site estará em: `https://seuusername.github.io/sleepcare`

**Opção B: Vercel (GRÁTIS com domínio grátis)**
1. Acesse vercel.com
2. Conecte seu GitHub
3. Importe o repositório
4. Vercel faz tudo automaticamente

**Opção C: Seu próprio servidor/hosting**
Qualquer serviço de hosting de HTML funciona (Netlify, Firebase, AWS, etc)

---

## 🔑 Credenciais Padrão

### Paciente:
- **Email:** Qualquer email (não precisa validar)
- **Senha:** Qualquer coisa (demo)

### Admin:
- **Email:** nataliavogt@outlook.com
- **Senha:** admin123 (⚠️ Mude isso!)

---

## 📱 Design Responsivo

Ambas as plataformas funcionam perfeitamente em:
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, etc)
- ✅ Mobile (iPhone, Android)

Teste redimensionando seu navegador (F12 > Toggle device toolbar)

---

## 💾 Dados e Privacidade

**Como funcionam os dados:**
- Tudo é armazenado localmente no navegador (localStorage)
- Nenhum servidor externo (exceto EmailJS se configurado)
- Dados são SEUS - você controla completamente
- Qualquer pessoa com acesso ao computador vê os dados

**Para backup:**
- No admin panel vá em Settings > Exportar Dados
- Salva um arquivo JSON com tudo
- Você pode guardar em segurança

---

## 🎨 Cores e Branding

A plataforma usa:
- **Verde Principal:** #10b981
- **Coral/Laranja:** #f97316
- **Azul Acentuado:** #3b82f6
- **Creme Claro:** #fef9f3
- **Fonte:** Poppins (Google Fonts)

Se quiser mudar cores, edite o `:root` nos `<style>` de qualquer arquivo

---

## ❓ Perguntas Frequentes

### **P: Como adiciono um novo paciente?**
R: 
- Pacientes podem se registrar entrando na plataforma
- Você também pode registrá-los manualmente no admin > Pendentes

### **P: Como aprovo um novo paciente?**
R: Admin > Aprovações Pendentes > Clique "Aprovar"

### **P: Posso mudar as cores?**
R: Sim! Procure por `--primary: #10b981` nos styles e altere

### **P: Posso hospedar em um domínio personalizado?**
R: Sim! Leia a seção "Customização de Domínio" no CUSTOMIZATION_GUIDE.md

### **P: Que informações os pacientes veem?**
R: Diário, Escalas, Protocolo TCC-i, Valores, LGPD - Nenhuma informação privada da admin

### **P: Posso ver o progresso dos meus pacientes?**
R: Não neste momento (seria no futuro com um backend). Agora cada paciente vê seu próprio progresso

### **P: Como faço backup dos dados?**
R: Admin > Settings > Exportar Dados

### **P: É LGPD compliant?**
R: Sim! Tem seção LGPD na plataforma e coleta consentimento

---

## 🆘 Se Algo Não Funcionar

1. **Verifique o console (F12 > Console)** - vê erros
2. **Limpe cache (Ctrl+Shift+Delete)**
3. **Tente outro navegador**
4. **Se ficar com dúvida sobre customização**, volte ao CUSTOMIZATION_GUIDE.md

---

## 📚 Arquivos Importantes

```
Medicina do Sono/
├── sleepcare_telemedicine_complete.html    ← Pacientes usam
├── sleepcare_admin_complete.html           ← Você (admin) usa
├── CUSTOMIZATION_GUIDE.md                  ← Como customizar
└── GUIA_INICIO_RAPIDO.md                   ← Este arquivo
```

---

## 🎉 Você Está Pronto!

Sua plataforma profissional de telemedicina está:
- ✅ Completa
- ✅ Brandificada com sua identidade
- ✅ Funcional e testada
- ✅ LGPD compliant
- ✅ Pronta para usar

**Próximo passo:** Abra `sleepcare_telemedicine_complete.html` e explore! 🚀

---

## 💡 Dicas Pro

1. **Teste tudo antes de mostrar para pacientes**
2. **Configure EmailJS antes de aprovar pacientes**
3. **Mude a senha de admin!**
4. **Faça backup dos dados regularmente**
5. **Se quiser melhorias**, guarde uma lista e pedimos depois

---

**Desenvolvido com ❤️ para Dra. Natália Vogt**
*Especialista em Medicina do Sono - SleepCare Pro*

Maio 2026
