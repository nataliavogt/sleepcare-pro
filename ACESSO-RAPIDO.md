# 🚀 Acesso Rápido - SleepCare Pro

## 🌐 Links de Acesso

```
┌─────────────────────────────────────────────────────────────┐
│                    SERVIDORES LOCAIS                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  📋 Admin Panel (v2 - Recomendado)                          │
│  http://localhost:8000/sleepcare_admin_v2.html              │
│                                                               │
│  👤 Plataforma do Paciente                                  │
│  http://localhost:8000/sleepcare_telemedicine_complete.html │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Estrutura de Arquivos

```
Medicina do Sono/
├── sleepcare_admin_v2.html              ⭐ NOVO (Use este!)
├── sleepcare_admin_complete.html         (Versão anterior)
├── sleepcare_telemedicine_complete.html  (Plataforma paciente)
├── logo-natalia-vogt.svg                 (Logo SVG da clínica)
│
├── GUIA-BACKUPS.md                       📚 Leia isso!
├── GUIA_INICIO_RAPIDO.md
├── CUSTOMIZATION_GUIDE.md
│
└── backups/
    ├── README.md                         (Documentação completa)
    ├── organizar-backups.sh              (Script automático)
    ├── cores/                            (Backups de cores)
    ├── escalas/                          (Backups de escalas)
    ├── protocolo/                        (Backups de protocolo)
    ├── conteudo/                         (Backups de conteúdo)
    └── branding/                         (Backups de logo/fonte)
```

---

## ⚡ Fluxo de Trabalho Rápido

### 1️⃣ **Abrir Painel Admin**
```
Abra: http://localhost:8000/sleepcare_admin_v2.html
```

### 2️⃣ **Escolher Opção**
```
┌────────────────────────────────────────┐
│ ⚙️ Configurações  → Cores, Logo, Fonte │
│ 📊 Escalas        → PSQI, ISI, ESE,... │
│ 🔄 Protocolo      → TCC-i (8 semanas)  │
│ 📝 Conteúdo       → Textos e boas-vindo│
│ 💾 Backups        → Export/Import      │
└────────────────────────────────────────┘
```

### 3️⃣ **Editar e Salvar**
```
1. Faça suas edições
2. Clique em "Salvar [Tipo]"
3. Clique em "💾 Exportar [Tipo]"
```

### 4️⃣ **Organizar Backups** (Opcional)
```bash
bash backups/organizar-backups.sh
```

### 5️⃣ **Verificar na Plataforma**
```
Abra: http://localhost:8000/sleepcare_telemedicine_complete.html
As mudanças aparecem instantaneamente! ✨
```

---

## 🎨 Customizações Disponíveis

### Cores
- ✅ 9 cores personalizáveis (marca completa)
- ✅ Color picker visual
- ✅ Aplicação em tempo real
- ✅ Exportar/Importar

### Escalas Clínicas
- ✅ PSQI (Pittsburgh Sleep Quality Index)
- ✅ ISI (Insomnia Severity Index)
- ✅ ESE (Epworth Sleepiness Scale)
- ✅ STOP-BANG (Sleep Apnea)

### Protocolo TCC-i
- ✅ 8 semanas customizáveis
- ✅ Introdução personalizável
- ✅ Descrições de cada semana
- ✅ Exportar/Importar

### Conteúdo
- ✅ Título de boas-vindas
- ✅ Descrição de boas-vindas
- ✅ Textos personalizáveis

### Branding
- ✅ Upload de logo (PNG/JPG)
- ✅ Seleção de 5 fontes
- ✅ Preview da logo

---

## 💾 Sistema de Backups

### Exportar
```
1. Admin v2 → Seção desejada
2. Clique "💾 Exportar [Tipo]"
3. Arquivo JSON baixa automaticamente
4. (Opcional) Execute: bash backups/organizar-backups.sh
```

### Importar
```
1. Admin v2 → Aba "💾 Backups"
2. Selecione arquivo JSON
3. Configurações restauradas instantaneamente ✅
```

### Estrutura de Arquivos
```
backups/cores/
  └── backup-cores-2026-05-04T23-15-30.json

backups/escalas/
  └── backup-escalas-2026-05-04T23-15-30.json

backups/protocolo/
  └── backup-protocolo-2026-05-04T23-15-30.json

backups/conteudo/
  └── backup-conteudo-2026-05-04T23-15-30.json

backups/branding/
  └── backup-branding-2026-05-04T23-15-30.json

backups/
  └── backup-completo-2026-05-04T23-15-30.json (Todos os dados)
```

---

## 🔐 Dados Salvos no localStorage

```javascript
sleepcare_settings = {
  customColors: { /* 9 cores */ },
  customContent: { /* Textos */ },
  customBranding: { /* Logo + Fonte */ },
  customScales: { /* Escalas */ },
  customProtocol: { /* TCC-i */ }
}

sleepcare_css_overrides = `:root { /* Variáveis CSS */ }`
```

---

## 🧪 Teste Rápido

```bash
# 1. Abra o admin
open http://localhost:8000/sleepcare_admin_v2.html

# 2. Edite uma cor (Configurações → Cores)
# 3. Clique "Salvar Cores"
# 4. Abra o paciente em outra aba
open http://localhost:8000/sleepcare_telemedicine_complete.html

# 5. Verifique se a cor mudou! ✅
```

---

## 📚 Documentação

| Arquivo | Conteúdo |
|---------|----------|
| `GUIA-BACKUPS.md` | 📖 Guia completo de backups |
| `GUIA_INICIO_RAPIDO.md` | 🚀 Quick start guide |
| `CUSTOMIZATION_GUIDE.md` | 🎨 Guia de customização |
| `backups/README.md` | 📋 Documentação técnica |

---

## 🎓 Exemplos de Uso

### Exemplo 1: Mudar Cores da Marca
```
1. Admin → Configurações
2. Mudar Primary para #FF5733
3. Salvar Cores
4. Paciente → As cores mudaram! ✨
```

### Exemplo 2: Adicionar Logo
```
1. Admin → Configurações → Logo e Fonte
2. Selecionar imagem PNG/JPG (max 500KB)
3. Ver preview
4. Salvar Logo e Fonte
5. Paciente → Logo aparece no header
```

### Exemplo 3: Editar Protocolo TCC-i
```
1. Admin → Protocolo
2. Editar Semana 1-8
3. Salvar Protocolo
4. Exportar Protocolo (backup!)
5. Paciente → Novo protocolo visível
```

### Exemplo 4: Backup e Restauração
```
1. Admin → Faça várias edições
2. Vá para "💾 Backups"
3. Clique "💾 Exportar Tudo"
4. Arquivo salva em Downloads
5. Execute: bash backups/organizar-backups.sh
6. Arquivo organizado em: backups/backup-completo-*.json
```

---

## 🆘 Troubleshooting

| Problema | Solução |
|----------|---------|
| Página em branco | Recarregue F5 ou Cmd+R |
| Mudanças não aparecem | Verifique localStorage (DevTools) |
| Arquivo não organizado | Execute: `bash backups/organizar-backups.sh` |
| Erro ao importar | Confirm formato JSON correto |
| Logo não aparece | Verificar tamanho (max 500KB) |

---

## 📞 Atalhos Úteis

| Atalho | Resultado |
|--------|-----------|
| `Cmd+Shift+Delete` (Mac) | Limpar localStorage |
| `F12` | Abrir DevTools |
| `Cmd+Option+I` (Mac) | Abrir DevTools (alternativo) |
| `Cmd+R` | Recarregar página |
| `Cmd+Shift+R` | Recarregar (limpar cache) |

---

## ✅ Checklist de Configuração

```
☐ Abri o Admin v2
☐ Mudei as cores da marca
☐ Upload do logo realizado
☐ Descrições das escalas editadas
☐ Protocolo TCC-i customizado
☐ Conteúdo de boas-vindas atualizado
☐ Backup exportado
☐ Plataforma do paciente testada
☐ Backups organizados nas pastas
☐ Tudo funcionando! ✨
```

---

## 🎯 Próximos Passos

1. ✅ Abra o Admin v2
2. ✅ Customize as cores, escalas, protocolo
3. ✅ Exporte seus backups
4. ✅ Organize com o script
5. ✅ Compartilhe os links com sua equipe

---

**Última atualização:** 04/05/2026
**Status:** ✅ 100% Funcional
**Versão:** 2.0 (v2)

---

## 📞 Suporte Rápido

### Admin não mostra nada?
→ Use `sleepcare_admin_v2.html` (melhorado)

### Escalas não aparecem na plataforma?
→ Verifique se estão salvas (localStorage)

### Preciso de backup?
→ Vá para "💾 Backups" e exporte tudo

### Como organizar arquivos?
→ Execute: `bash backups/organizar-backups.sh`

---

🎉 **Tudo pronto para começar!**
