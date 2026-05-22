const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "lume-app-9b1a1",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

function categorizeExpense(text) {
  const lower = text.toLowerCase();
  const cats = {'cafe':'Alimentação','café':'Alimentação','almoç':'Alimentação','janta':'Alimentação','mercado':'Alimentação','ifood':'Alimentação','padaria':'Alimentação','uber':'Transporte','taxi':'Transporte','gasolina':'Transporte','99':'Transporte','academia':'Saúde','farmacia':'Saúde','netflix':'Lazer','cinema':'Lazer','bar':'Lazer','cerveja':'Lazer'};
  for (const [k, v] of Object.entries(cats)) { if (lower.includes(k)) return v; }
  return 'Outros';
}

function extractValue(text) {
  const m = text.match(/(\d+[.,]\d{2}|\d+)/);
  return m ? parseFloat(m[1].replace(',', '.')) : 0;
}

function detectType(text) {
  const l = text.toLowerCase();
  if (l.match(/r\$|gastei|paguei|comprei/) || (l.match(/\d/) && l.match(/cafe|mercado|uber|almoç/))) return 'expense';
  if (l.match(/tomei.?caf|caf[eé].*agora/)) return 'coffee';
  if (l.match(/bebi.?[aá]gua|hidrat/)) return 'water
