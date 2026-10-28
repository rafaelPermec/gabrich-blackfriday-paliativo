# Relatório · site deboragabrich.com

27.10.2026 · Next.js 16, React 19, TypeScript. Complementa o `PLANO.md`, que traz a arquitetura e as regras. O `README.md` explica como rodar.

> **Importante:** o código ainda não foi compilado (`npm install` e `npm run build` não rodaram neste ambiente). O primeiro passo do desenvolvedor é rodar install, typecheck, lint e build e corrigir o que aparecer, provavelmente ajustes de tipo nas páginas geradas.

---

## 1. O que está entregue

Páginas (todas geradas no build, sem servidor):

| rota | fases (variável de ambiente) | construída a partir de | status no manual |
|---|---|---|---|
| `/` | redireciona para `/cursos` | | |
| `/cursos` | `FASE_CURSOS`: normal · lista · bf | componentes próprios (spec 2 · 10) | APROVADO (lista: EM APROVAÇÃO) |
| `/cursos/antes-da-foto` | `FASE_ANTES_DA_FOTO`: normal · abertura · ultima · encerrado | arquivo "AdF Pagina - Manual v2" | EM APROVAÇÃO |
| `/cursos/luz-na-pratica` | `FASE_LUZ_NA_PRATICA`: idem | "LnP Pagina - Manual v2" | EM APROVAÇÃO |
| `/cursos/mais-que-um-click` | `FASE_MAIS_QUE_UM_CLICK`: idem | "MqC Pagina - Manual v2" | EM APROVAÇÃO |
| `/cursos/no-estudio` | `FASE_NO_ESTUDIO`: lista · vagas | "NE Pagina - Manual v2" | PENDENTE |
| `/cursos/mentoria` | `FASE_MENTORIA`: unica | "Mentoria Pagina - Manual v2" | PENDENTE |
| `/obrigado?curso=…` | | 5 · C04 (textos em `src/conteudo/obrigado.ts`) | |
| `/privacidade` | | texto-base LGPD (`src/conteudo/privacidade.ts`) | |

Recursos que valem para o site inteiro:
- **Fases por página** (`src/config/fases.ts`): valor inválido faz o build falhar.
- **Links num arquivo só** (`src/config/links.ts`): 14 checkouts, inscrição do No Estúdio, formulários do Hotmart Send e contatos, cada um como `{ name, url }`.
- **UTM de primeiro toque** (`src/lib/atribuicao.ts`): o cookie só é gravado depois do aceite. O checkout recebe `utm_*`, `sck` e `src`.
- **Consentimento LGPD:** aviso de cookies com link para a política. Clarity e os pixels da Meta e da Hotmart só carregam depois do aceite.
- **Eventos:** PageView, InitiateCheckout, Lead, Contact.
- **Imagens:** `next/image` (AVIF/WebP, tamanho certo, carregamento preguiçoso). Fontes auto-hospedadas e carregadas por marca.
- **SEO:** título, descrição e canonical por página; dados estruturados (Course, Product, FAQPage, Person); sitemap; robots; noindex em homologação.
- **Folheador do e-book:** só as 15 páginas de amostra definidas no manual, em imagem. O PDF não existe no site.

## 2. Como as páginas foram construídas

- **`/cursos`, obrigado, privacidade, cabeçalho e rodapé:** componentes escritos à mão, com CSS Modules e os tokens do manual (`globals.css`).
- **Antes da Foto, Luz na Prática, Mais que um Click, No Estúdio e Mentoria:** o layout foi convertido automaticamente dos arquivos do manual (`src/paginas/<slug>/Corpo.tsx`). A lógica foi reescrita à mão:
  - `Pagina.tsx`: estado, acordeões, sliders de antes e depois, fases;
  - `dados.ts`: textos e listas.
  - Vantagem: o visual fica idêntico ao aprovado.
  - Custo: os estilos ficam inline no JSX, e não em CSS Modules. Funciona em produção, mas é mais difícil de manter.
  - Sugestão ao dev: migrar seção por seção para CSS Modules conforme as páginas forem aprovadas de vez.
- **Botões dessas páginas:** passam pelo componente `<Destino>`. Ele transforma os marcadores do manual (`#checkout-…`, `mailto:`, `#contato`, `#instagram`) em links reais, com UTM e evento.
- **Conversor:** usado só na preparação, fica fora do site (`_conversor/` no projeto). Não precisa ir para o desenvolvedor.

## 3. Árvore de decisões

### 3.1 Fase → o que a página mostra

```
FASE_CURSOS
├─ normal ─ banner + capas + quiz + "monte seu combo" (preço normal) + depoimentos + sobre
├─ lista ── página de lista de espera da Black (contador até 01.11, formulário Hotmart Send, FAQ)
│           faixa do topo e botão do cabeçalho apontam para o formulário
└─ bf ───── igual a normal + faixa "ATÉ 27.11" + etiquetas −50% + "monte sua black friday" (preço BF)

FASE_ANTES_DA_FOTO / FASE_LUZ_NA_PRATICA / FASE_MAIS_QUE_UM_CLICK
├─ normal ─── preço normal · botão "quero o e-book" / "quero o curso" · checkout normal
├─ abertura ─ faixa Black · −50% · "garantir com 50%" · checkout BF (bf26)
├─ ultima ─── idem abertura + "ÚLTIMOS DIAS" + contador até 27.11 23h59
└─ encerrado  preço normal + aviso "a black friday acabou" (Antes da Foto)

FASE_NO_ESTUDIO
├─ lista ── seção "entre na lista" com formulário · botões "entrar na lista"
└─ vagas ── sem formulário · botões "quero me inscrever" → inscrição Hotmart
            reflete também em /cursos (capa, banner e quiz)

FASE_MENTORIA
└─ unica ── botões "falar comigo" → e-mail
```

### 3.2 Clique num botão → destino

```
botão
├─ é compra? (checkout de curso ou combo)
│   ├─ página em abertura/ultima (ou /cursos em bf) → CHECKOUT_BF[oferta]
│   └─ senão → CHECKOUT[oferta]
│   └─ anexa utm_* + sck + src · dispara InitiateCheckout
├─ é inscrição No Estúdio? → INSCRICAO['no-estudio'] (+ UTM)
├─ é e-mail? → mailto (dispara Contact)
├─ é lista de espera? → formulário → POST Hotmart Send → /obrigado?curso=… (dispara Lead)
├─ vídeo de depoimento? → player do YouTube no próprio card (carrega no clique)
└─ card/capa de curso → página do curso
```

### 3.3 Consentimento → rastreamento

```
pessoa chega
├─ campanha da URL guardada só em memória (nada gravado no aparelho)
├─ aviso de cookies
│   ├─ "aceitar" → Clarity + Meta Pixel + pixel Hotmart · grava cookie dg_atrib (180 dias, primeiro toque)
│   └─ "só os necessários" → nenhum pixel · apaga dg_atrib se existir
└─ clique de compra → checkout recebe a campanha (do cookie, ou da visita atual)
```

## 4. Decisões registradas

Definidas pela Débora:
- Uma variável de fase por página; trocar a fase exige novo deploy.
- Lista de espera só existe na Black Friday (`/cursos`) e no No Estúdio.
- UTM de primeiro toque, guardada por 180 dias, e cookie só depois do aceite.
- Vídeos de depoimento tocam dentro do card.
- Card da Mentoria com o botão "falar comigo".
- Banner de `/cursos` no celular em 4:5, como aprovado.
- "Monte sua Black Friday" leva aos 7 checkouts da Black.
- Contador da faixa conta até 27.11, 23h59.
- Mentoria por e-mail (mailto). Formulário da lista incorporado do Hotmart Send. Domínio www.deboragabrich.com.
- Fonte substituta (Urbanist) até a compra da Balgin.

Tomadas por mim:
- **Folheador:** só imagens das páginas aprovadas, com o clique direito bloqueado. Isso é cosmético; a proteção de verdade é o PDF não estar no site.
- **Página obrigado:** uma só, com textos por lista em `src/conteudo/obrigado.ts`.
- **Antes da Foto:** selo "ocre" (o manual oferecia ocre ou whiskey). A fase `lista` que existia no arquivo foi retirada.
- **Card de preço:** só as variantes escuras, que são as usadas nas páginas.
- **Política de privacidade:** texto-base padrão. Campos entre colchetes precisam ser preenchidos.

## 5. Antes de publicar (checklist)

1. **Rodar build** e corrigir erros de tipo e lint.
2. **Links da Hotmart:** trocar os marcadores em `src/config/links.ts` e ligar `EXIGIR_LINKS_FINAIS=true` em produção.
3. **Hotmart Send:** copiar `action` e `name` dos campos para `LISTA_ESPERA` (`cursos` e `no-estudio`). Configurar o redirecionamento para `/obrigado?curso=cursos` e `/obrigado?curso=no-estudio`.
4. **IDs nas variáveis de ambiente:** `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_HOTMART_PIXEL_ID`.
5. **Pixel da Hotmart:** colar o script da conta em `src/components/analytics/Rastreamento.tsx` (o espaço está marcado).
6. **Meta Pixel:** cadastrar o mesmo ID dentro de cada produto na Hotmart, para registrar a compra.
7. **Política de privacidade:** preencher nome/razão social, CPF/CNPJ e endereço em `src/conteudo/privacidade.ts`.
8. **Black Mango:** converter o `.otf` para `.woff2` (`src/fontes/`).
9. **Hospedagem:** definir (recomendado: Vercel). Com servidor próprio, Node 20+ e `sharp`.
10. **Imagens que faltam** (aparecem como caixa tracejada com o nome):
    - Luz na Prática: 28 espaços (fotos "do início" e "de hoje" dos alunos);
    - Mais que um Click: fotos dos módulos;
    - Mentoria: 2 fotos da Débora;
    - vídeo do hero do Antes da Foto;
    - posters dos vídeos do hero (`[curso]-hero-poster.jpg`).
11. **Páginas em aprovação ou pendentes:** quando o manual mudar, regenerar ou ajustar `src/paginas/<slug>/Corpo.tsx`.
12. **Testes:**
    - Lighthouse por página e fase (mobile);
    - venda de teste conferindo `utm_*`, `sck` e `src` no relatório da Hotmart;
    - eventos no Meta Events Manager e no Clarity;
    - envio real dos formulários do Hotmart Send.

## 6. Para o desenvolvedor

- **Baixar:** a pasta `site/` inteira.
  - `docs/`: especificações das páginas extraídas do manual.
  - `src/paginas/`: layouts gerados.
  - `public/m/`: imagens usadas pelas páginas geradas, com os mesmos caminhos do manual.
- **Não enviar:** `_conversor/` (ferramenta interna) e qualquer PDF do e-book.
- **Variáveis:** ver `.env.example`.
