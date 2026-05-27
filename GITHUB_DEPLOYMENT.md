# 🚀 Deploy no GitHub Pages - Guia Passo a Passo

## ✅ O que foi preparado

Todos os arquivos estão prontos e já foram "commitados" no git local:
- `sleepcare_questionnaire_platform.html` - Plataforma para pacientes
- `admin-panel.html` - Painel administrativo
- `README.md` - Documentação completa
- `.gitignore` - Arquivo de exclusão
- Commit git criado automaticamente

## 📋 Instruções para Publicar

### Opção 1: Interface GitHub Web (Mais Fácil) ⭐ RECOMENDADO

1. **Abra https://github.com/new** no seu navegador

2. **Preencha o formulário**:
   - Repository name: `sleepcare-pro`
   - Description: `Plataforma de Questionários de Medicina do Sono`
   - Deixe "Public" marcado ✓

3. **Clique "Create repository"**

4. **Na página do repositório, clique "Add file > Upload files"**

5. **Arraste os 4 arquivos** ou abra a pasta:
   ```
   /Users/nataliavogt/Documents/Claude/Projects/Medicina do Sono/
   ```
   E selecione:
   - sleepcare_questionnaire_platform.html
   - admin-panel.html
   - README.md
   - .gitignore

6. **Clique "Commit changes"**

7. **Ative GitHub Pages**:
   - Va para Settings (⚙️) > Pages
   - Em "Source", selecione "main" branch
   - Clique Save

8. **Pronto!** Seu site estará em:
   ```
   https://nataliavogt.github.io/sleepcare-pro/
   ```

---

### Opção 2: Via Terminal (Para Quem Tem Git)

Execute no terminal:

```bash
cd /Users/nataliavogt/Documents/Claude/Projects/Medicina\ do\ Sono

# Configure o repositório remoto
git remote add origin https://github.com/nataliavogt/sleepcare-pro.git

# Faça push dos arquivos
git push -u origin main
```

Depois, ative GitHub Pages conforme Opção 1, passo 7.

---

## 🧪 Teste Antes de Publicar

### Plataforma de Pacientes
1. Abra `sleepcare_questionnaire_platform.html` no navegador
2. Clique "Criar Conta"
3. Teste com:
   - Nome: Teste
   - Email: teste@example.com
   - Telefone: (11) 99999-9999
   - CPF: 123.456.789-09
   - Senha: teste123456
4. Complete um questionário

### Painel Administrativo
1. Abra `admin-panel.html` no navegador
2. Senha: `admin123`
3. Veja os pacientes registrados

---

## ✨ Depois de Publicar

### Compartilhe com Pacientes
```
https://nataliavogt.github.io/sleepcare-pro/
```

### Você Acessa Admin De Qualquer Lugar
```
https://nataliavogt.github.io/sleepcare-pro/admin-panel.html
```

---

## ⚠️ Importante

- **Senha do Admin**: Mude `admin123` para uma senha segura em `admin-panel.html`
- **Dados**: Ficam armazenados no navegador de cada paciente (localStorage)
- **Backup**: Exporte dados periodicamente via admin panel

---

## 📞 Próximos Passos Opcionais

- Integrar envio de emails de recuperação de senha (EmailJS)
- Backend para centralizar dados (Firebase, Vercel, etc)
- Aplicativo mobile
- Sistema de relatórios PDF

---

Desenvolvido para Dra. Natália Vogt | Medicina do Sono
