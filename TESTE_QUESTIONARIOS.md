# 🧪 Guia de Teste - Questionários SleepCare Pro

## ✅ Problemas Corrigidos

1. **Suporte a Tipos de Perguntas**: Agora suporta todos os tipos
   - `yesno` - Sim/Não
   - `likert4` - 0-3 (Nunca, Raramente, Frequentemente, Sempre)
   - `likert5` - 0-4 (Nenhuma, Leve, Moderada, Grave, Muito grave)
   - `number` - Entrada de números
   - `time` - Seletor de hora
   - `select` - Dropdown com opções

2. **Conversão de Tipos**: Valores agora são convertidos corretamente para scoring
3. **Validação**: Botão "Próximo" só funciona quando resposta é fornecida

## 🧪 Como Testar

### 1. Abra a Plataforma
```
Abra sleepcare_questionnaire_platform.html no navegador
```

### 2. Criar Conta de Teste
```
Nome: Natália
Email: natalia@teste.com
Telefone: (11) 98765-4321
CPF: 123.456.789-09 (válido para teste)
Senha: teste123456
Confirme a senha: teste123456
✓ Marque LGPD
```

### 3. Teste Cada Questionário

#### 📋 STOP-Bang (8 perguntas - Mais Rápido)
**Tempo**: ~5 minutos
- Tipo: Sim/Não simples
- ✅ Teste: Responda algumas "Sim" e algumas "Não"
- Resultado esperado: Pontuação 0-8

**Teste Específico**:
- Responda "Sim" para 5 perguntas
- Resultado esperado: Score = 5 (Alto risco)

#### 📊 PSQI (19 perguntas - Mais Complexo)
**Tempo**: ~10 minutos
- Tipos mistos: Likert, números, horas
- ✅ Teste: Este é o que foi corrigido!

**Teste Específico**:
1. Pergunta 1 (Qualidade): Selecione opção
2. Pergunta 2 (Horas de sono): Digite número (ex: 6)
3. Pergunta 3 (Hora de dormir): Selecione hora (ex: 23:00)
4. Pergunta 4 (Minutos para adormecer): Digite número (ex: 15)
5. Continue com as demais...

#### 📈 ISI (7 perguntas)
**Tempo**: ~5 minutos
- Tipo: Likert 0-4
- ✅ Teste: Escala consistente
- Resultado esperado: Pontuação 0-28

#### 😴 Epworth (8 perguntas)
**Tempo**: ~5 minutos
- Tipo: Likert 0-3
- ✅ Teste: Situações cotidianas
- Resultado esperado: Pontuação 0-24

## 🎯 Checklist de Validação

### Funcionalidades Básicas
- [ ] Questões aparecem uma por tela
- [ ] Instrução de resposta aparece corretamente
- [ ] Barra de progresso funciona
- [ ] Botão "Voltar" aparece na pergunta 2+
- [ ] Botão "Próximo" está desabilitado até responder

### Tipos de Entrada
- [ ] **Sim/Não**: Radio buttons funcionam (STOP-Bang)
- [ ] **Likert 0-3**: Opções aparecem e funcionam (Epworth)
- [ ] **Likert 0-4**: Opções aparecem e funcionam (ISI, PSQI)
- [ ] **Número**: Input numérico aceita números (PSQI)
- [ ] **Hora**: Time picker funciona (PSQI)
- [ ] **Select**: Dropdown com opções funciona (PSQI)

### Navegação
- [ ] Botão "Próximo" avança questão
- [ ] Botão "Voltar" volta questão
- [ ] Último botão muda para "Próximo" → Submit
- [ ] Respostas são mantidas ao voltar

### Resultados
- [ ] Tela de resultados aparece após última pergunta
- [ ] Score exibe corretamente (número/máximo)
- [ ] Interpretação aparece (Baixo/Médio/Alto risco)
- [ ] Botão "Voltar ao Dashboard" funciona
- [ ] Resultados são salvos no localStorage

### Admin Panel
- [ ] Abra admin-panel.html
- [ ] Senha: `admin123`
- [ ] Veja paciente registrado em "👥 Pacientes"
- [ ] Veja resultados em "📈 Resultados"

## 📝 Dados Esperados no localStorage

Após completar um questionário, verifique no Console (F12):

```javascript
// No Console do navegador, execute:
JSON.parse(localStorage.getItem('sleepcare_current_patient'))

// Você deve ver:
{
  id: "uuid...",
  name: "Natália",
  email: "natalia@teste.com",
  questionnaires: {
    stopBang: { completed: true, score: 5, ... },
    psqi: { completed: false, ... },
    ...
  }
}
```

## 🐛 Troubleshooting

### Perguntas não aparecem
- ✅ CORRIGIDO: Agora suporta todos os tipos

### Próximo botão está sempre desabilitado
- Verifique se respondeu a pergunta
- Valor deve ser não-vazio

### Scoring incorreto
- Verifique se valores estão sendo convertidos (número vs string)
- Console (F12) deve mostrar array de respostas

### Admin Panel vazio
- Verificar localStorage: localStorage.getItem('sleepcare_patients')
- Criar nova conta primeiro

## 🎨 Teste Visual

### Cores Esperadas
- Primária (Laranja Aurora): #C76134
- Secundária (Azul Acinzentado): #99A8AD
- Destaque (Verde): #49401F

### Responsividade
- [ ] Desktop: Layout normal
- [ ] Tablet: Uma coluna
- [ ] Mobile: Muito legível

## ✨ Próximas Manutenções

Se encontrar problemas:
1. Verifique o Console (F12 > Console)
2. Procure por erros em vermelho
3. Verifique localStorage (F12 > Application > Local Storage)

---

Desenvolvido para Dra. Natália Vogt | Medicina do Sono | 2026
