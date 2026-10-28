/* eslint-disable @typescript-eslint/no-explicit-any */
// Dados da página (copiados do arquivo "LnP Pagina - Manual v2.dc.html"). Caminhos de imagem em /public/m/.
const MODS: any[] = [
  ['luz é tudo!', [
    ['Equipamento é ferramenta', 'Por que o curso não é sobre equipamento, e por que a luz decide a leitura, a textura e a mensagem da foto.'],
    ['Perdendo o medo das sombras', 'Sombra não é o que sobra depois de montar a luz. Como planejar sombras que trazem volume, textura e história.']]],
  ['como controlar a luz?', [
    ['Modificadores de luz', 'Softbox, octabox, strip, sombrinha, snoot e luz direta testados na mesma cena, com a mesma potência e configuração.'],
    ['Análise de efeitos dos modificadores', 'As fotos lado a lado: como o tamanho e o formato da fonte mudam a sombra e os realces.'],
    ['Acessórios de iluminação', 'Rebatedor (branco, dourado e prata), bloqueador e difusor, inclusive versões improvisadas como isopor.'],
    ['Análise dos efeitos dos acessórios', 'O que cada acessório fez na foto e quando usar cada um.'],
    ['O que muda a sua luz', 'Distância, altura, direção e potência, uma de cada vez.'],
    ['Análise de controle de luz', 'Comparação das variações, e como usar distância e potência quando o equipamento não ajuda.']]],
  ['efeitos de luz dura e luz suave', [
    ['Construção de efeitos de luz', 'Como criar luz dura e luz suave, e tudo que existe entre as duas, com uma ou mais fontes. Luz suave em cenário escuro e luz dura em cenário claro.'],
    ['Análise de efeitos de luz', 'As fotos comparadas: contraste, transição de sombra e a história que cada luz conta.']]],
  ['fotometria', [
    ['Como configurar sua câmera', 'Lentes, velocidade, abertura e ISO decididos pelo efeito que você quer. Balanço de branco em Kelvin e como “bater o branco”.'],
    ['Fotometrando na prática', 'A mesma cena configurada para movimento, fundo desfocado ou tudo em foco, e o balanço de branco ajustado ao vivo.']]],
  ['esquemas de luz', [
    ['Pontos de luz', 'Luz principal, preenchimento, fundo e destaque: o papel de cada uma.'],
    ['Análise dos pontos de luz', 'Cada luz isolada e depois somada, pra ver como a foto é construída.'],
    ['Esquema de luz frontal', 'Quando funciona, quando achata a imagem e como evitar isso.'],
    ['Esquema de luz lateral', 'O esquema mais usado em gastronomia, e como montá-lo com pouco equipamento.'],
    ['Esquema de contraluz', 'Recorte, silhueta e como trazer informação de volta para o produto.'],
    ['Análise de esquemas de luz', 'Os três esquemas comparados e o cuidado com as sombras em cada um.']]],
  ['luz natural', [
    ['Como controlar a luz natural', 'Clima, estação, horário e localização, e por que na luz natural quem se move é o cenário.'],
    ['Fotografando com luz natural na prática', 'A mesma foto feita com flash e depois só com a janela, em versão dura, suave e contraluz.']]],
  ['fotografe comigo', [
    ['Iluminação para fotos de Natal', 'Um Natal claro e um noturno, com o efeito do pisca-pisca e das velas.'],
    ['Fotografia de mesa montada', 'Como iluminar cenários maiores em top view, com uma versão suave e uma marcada.'],
    ['Fotografando com reflexos', 'Como trabalhar o reflexo em garrafas em vez de só tentar apagá-lo.']]],
  ['análises de trabalhos reais', [
    ['Fotografia de produtos', 'A luz de um projeto real para uma marca de produtos de cabelo.'],
    ['Fotografia conceitual de bebida', 'O pôr do sol criado com luz de estúdio para um projeto da ESPM.'],
    ['Luz criativa para chocolates', 'Como ressaltar textura e criar sombras que interagem com o cenário.'],
    ['Esquemas de luz em restaurantes', 'Espaço limitado, luz ambiente e luz natural no fim de tarde: como montei a luz fora do estúdio.']]]
];
let N = 0;
export const MODULOS: any[] = MODS.map(([titulo, aulas], i) => {
  const a = aulas.map(([t, d]) => ({ n: String(++N).padStart(2, '0'), t, d }));
  const n = String(i + 1).padStart(2, '0');
  return { n, titulo, aulas: a, qtd: a.length + ' AULAS', slot: 'lnp-modulo-' + n, img: '/m/assets/lnp/f/' + ['m1.jpg','m2.png','m3.png','m4.jpg','m5.png','m6.jpg','m7.jpg','m8.jpg'][i] };
});
export const ALUNOS: any[] = [
  { label: 'Cristielen Souza · Aluna Mais que um Click e Luz na Prática', pares: [['/m/assets/antes-depois/aluno-01-cristielen-antes.jpg', '/m/assets/antes-depois/aluno-01-cristielen-depois.jpg']] },
  { label: 'Laura Dicker · Aluna Mais que um Click, Luz na Prática, Aulas virtuais', pares: [['/m/assets/antes-depois/aluno-02-laura-antes.jpg', '/m/assets/antes-depois/aluno-02-laura-depois.jpg']] },
  { label: 'Bruna Doti · Aluna Mais que um Click, Luz na Prática, No Estúdio e Antes da Foto', pares: [['/m/assets/antes-depois/aluno-03-bruna-antes.jpg', '/m/assets/antes-depois/aluno-03-bruna-depois.jpg']] },
  { label: 'Estúdio Buzz · Aluna Mais que um Click e Luz na Prática', pares: [['/m/assets/antes-depois/aluno-04-estudiobuzz-antes.jpg', '/m/assets/antes-depois/aluno-04-estudiobuzz-depois.jpg']] }
];
export const FAQ: [string, string][] = [
  ['Preciso de equipamento profissional?', 'Não. Equipamento é ferramenta. No curso eu mostro luz suave feita com uma única fonte e um isopor, e como usar distância e potência quando o equipamento não ajuda.'],
  ['Fotografo só com luz natural. O curso serve pra mim?', 'Serve. O módulo 6 é todo sobre luz natural, e eu faço a mesma foto com flash e depois só com a janela.'],
  ['Estou começando. Vou conseguir acompanhar?', 'Vai. O curso começa pelos fundamentos da luz e da sombra e vai até a análise de trabalhos reais.'],
  ['Por quanto tempo tenho acesso?', '1 ano de acesso a todo o conteúdo.'],
  ['Como tiro as minhas dúvidas?', 'Pelo suporte na plataforma, direto nas aulas.'],
  ['E se eu não gostar?', 'Você tem 7 dias de garantia. Se não for pra você, devolvemos todo o seu dinheiro, sem burocracia.']
];
export const P = (s: string) => s.includes('/') ? s : '/m/assets/lnp/' + s + '.jpg';
