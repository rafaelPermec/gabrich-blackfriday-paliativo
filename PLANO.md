# Planejamento técnico · deboragabrich.com

Versão 2 · 27.10.2026. Base: Manual Final 2026 VIGENTE v2. Relatório do que foi feito e árvore de decisões: `RELATORIO.md`.

## 1. Stack

- Next.js 16 (App Router), React 19, TypeScript estrito.
- Páginas geradas no build (estáticas): HTML pronto para o Google e carregamento rápido.
- CSS Modules + tokens do manual em `globals.css`. Nenhuma biblioteca de UI.
- Ferramentas: Microsoft Clarity, Meta Pixel, pixel Hotmart. Formulários: Hotmart Send (incorporado).

## 2. Rotas

| rota | o que é | destino dos botões | fases |
|---|---|---|---|
| `/` | redireciona para `/cursos` (307, temporário) | | |
| `/cursos` | vitrine | cards → página de cada curso · "Monte sua Black Friday" → checkout BF da combinação | normal · lista · bf |
| `/cursos/antes-da-foto` | venda do e-book | checkout Hotmart | normal · abertura · ultima · encerrado |
| `/cursos/luz-na-pratica` | venda do curso | checkout Hotmart | idem |
| `/cursos/mais-que-um-click` | venda do curso | checkout Hotmart | idem |
| `/cursos/no-estudio` | workshop | inscrição Hotmart | lista · vagas |
| `/cursos/mentoria` | mentoria individual | e-mail (mailto) | unica |
| `/obrigado?curso=…` | depois de entrar numa lista de espera | voltar ao início | |

Vídeos de depoimento tocam dentro do card (player do YouTube, carregado só no clique). Lista de espera existe só na Black Friday (fase `lista` de `/cursos`) e no No Estúdio.

## 3. Estrutura de pastas

```
site/
  .env.example               variáveis (copiar para .env.local)
  next.config.ts             redirect "/", headers de segurança e cache, imagens
  scripts/gerar-amostras.mjs páginas de amostra do e-book (seção 8)
  privado/                   PDF do e-book · fora do git e do site
  public/marca/              logos em SVG
  public/amostras/           imagens do folheador (geradas)
  src/
    config/
      fases.ts               feature flags por página
      links.ts               todos os links externos { name, url }
      ofertas.ts             tabela oficial de preços
      black-friday.ts        calendário e fim do contador
      marcas.ts · site.ts    logos, rotas, domínio, e-mail
    lib/
      atribuicao.ts          leitura, gravação e repasse de UTM
      analytics/             consentimento e eventos
      fontes/                uma fonte por arquivo
    components/              Cabecalho, Rodape, FaixaBlack, LinkConversao, ImagemReservada
    app/
      layout.tsx             raiz: html, fontes comuns, rastreamento
      (dg)/                  marca mãe: cursos, mentoria
      (adf)/ (lp)/ (mqc)/ (ne)/  um grupo por marca (fontes e tema próprios)
      obrigado/ · robots.ts · sitemap.ts
```

Os grupos `(…)` não aparecem na URL. Servem para cada marca carregar só as próprias fontes.

## 4. Fases (feature flags)

- Uma variável por página: `FASE_CURSOS`, `FASE_ANTES_DA_FOTO`, `FASE_LUZ_NA_PRATICA`, `FASE_MAIS_QUE_UM_CLICK`, `FASE_NO_ESTUDIO`, `FASE_MENTORIA`.
- Valores aceitos ficam em `src/config/fases.ts`. Vazio usa o primeiro valor da lista. Valor inválido faz o build falhar, para nunca publicar a fase errada.
- Lidas no servidor, no build. Trocar de fase: alterar a variável na hospedagem e fazer novo deploy.
- Cada página recebe a fase e decide: preços (`normal` ou `bf`), faixa da Black, botão do cabeçalho, layout de lista.

## 5. Links

- `src/config/links.ts`: `CHECKOUT` (7 ofertas), `CHECKOUT_BF` (7 ofertas), `INSCRICAO` (No Estúdio), `LISTA_ESPERA` (formulários), `CONTATO`.
- Cada item é `{ name, url }`. Hoje os checkouts apontam para `https://pay.hotmart.com/PENDENTE?id=…`, com o mesmo id do manual (2 · 07).
- Com `EXIGIR_LINKS_FINAIS=true` (só em produção) o build falha se sobrar algum marcador.

## 6. UTM e atribuição

1. A pessoa chega com `?utm_source=…`. O site guarda a campanha só em memória, enquanto a aba estiver aberta. Nada é gravado no aparelho antes do aceite.
2. Com o aceite de marketing, grava o cookie primário `dg_atrib` (utm_*, fbclid/gclid, página de entrada, domínio de origem e data), validade de 180 dias. Se o cookie já existe, não sobrescreve: vale a primeira campanha. Recusou: o cookie é apagado.
2b. Sem aceite, o checkout ainda recebe a campanha da visita atual pela URL; só não há memória entre visitas.
3. Todo botão de conversão usa `<LinkConversao>`. No navegador ele acrescenta ao link da Hotmart:
   - `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, como vieram;
   - `sck` = `source|medium|campaign|content|term` (aparece no relatório de vendas da Hotmart);
   - `src` = `página_posição` do botão (ex.: `antes-da-foto_box-preco`).
4. Sem JavaScript o link funciona normalmente, só sem os parâmetros.

Convenção sugerida para as campanhas (minúsculas, hífen, sem acento): `utm_source` = instagram · meta-ads · email · youtube; `utm_medium` = organico · pago · stories · bio; `utm_campaign` = bf26-lista · bf26-abertura · evergreen; `utm_content` = id da peça.

## 7. Rastreamento e LGPD

- Banner de consentimento com duas escolhas: aceitar ou só os necessários. Nenhum pixel carrega antes da escolha.
- Análise → Clarity (carrega por último, não pesa no Lighthouse). Marketing → Meta e Hotmart.
- Eventos: `PageView` (toda página e navegação), `ViewContent` (página de curso), `InitiateCheckout` (clique para checkout), `Lead` (página obrigado), `Contact` (mentoria).
- A compra (`Purchase`) é disparada pela Hotmart no checkout: o mesmo ID do Meta Pixel precisa estar cadastrado no produto dentro da Hotmart.

## 8. Proteção do e-book (folheador)

- O PDF nunca vai para `public/` nem para o repositório. O folheador usa as 15 páginas de amostra já aprovadas no manual (capa + 7 duplas), em imagem; nenhuma outra página do e-book está no site.
- Se as amostras mudarem: `npm run amostras` gera novas imagens a partir do PDF guardado em `privado/` (fora do git).
- `npm run amostras -- privado/antes-da-foto.pdf 1,3,7,12` gera só as páginas escolhidas, em WebP de 900 px, com marca d'água.
- O folheador mostra essas imagens. Não existe arquivo do produto para baixar, nem pelo DevTools.
- Bloquear clique direito ou arrastar é cosmético e não entra como proteção.
- Imagens servidas com `noindex, noimageindex` e fora do sitemap.

## 9. Performance (meta: 90+ em todas as categorias, mobile)

- Imagens: `next/image` com AVIF/WebP, `sizes` corretos, `priority` só na imagem principal da dobra, resto com carregamento preguiçoso. Originais pesados viram versões menores no build. Toda imagem tem proporção fixa (sem pulo de layout).
- Imagens que ainda não chegaram: `<ImagemReservada>` com a proporção final.
- Fontes: `next/font` (auto-hospedadas, sem chamada ao Google). Cada marca carrega só as suas. Black Mango: converter o .otf para .woff2 antes do deploy.
- Logos em SVG com largura e altura declaradas.
- Vídeos do YouTube: só a capa no carregamento. O player carrega no clique (ou o clique abre o YouTube, como nos depoimentos).
- Pixels depois do consentimento e com carregamento adiado.
- JavaScript no navegador só onde há interação: quiz, monte seu combo, folheador, contador, banner.

## 10. SEO

- Título, descrição, canonical e Open Graph por página. Imagem de compartilhamento por curso (1200×630, a produzir).
- Dados estruturados `Course` / `Product` com preço e moeda.
- `sitemap.xml` e `robots.txt` gerados. Fora do índice: `/obrigado` e as amostras.
- Homologação sai inteira com `noindex` (`PERMITIR_INDEXACAO=false`).

## 11. Lista de espera e obrigado

- Formulário incorporado do Hotmart Send, um por lista (`LISTA_ESPERA` em links.ts).
- No Hotmart Send, configurar o redirecionamento depois da inscrição para `/obrigado?curso=<slug>&utm_…`.
- A página obrigado dispara `Lead` uma vez e não entra no Google.

## 12. Hospedagem

Ainda não definida. Recomendação: Vercel (otimização de imagem, HTTPS, variáveis por ambiente e prévia por branch prontos). Em servidor próprio: Node 20+, `next start` atrás de um CDN, com `sharp` instalado para as imagens. Dois ambientes: homologação (noindex, links marcadores) e produção.

## 13. Etapas

0. Base: flags, links, UTM, consentimento, pixels, cabeçalho, rodapé, faixa da Black. **Feito.**
1. `/cursos` nas três fases, com a página de lista de espera da Black (5 · C04) e `/obrigado`. **Feito.**
2. `/cursos/antes-da-foto` com folheador protegido. **Feito.**
3. `/cursos/luz-na-pratica`. **Feito.**
4. `/cursos/mais-que-um-click`. **Feito.**
5. `/cursos/no-estudio` (lista de espera e inscrição). **Feito.**
6. `/cursos/mentoria`. **Feito.**
7. `/privacidade` (texto-base) e `/obrigado` com textos editáveis. **Feito.**
8. Testes: Lighthouse por página e fase, UTM de ponta a ponta até a venda de teste na Hotmart, eventos no Meta Events Manager e Clarity.
9. Deploy de homologação e depois produção.

## 14. Pendências e pontos a confirmar

- Links da Hotmart: 14 checkouts e a inscrição do No Estúdio.
- Mentoria tem uma fase só (`unica`) no manual.
- Pixel da Hotmart: qual script a conta fornece (o espaço já está pronto em `Rastreamento.tsx`).
- Hotmart: confirmar numa venda de teste que `utm_*`, `sck` e `src` aparecem no relatório.
- Política de privacidade: não existe. O banner de cookies precisa de link para ela antes de publicar (texto jurídico, fora do manual). Texto do banner ainda provisório.
- Lista de imagens que faltam: será levantada página a página e marcada com `ImagemReservada`.

### Definido em /cursos

- Vídeos de depoimento: player do YouTube dentro do card; no celular abre em tela cheia.
- Card da Mentoria: o card leva à página Mentoria e o botão "falar comigo" abre o e-mail.
- Etiqueta "LISTA DE ESPERA" na capa do No Estúdio só aparece com `FASE_NO_ESTUDIO=lista`.
- Botões do No Estúdio (hero e quiz) seguem a fase dele: lista → página do No Estúdio; vagas → inscrição na Hotmart.
- Banner no mobile: 4:5 com corte central. Se o enquadramento cortar algo importante, pedir versões 4:5 dos vídeos.
- Vídeo do Antes da Foto pendente: o slide usa a foto da capa e troca em 7 s.
- Capas dos posters do hero: `assets/hero/[curso]-hero-poster.jpg` ainda não existem; uso as fotos do arquivo aprovado.
- Formulário da lista: visual do manual, enviando direto para o Hotmart Send. Falta copiar do código de incorporação o `action` e os `name` dos campos para `LISTA_ESPERA` em links.ts. Sem isso ele simula o envio e vai para `/obrigado`.
- Página obrigado: textos de 5 · C04, editáveis em `src/conteudo/obrigado.ts` (um bloco por lista).
- Balgin: segue a regra provisória do manual (títulos em Urbanist, logos como imagem).
