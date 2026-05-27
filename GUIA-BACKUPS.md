# 📚 Guia Rápido - Sistema de Backups

## 🎯 O que é?

O sistema de backups permite você:
- ✅ **Exportar** suas customizações (cores, escalas, protocolo, conteúdo)
- ✅ **Salvá-las** em arquivos JSON organizados por tipo
- ✅ **Restaurar** qualquer versão anterior com um clique
- ✅ **Fazer backup completo** de toda a plataforma

---

## 🚀 Guia de Uso Rápido

### 1️⃣ **Exportar Customizações**

**No Painel Admin v2:**
1. Vá para a seção desejada (Cores, Escalas, Protocolo, Conteúdo)
2. Faça suas edições
3. Clique em **"💾 Exportar [Tipo]"**
4. Um arquivo `.json` será baixado nos Downloads

```
Exemplo: backup-cores-2026-05-04T23-15-30.json
```

---

### 2️⃣ **Salvar Backups nas Pastas**

**Opção A - Manual:**
```bash
# Abra o Finder e copie os arquivos para:
backups/cores/
backups/escalas/
backups/protocolo/
backups/conteudo/
backups/branding/
```

**Opção B - Automático (Mac/Linux):**
```bash
# Execute o script no Terminal:
cd "/Users/nataliavogt/Documents/Claude/Projects/Medicina do Sono/backups"
bash organizar-backups.sh
```

---

### 3️⃣ **Restaurar Backup**

**No Painel Admin v2:**
1. Vá para aba **"💾 Backups"**
2. Scroll até **"Importar Backup"**
3. Clique em **"Selecione um arquivo JSON"**
4. Escolha um arquivo `.json` das suas pastas
5. As configurações serão restauradas automaticamente ✅

---

## 📂 Estrutura de Pastas

```
backups/
├── cores/
│   ├── backup-cores-2026-05-04T23-15-30.json
│   └── backup-cores-2026-05-03T18-20-15.json
├── escalas/
│   ├── backup-escalas-2026-05-04T23-15-30.json
│   └── ...
├── protocolo/
├── conteudo/
├── branding/
├── backup-completo-2026-05-04T23-15-30.json
├── organizar-backups.sh
└── README.md
```

---

## 🎨 Exemplo: Salvar Customização de Cores

### Passo 1: Editar Cores
```
1. Painel Admin v2
2. Aba "⚙️ Configurações"
3. Seção "🎨 Personalizar Cores"
4. Altere as cores desejadas
```

### Passo 2: Exportar
```
1. Clique em "💾 Exportar Cores"
2. Arquivo baixa como: backup-cores-2026-05-04T23-15-30.json
```

### Passo 3: Organizar
```bash
# Se usar o script:
bash organizar-backups.sh

# Arquivo irá para: backups/cores/backup-cores-2026-05-04T23-15-30.json
```

### Passo 4: Restaurar (se necessário)
```
1. Admin v2 → Aba "💾 Backups"
2. Seção "Importar Backup"
3. Selecione: backup-cores-2026-05-04T23-15-30.json
4. Cores restauradas ✅
```

---

## 💾 Tipos de Backup

| Tipo | Pasta | Conteúdo | Uso |
|------|-------|----------|-----|
| 🎨 Cores | `cores/` | 9 cores da marca | Recuperar paleta anterior |
| 📊 Escalas | `escalas/` | PSQI, ISI, ESE, STOP-BANG | Histórico de descrições |
| 🔄 Protocolo | `protocolo/` | TCC-i (8 semanas) | Versões do protocolo |
| 📝 Conteúdo | `conteudo/` | Textos de boas-vindas | Atualizações de copy |
| 🖼️ Branding | `branding/` | Logo + Fonte | Logos anteriores |
| 🔐 Completo | `backups/` | Todos os dados | Backup total |

---

## 🔒 Boas Práticas

### ✅ Faça
- 📅 Exporte regularmente (ex: toda semana)
- 🏷️ Nomeie seus backups descritivamente
- 📦 Mantenha cópias em local seguro
- 🔄 Use backups antes de mudanças grandes

### ❌ Evite
- 🗑️ Deletar backups sem cópia
- ✏️ Editar manualmente arquivos JSON
- 🔓 Compartilhar backups com dados sensíveis
- 📱 Confiar só em backups locais

---

## 🤔 Perguntas Frequentes

**P: Por quanto tempo devo manter os backups?**
R: Mantenha pelo menos os últimos 3-5 backups de cada tipo.

**P: Posso editar manualmente o arquivo JSON?**
R: Não recomendado. Use o painel admin para editar.

**P: Como faço backup do logo?**
R: Use "💾 Exportar" na seção de Branding.

**P: Onde fico encontrar meus arquivos exportados?**
R: Em `~/Downloads/` ou na pasta `backups/` se usar o script.

**P: Posso restaurar um backup específico sem afetar outros dados?**
R: Sim! Cada tipo (cores, escalas, etc.) pode ser restaurado independentemente.

---

## 📞 Troubleshooting

### Problema: Arquivo não aparece na pasta
**Solução:** 
```bash
# Use o script de organização:
bash organizar-backups.sh
```

### Problema: Erro ao importar
**Solução:**
- Verifique se o arquivo é `.json`
- Confirme que foi exportado do painel admin
- Tente importar novamente

### Problema: Não consigo encontrar os backups antigos
**Solução:**
```bash
# Liste todos os backups:
ls -la backups/*/
```

---

## 🎓 Exemplo Completo

```
Dia 1:
├─ Edito cores da marca
├─ Clico "💾 Exportar Cores"
└─ backup-cores-2026-05-04T10-30-00.json é criado

Dia 2:
├─ Edito descrições das escalas
├─ Clico "💾 Exportar Escalas"
└─ backup-escalas-2026-05-05T14-45-00.json é criado

Dia 3:
├─ Cliente pede para voltar às cores de Day 1
├─ Vou para "💾 Backups"
├─ Importo: backup-cores-2026-05-04T10-30-00.json
└─ Cores restauradas ✅
```

---

**Última atualização:** 04/05/2026
**Versão:** 1.0
