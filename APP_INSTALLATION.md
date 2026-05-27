# 📱 SleepCare Pro - Guia de Instalação como Aplicativo

## 🎯 O que é um PWA?

**PWA (Progressive Web App)** é um aplicativo que funciona como um app nativo, mas é desenvolvido com tecnologias web (HTML, CSS, JavaScript). Funciona em qualquer dispositivo!

### ✨ Benefícios do PWA

- ✅ Instalação como app real no celular/tablet
- ✅ Funciona completamente offline
- ✅ Ícone na tela inicial
- ✅ Notificações push
- ✅ Acesso rápido (sem abrir navegador)
- ✅ Funciona em iOS, Android, Windows, Mac
- ✅ Não precisa de App Store

---

## 📲 Como Instalar em Diferentes Dispositivos

### 🍎 iPhone / iPad (iOS)

1. **Abra o app Safari**
2. **Digite o URL**:
   ```
   https://nataliavogt.github.io/sleepcare-pro/
   ```
3. **Clique no botão "Compartilhar"** (quadrado com seta)
4. **Selecione "Adicionar à Tela Inicial"**
5. **Confirme o nome** (ex: "SleepCare Pro")
6. **Clique "Adicionar"**

✅ Pronto! Você terá um ícone com a logo do app na tela inicial.

### 🤖 Android

#### Opção 1: Chrome (Recomendado)
1. **Abra o Google Chrome**
2. **Digite o URL**:
   ```
   https://nataliavogt.github.io/sleepcare-pro/
   ```
3. **Clique nos 3 pontos** (menu ≡) no canto superior direito
4. **Selecione "Instalar app"** ou "Instalar SleepCare Pro"
5. **Confirme "Instalar"**

#### Opção 2: Firefox
1. **Abra o Firefox**
2. **Acesse o URL** (mesmo acima)
3. **Clique no ícone da casa com sinal +** (barra de endereço)
4. **Clique em "Adicionar à tela inicial"**

### 💻 Windows / Mac (Desktop)

#### Chrome
1. **Abra o Google Chrome**
2. **Digite o URL**:
   ```
   https://nataliavogt.github.io/sleepcare-pro/
   ```
3. **Clique no ícone de download** na barra de endereço
4. **Selecione "Instalar SleepCare Pro"**
5. **Confirme "Instalar"**

Você terá um app na tela inicial / menu iniciar.

#### Edge
1. Passos similares ao Chrome
2. Procure por **"Instalar este site como um app"** no menu ≡

---

## 🔧 Recursos do Aplicativo

### Offline
- ✅ App funciona mesmo sem internet
- ✅ Todos os questionários disponíveis offline
- ✅ Dados salvos automaticamente
- ✅ Sincroniza quando internet volta

### Sincronização Automática
- ✅ Quando você volta online, dados sincronizam
- ✅ Notificações de atualizações disponíveis
- ✅ Auto-atualização em background

### Atalhos Rápidos
Quando o app está instalado, você pode:

**iPhone/iPad**:
- Pressione e segure o ícone do app
- Você verá atalhos para:
  - Começar um novo questionário
  - Acessar painel administrativo

**Android**:
- Pressione e segure o ícone do app
- Selecione "App info"
- Veja atalhos disponíveis

---

## 🔔 Notificações Push

Se o app solicitar permissão para notificações:

**Clique "Permitir"** para receber:
- Lembretes para preencher questionários
- Confirmação de respostas salvas
- Atualizações do sistema

---

## 📊 Acessar como Aplicativo

### Depois de Instalado

**iPhone/iPad**:
- Toque no ícone na tela inicial
- Abre em modo "tela cheia" (sem navegador)

**Android**:
- Toque no ícone na tela inicial ou drawer
- Abre em modo "tela cheia"

**Windows/Mac**:
- Clique no ícone no desktop ou menu iniciar
- Abre em janela do aplicativo

---

## 🛠️ Troubleshooting

### Opção "Instalar" não aparece

**Motivo**: O app pode não estar visível em alguns navegadores antigos.

**Solução**:
1. Atualize seu navegador
2. Use Chrome, Edge ou Firefox (versões recentes)
3. Certifique-se de ter acesso à internet
4. Limpe cache do navegador (Settings > Privacy > Clear data)

### App não funciona offline

**Motivo**: Service Worker pode não estar registrado.

**Solução**:
1. Abra o app novamente online
2. Aguarde 30 segundos (Service Worker registra)
3. Acesse Developer Tools (F12 > Application > Service Workers)
4. Confirme que "service-worker.js" está "activated"

### Notificações não aparecem

**Motivo**: Permissão pode ter sido recusada.

**Solução**:
1. **iPhone**: Settings > SleepCare Pro > Notifications > Allow
2. **Android**: Settings > Notifications > SleepCare Pro > Toggle On
3. **Windows**: Settings > Notifications > SleepCare Pro > On

---

## 📱 Versão Responsiva

O app funciona perfeitamente em qualquer tamanho de tela:

- **iPhone/iPad pequeno**: Interface otimizada
- **iPad grande**: Layout expandido
- **Desktop**: Modo full-screen ou janela

Todos têm exatamente a mesma funcionalidade!

---

## 🔒 Segurança da Aplicação

### Dados Locais
- ✅ Armazenados **apenas no seu dispositivo**
- ✅ Criptografia de navegador (sandbox)
- ✅ Sem servidor externo

### Atualizações
- ✅ Service Worker verifica atualizações a cada minuto
- ✅ Atualiza automaticamente em background
- ✅ Você recebe notificação de nova versão

---

## 📞 Dicas Úteis

### Liberar Espaço
Se o app usar muito espaço:
1. Abra Developer Tools (F12)
2. Vá em "Application" > "Storage"
3. Clique "Clear site data"
⚠️ Isso apagará dados locais - faça backup primeiro!

### Atualizar App Manualmente
Se não atualizar automaticamente:
1. Limpe o cache (Settings > Clear browsing data)
2. Feche o app completamente
3. Abra novamente
4. App será atualizado

### Compartilhar App
Você pode compartilhar o link com seus pacientes:
```
https://nataliavogt.github.io/sleepcare-pro/
```

Eles podem instalar nos próprios dispositivos!

---

## 🎁 Próximos Passos (Opcional)

### Criar App Nativa (iOS/Android)
Se quiser versão com mais recursos:
- Usar ferramentas como Capacitor ou React Native
- Publicar na App Store e Google Play
- Custo: ~$99/ano (Apple) + recursos (Google)

### Criar App Desktop (Windows/Mac)
Usando Electron (já configurado em `electron-main.js`)

---

## 📋 Checklist de Instalação

- [ ] Acessei o app no navegador
- [ ] App foi oferecido para instalar
- [ ] Cliquei em instalar
- [ ] App aparece na tela inicial
- [ ] Consegui abrir o app
- [ ] Service Worker registrou (F12 > Application)
- [ ] Criei uma conta
- [ ] Completei um questionário
- [ ] Dados foram salvos
- [ ] Funciona offline

---

Desenvolvido para Dra. Natália Vogt | Medicina do Sono | 2026
