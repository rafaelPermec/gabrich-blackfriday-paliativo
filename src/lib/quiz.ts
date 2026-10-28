// Quiz da página "cursos" (manual · 2 · 10 · 06). Lógica pura, sem React: fácil de testar.
import type { CursoId, OfertaId } from '@/config/ofertas';

type K = 'a' | 'l' | 'c' | 'ne' | 'me';
type Pontos = Partial<Record<K, number>>;
export type Aluno = 'a' | 'l' | 'c' | 'ne' | 'none';

interface Pergunta { q: string; multi?: false; o: [string, Pontos][] }
interface PerguntaMulti { q: string; multi: true; o: [string, Aluno][] }

export const PERGUNTAS: [Pergunta, Pergunta, Pergunta, Pergunta, PerguntaMulti] = [
  { q: 'O que você fotografa, ou quer fotografar?', o: [
    ['Gastronomia: pratos, receitas, restaurantes, bebidas.', { c: 2 }],
    ['Produtos: cosméticos, produtos gastronômicos, objetos.', { a: 2, l: 2, ne: 1 }],
    ['Gastronomia e produtos.', { c: 1, a: 1, l: 1 }],
    ['Sou fotógrafo de outro nicho e quero começar na fotografia de gastronomia e produtos.', { c: 1, l: 2, a: 2 }],
    ['Estou começando agora e quero fotografar produtos e alimentos.', { c: 1, l: 2, a: 2 }],
  ] },
  { q: 'Como está a sua fotografia hoje?', o: [
    ['Ainda estou aprendendo e quero um processo pra seguir, do zero.', { c: 2, me: 1 }],
    ['Já sei fotografar, mas a luz ainda me limita.', { l: 3 }],
    ['Já sei fotografar, mas às vezes chego na sessão de fotos sem saber o que fazer.', { a: 3 }],
    ['Tenho dúvidas e dificuldades bem específicas, e queria resolver isso com alguém.', { me: 3 }],
    ['Um pouco de tudo: a luz, as ideias e o processo.', { l: 3, a: 3 }],
  ] },
  { q: 'O que mais te ajudaria agora?', o: [
    ['Aprender a controlar a luz e desenvolver a minha técnica de iluminação para fotografia de produtos e alimentos.', { l: 3 }],
    ['Parar de travar na hora de criar: encontrar ideias e planejar cada foto antes de fotografar.', { a: 3 }],
    ['Aprender o processo completo da fotografia de gastronomia: do briefing à foto final, com produção, edição e quanto cobrar.', { c: 3 }],
    ['Aprender todos os seus processos criativos e praticar, junto com a técnica, no estúdio com você.', { ne: 3 }],
    ['Um acompanhamento individual, focado nas minhas dúvidas e no meu trabalho.', { me: 3 }],
  ] },
  { q: 'Como você prefere aprender?', o: [
    ['Online, no meu ritmo, com aulas em vídeo.', { l: 1, a: 1, c: 1 }],
    ['Lendo, anotando e fazendo exercícios.', { a: 2 }],
    ['Presencialmente, no estúdio, praticando junto com você.', { ne: 2 }],
    ['Individual e personalizado, do jeito que eu precisar.', { me: 2 }],
  ] },
  { q: 'Você já foi meu aluno(a)?', multi: true, o: [
    ['Antes da Foto', 'a'], ['Luz na Prática', 'l'], ['Mais que um Click', 'c'], ['No Estúdio', 'ne'], ['Ainda não', 'none'],
  ] },
];

export type Resultado = 'a' | 'l' | 'c' | 'la' | 'ca' | 'cl' | 'cla' | 'ne' | 'me';

export const OFERTA_DO_RESULTADO: Partial<Record<Resultado, OfertaId>> = {
  a: 'antes-da-foto', l: 'luz-na-pratica', c: 'mais-que-um-click',
  la: 'luz-antes-da-foto', ca: 'click-antes-da-foto', cl: 'click-luz', cla: 'completo',
};
export const CURSO: Record<'a' | 'l' | 'c', CursoId> = { a: 'antes-da-foto', l: 'luz-na-pratica', c: 'mais-que-um-click' };

function pontuar(resp: number[]): Record<K, number> {
  const S: Record<K, number> = { a: 0, l: 0, c: 0, ne: 0, me: 0 };
  for (let i = 0; i < 4; i++) {
    const p = PERGUNTAS[i] as Pergunta;
    const o = p.o[resp[i] ?? -1];
    if (o) for (const k in o[1]) S[k as K] += o[1][k as K] ?? 0;
  }
  return S;
}

type Posse = Record<'a' | 'l' | 'c' | 'ne', boolean>;

function calcular(resp: number[], posse: Posse, produtos: boolean): Resultado {
  const own = { ...posse };
  if (own.ne) own.a = true;
  const S = pontuar(resp);
  const ex: Record<string, boolean> = { ...own };
  if (produtos) { ex.c = true; S.c = 0; }
  const av = (['l', 'a', 'c'] as const).filter((k) => !ex[k]);
  if (!(['a', 'l', 'c'] as const).some((k) => !own[k]) || !av.length) return own.ne || S.me > S.ne ? 'me' : 'ne';
  const outros = (k: K) =>
    (['a', 'l', 'c', 'ne', 'me'] as const)
      .filter((x) => x !== k && (x === 'me' || (x === 'ne' ? !own.ne : !ex[x])))
      .map((x) => S[x]);
  for (const k of ['ne', 'me'] as const) {
    if (!(k === 'ne' && own.ne) && S[k] > Math.max(...outros(k))) return k;
  }
  const ORD = { l: 0, a: 1, c: 2 };
  const srt = [...av].sort((x, y) => S[y] - S[x] || ORD[x] - ORD[y]);
  const chave = (ks: string[]) => (['c', 'l', 'a'] as const).filter((k) => ks.includes(k)).join('') as Resultado;
  const [p0, p1, p2] = srt;
  if (srt.length === 3 && srt.every((k) => S[k] >= 3) && S[p0!] - S[p2!] <= 2) return 'cla';
  if (srt.length >= 2 && S[p0!] >= 3 && S[p1!] >= 3 && S[p0!] - S[p1!] <= 2) return chave([p0!, p1!]);
  return p0! as Resultado;
}

export const TEXTOS: Record<Resultado, { t: string; x: string; cta: string }> = {
  a: { t: 'o seu próximo passo é o antes da foto.', x: 'Você quer desenvolver o seu pensamento criativo, trabalhando com clientes ou não. No e-book, eu abro o meu processo do briefing ao planejamento, pra você saber o que fazer antes de cada foto, com 12 práticas e 5 briefings pra treinar mesmo sem cliente.', cta: 'quero conhecer o e-book' },
  l: { t: 'o seu próximo passo é o luz na prática.', x: 'Você já sabe fotografar, e agora é hora de aprender a controlar a luz. É um curso prático de iluminação: eu mostro como penso e monto a luz, com aulas práticas e análises de trabalhos reais, pra você controlar e criar a luz que cada foto pede, com o equipamento que você tem.', cta: 'quero conhecer o curso' },
  c: { t: 'o seu próximo passo é o mais que um click.', x: 'Você precisa do caminho inteiro da fotografia de gastronomia: do briefing à foto final, passando por produção, luz, edição e quanto cobrar. São 14 módulos, com exercícios e dois projetos completos pra você montar o seu portfólio.', cta: 'quero conhecer o curso' },
  la: { t: 'o seu próximo passo é o combo luz na prática + antes da foto.', x: 'Você trava um pouco em tudo, e esse combo resolve as duas pontas da foto: no Antes da Foto, você aprende a ter a ideia e planejar a cena; no Luz na Prática, a construir a luz que você planejou. Levando os dois juntos, você economiza em relação aos cursos separados.', cta: 'quero o combo' },
  ca: { t: 'o seu próximo passo é o combo mais que um click + antes da foto.', x: 'Você quer o processo completo da fotografia de gastronomia e, junto, aprofundar a parte que mais diferencia o seu trabalho: as ideias e o planejamento antes do clique. Levando os dois juntos, você economiza em relação aos cursos separados.', cta: 'quero o combo' },
  cl: { t: 'o seu próximo passo é o combo mais que um click + luz na prática.', x: 'Você quer o processo completo da fotografia de gastronomia e aprender a controlar a parte que mais muda o resultado da foto: a luz. Levando os dois juntos, você economiza em relação aos cursos separados.', cta: 'quero o combo' },
  cla: { t: 'o seu próximo passo é o completo.', x: 'Você quer tudo: o processo inteiro da fotografia de gastronomia, a técnica de luz e a direção criativa antes do clique. Os três cursos juntos, com o maior desconto em relação a comprar separado.', cta: 'quero o completo' },
  ne: { t: 'o seu próximo passo é o no estúdio.', x: 'Em dois dias no meu estúdio, em Belo Horizonte, você aprende todos os meus processos criativos e coloca tudo em prática comigo, junto com a técnica: do briefing ao planejamento, da produção à luz e à foto. As vagas são limitadas, e quem está na lista fica sabendo primeiro quando abre uma turma.', cta: 'entrar na lista de espera' },
  me: { t: 'o seu próximo passo é a mentoria.', x: 'Você quer algo feito pra você, esteja começando ou já trabalhando há anos. Na mentoria, a gente monta o conteúdo juntos, em cima das suas dúvidas e dificuldades: negócio, técnica, edição, direção criativa ou um pouco de tudo. Online ou no meu estúdio.', cta: 'falar comigo' },
};

interface Alem { k: Resultado; t: string; x: string; ey?: string }
const ALEM: Partial<Record<Resultado, Alem>> = {
  a: { k: 'la', t: 'Antes da Foto + Luz na Prática', x: 'O e-book planeja a foto; o Luz na Prática ensina a construir a luz que você planejou.' },
  l: { k: 'la', t: 'Luz na Prática + Antes da Foto', x: 'Com o e-book, você planeja a foto inteira antes de montar a luz.' },
  c: { k: 'cl', t: 'Mais que um Click + Luz na Prática', x: 'O Luz na Prática aprofunda a parte que mais muda o resultado da foto.' },
  la: { k: 'cla', t: 'Completo · Luz na Prática + Antes da Foto + Mais que um Click', x: 'O Mais que um Click completa com o processo inteiro da fotografia de gastronomia.' },
  ca: { k: 'cla', t: 'Completo · Mais que um Click + Antes da Foto + Luz na Prática', x: 'O Luz na Prática aprofunda a luz.' },
  cl: { k: 'cla', t: 'Completo · Mais que um Click + Luz na Prática + Antes da Foto', x: 'O Antes da Foto aprofunda as ideias e o planejamento antes do clique.' },
  ne: { k: 'a', t: 'Antes da Foto', x: 'pra você já chegar no workshop com o meu processo na cabeça.' },
};
const ALEM_ME: Alem = { k: 'me', ey: 'pra você que quer acompanhamento individual', t: 'mentoria', x: 'A gente monta o conteúdo juntos, em cima das suas dúvidas e dificuldades. Online ou no meu estúdio.' };
const ALEM_ME2: Alem = { k: 'me', ey: 'pra você que quer continuar praticando comigo', t: 'mentoria', x: 'Você já passou pelo estúdio. Agora dá pra continuar comigo: a gente monta o conteúdo juntos, em cima das suas dúvidas e dificuldades, presencial no meu estúdio ou online.' };
const ALEM_NE: Alem = { k: 'ne', t: 'No Estúdio', x: 'Dois dias no meu estúdio, praticando todo o processo comigo: do briefing à luz e à foto.' };

export interface SaidaQuiz {
  r: Resultado;
  cursosNoResultado: ('a' | 'l' | 'c')[]; // ordem c, l, a (botões "conheça o …")
  alem: Alem | null;
}

export function resultadoQuiz(resp: number[], alunos: Partial<Record<Aluno, boolean>>): SaidaQuiz {
  const posse: Posse = { a: !!(alunos.a || alunos.ne), l: !!alunos.l, c: !!alunos.c, ne: !!alunos.ne };
  const produtos = resp[0] === 1;
  const r = calcular(resp, posse, produtos);
  const S = pontuar(resp);

  let alem: Alem | null = ALEM[r] ?? null;
  if (r === 'la' && (produtos || S.ne >= 2)) alem = posse.ne ? ALEM.la! : ALEM_NE;
  if (r !== 'me' && (resp[2] === 4 || resp[3] === 3)) alem = ALEM_ME;
  else if (r !== 'me' && posse.ne && (resp[2] === 3 || resp[3] === 2)) alem = ALEM_ME2;

  const bloqueado = !!alem && alem.k !== 'ne' && alem.k !== 'me' &&
    (alem.k.split('').some((k) => posse[k as keyof Posse]) || (produtos && alem.k.includes('c')));

  const cursosNoResultado = r === 'ne' || r === 'me' ? [] : (['c', 'l', 'a'] as const).filter((k) => r.includes(k));
  return { r, cursosNoResultado, alem: bloqueado ? null : alem };
}
