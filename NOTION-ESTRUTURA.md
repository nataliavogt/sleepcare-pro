# 🏥 SleepCare Pro - Documentação Notion

## Como Criar no Notion

### Opção 1: Criar Manual (Recomendado para melhor controle)
1. Vá para [Notion](https://notion.so)
2. Crie um novo **Database** chamado "SleepCare Pro"
3. Copie a estrutura abaixo

### Opção 2: Importar HTML (Rápido)
1. No Notion, clique em **Import**
2. Selecione **HTML**
3. Cole o conteúdo fornecido

---

## 📑 Estrutura Recomendada do Notion

```
SleepCare Pro (Workspace)
│
├── 🏠 Home
│   ├── Dashboard Geral
│   ├── Status da Plataforma
│   └── Atualizações Recentes
│
├── 📋 Documentação
│   ├── Guia de Início Rápido
│   ├── Manual do Admin
│   ├── Manual do Paciente
│   └── Troubleshooting
│
├── 💾 Backups & Configurações
│   ├── Histórico de Cores
│   ├── Histórico de Escalas
│   ├── Histórico de Protocolo
│   └── Histórico de Conteúdo
│
├── 🔧 Customizações
│   ├── Cores Atuais
│   ├── Escalas Clínicas
│   ├── Protocolo TCC-i
│   ├── Conteúdo
│   └── Branding
│
├── 📊 Analytics & Logs
│   ├── Auditoria de Mudanças
│   ├── Histórico de Acesso
│   └── Métricas da Plataforma
│
└── 🤝 Equipe & Permissões
    ├── Usuários
    ├── Papéis
    └── Histórico de Acesso

```

---

## 🎨 Cores Atuais da Marca

| Nome | Código | Uso |
|------|--------|-----|
| 🟠 Laranja Aurora | #C76134 | Primária / Ação |
| 🔵 Azul Acinzentado | #99A8AD | Secundária |
| 🟢 Verde Vivo | #49401F | Destaque / Sucesso |
| 🟤 Areia do Tempo | #EADACA | Fundo Claro |
| 🟫 Marrom Intenso | #62210F | Texto Escuro |
| ⚪ Borda Suave | #D4C4C0 | Bordas |
| 🟡 Texto Cinza | #8B7355 | Textos Secundários |

---

## 📊 Escalas Clínicas

### PSQI - Pittsburgh Sleep Quality Index
**Tipo:** Avaliação de Qualidade do Sono  
**Duração:** 10 minutos  
**Componentes:** 7 (qualidade, latência, duração, eficiência, distúrbios, medicação, sonolência)

### ISI - Insomnia Severity Index
**Tipo:** Medida de Insônia  
**Duração:** 5 minutos  
**Itens:** 7 questões

### ESE - Epworth Sleepiness Scale
**Tipo:** Escala de Sonolência  
**Duração:** 2-3 minutos  
**Itens:** 8 cenários de sonolência

### STOP-BANG
**Tipo:** Rastreamento de Apneia do Sono  
**Duração:** 1 minuto  
**Itens:** 8 questões binárias

---

## 🔄 Protocolo TCC-i (8 Semanas)

| Semana | Foco | Conteúdo |
|--------|------|----------|
| 1 | Avaliação | Educação sobre sono |
| 2 | Higiene | Boas práticas de sono |
| 3 | Restrição | Ajuste de tempo na cama |
| 4 | Cognitivo | Mudança de pensamentos |
| 5 | Consolidação | Estabilização ganhos |
| 6 | Recaída | Prevenção de recaída |
| 7 | Manutenção | Sustentabilidade |
| 8 | Conclusão | Plano de continuidade |

---

## 📱 Funcionalidades Principais

### Para Pacientes
- ✅ Diário do Sono (entrada diária)
- ✅ Escalas de Avaliação (PSQI, ISI, ESE, STOP-BANG)
- ✅ Protocolo TCC-i (acompanhamento)
- ✅ Dashboard (visualização de progresso)
- ✅ LGPD (privacidade garantida)

### Para Administradores
- ✅ Gerenciamento de Pacientes
- ✅ Aprovações (pendências)
- ✅ Customização de Cores (9 cores)
- ✅ Customização de Escalas
- ✅ Customização de Protocolo
- ✅ Customização de Conteúdo
- ✅ Upload de Logo
- ✅ Seleção de Fontes
- ✅ Gerenciamento de Backups
- ✅ Auditoria LGPD
- ✅ Envio de Emails (EmailJS)

---

## 🔐 Dados & Privacidade

### Armazenamento
- **Local:** localStorage (browser do usuário)
- **Tipo:** JSON estruturado
- **Sincronização:** Nenhuma (cliente-side only)

### Conformidade
- ✅ LGPD (Lei Geral de Proteção de Dados)
- ✅ Auditoria de acesso
- ✅ Logs de modificação
- ✅ Consentimento informado

### Dados Armazenados
```
sleepcare_settings
├── customColors
├── customContent
├── customBranding
├── customScales
├── customProtocol
└── emailTemplates

sleepcare_css_overrides
sleepcare_audit_log
```

---

## 💻 Stack Técnico

| Aspecto | Tecnologia |
|--------|-----------|
| Frontend | HTML5 + CSS3 + JavaScript |
| Persistência | localStorage |
| Email | EmailJS API |
| Fonte | Google Fonts (DM Sans) |
| Cores | CSS Custom Properties |
| Responsividade | CSS Grid + Flexbox |
| Backup | JSON export/import |

---

## 📁 Arquivos do Projeto

```
Medicina do Sono/
├── sleepcare_admin_v2.html              (Admin Panel)
├── sleepcare_telemedicine_complete.html (Platform)
├── logo-natalia-vogt.svg                (Logo)
├── GUIA-BACKUPS.md
├── ACESSO-RAPIDO.md
│
└── backups/
    ├── cores/
    ├── escalas/
    ├── protocolo/
    ├── conteudo/
    ├── branding/
    └── organizar-backups.sh
```

---

## 🌐 URLs de Acesso

| Link | URL |
|------|-----|
| Admin Panel v2 | http://localhost:8000/sleepcare_admin_v2.html |
| Plataforma Paciente | http://localhost:8000/sleepcare_telemedicine_complete.html |

---

## 📊 Métricas & Status

### Platform Status
- ✅ Frontend: Funcional
- ✅ Storage: localStorage
- ✅ Email: EmailJS
- ✅ Customização: 100%
- ✅ Backups: Implementado

### Funcionalidades
- ✅ Core Features: Completo
- ✅ Admin Features: Completo
- ✅ Patient Features: Completo
- ✅ Backup System: Completo

### Documentação
- ✅ Guia Rápido: ✓
- ✅ Guia de Backups: ✓
- ✅ Manual Admin: ✓
- ✅ Manual Paciente: ✓

---

## 📅 Histórico de Atualizações

### v2.0 (05/05/2026)
- ✅ Admin Panel v2 (melhorado)
- ✅ Sistema de Backups
- ✅ Exportação de Edições
- ✅ Documentação Notion

### v1.0 (04/05/2026)
- ✅ Platform Inicial
- ✅ Admin Features
- ✅ Patient Features
- ✅ Customizações

---

## 🎓 Como Usar a Plataforma

### 1️⃣ Admin Login
```
URL: sleepcare_admin_v2.html
Obs: No navegador local (localhost:8000)
```

### 2️⃣ Customize
```
Cores → Escalas → Protocolo → Conteúdo
Clique "Salvar [Tipo]"
Clique "💾 Exportar [Tipo]"
```

### 3️⃣ Backup
```
Aba "💾 Backups"
Importar arquivo anterior
ou
Fazer novo backup
```

### 4️⃣ Pacientes Acessam
```
URL: sleepcare_telemedicine_complete.html
Veem suas customizações!
```

---

## 🆘 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Mudanças não salvam | Verificar localStorage (F12) |
| Admin em branco | Recarregar (Cmd+R) |
| Escala não aparece | Exportar e importar |
| Logo não mostra | Verificar tamanho (max 500KB) |

---

## 📞 Contato & Suporte

**Documentação:**
- GUIA-BACKUPS.md
- ACESSO-RAPIDO.md
- GUIA_INICIO_RAPIDO.md

**Tecnologia:**
- HTML5, CSS3, JavaScript
- localStorage
- EmailJS

**Responsável:**
Dra. Natália Vogt - Sleep Medicine Specialist

---

**Última atualização:** 05/05/2026
**Versão:** 2.0
**Status:** ✅ Production Ready
