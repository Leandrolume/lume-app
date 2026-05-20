# Como instalar o Lume no seu celular

## Arquivos necessários (coloque todos na mesma pasta no Vercel):
- index.html
- manifest.json
- sw.js
- icon-192.png
- icon-512.png

---

## Passo 1 — Subir no Vercel

1. Renomeie `lume_app.html` para `index.html`
2. Crie uma pasta chamada `lume` no seu computador
3. Coloque TODOS os 5 arquivos dentro dessa pasta
4. Acesse vercel.com/new
5. Arraste a PASTA inteira (não apenas o HTML)
6. Clique em Deploy

---

## Passo 2 — Instalar no iPhone (Safari)

1. Abra o link do Vercel no **Safari** (não Chrome)
2. Toque no botão de compartilhar (quadrado com seta para cima)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
4. Toque em **"Adicionar"**
5. O ícone do Lume aparece na sua tela inicial 🎉

> O app abre em tela cheia, sem barra do Safari, igual a um app nativo.

---

## Passo 3 — Instalar no Android (Chrome)

1. Abra o link no **Chrome**
2. Toque nos 3 pontinhos (menu)
3. Toque em **"Adicionar à tela inicial"**
4. Confirme
5. Ícone aparece na tela inicial 🎉

---

## O que funciona como PWA:

✅ Abre em tela cheia (sem barra do navegador)
✅ Funciona offline (telas carregadas em cache)
✅ Ícone na tela inicial igual app nativo
✅ Consulta de CEP via internet
✅ Chat de suporte
✅ Timer de foco
✅ Registro de gastos
✅ Todas as 18 telas

## Próximos passos para funcionar de verdade:

1. **Login real** → Firebase Authentication
2. **WhatsApp** → Z-API (zapi.io) — R$69/mês
3. **Dados reais** → Firebase Firestore
4. **IA de padrões** → Claude API
5. **Notificações push** → Firebase Cloud Messaging (FCM)

