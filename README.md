# deboragabrich.com

Requisitos: Node 20.9+.

```
cp .env.example .env.local
npm install
npm run dev        # http://localhost:3000 → /cursos
npm run build      # valida fases e links
```

Decisões, rotas e etapas: `PLANO.md`.

Para testar a UTM: abra `http://localhost:3000/cursos?utm_source=teste&utm_medium=pago&utm_campaign=bf26`, depois passe o mouse num botão de compra. O link mostra `utm_*`, `sck` e `src`. O cookie `dg_atrib` só é gravado depois de "aceitar" no banner; para repetir o teste, apague o cookie e a chave `dg_consentimento` do localStorage.
