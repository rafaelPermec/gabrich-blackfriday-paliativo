// Textos da página /obrigado, um bloco por lista de espera. Edite aqui: nada de texto fica no layout.
// A chave é o valor de ?curso= configurado no redirecionamento do Hotmart Send.
export interface TextosObrigado {
  titulo: string; // aba do navegador
  etiqueta: string;
  h1: string;
  texto: string;
  contador?: { titulo: string; ate: string }; // omita para não mostrar contador
  botaoPrincipal: string; // leva ao Instagram
  botaoSecundario: string; // volta para /cursos
  cabecalho: string; // botão pequeno do cabeçalho
}

export const OBRIGADO: Record<string, TextosObrigado> = {
  // Lista de espera da Black Friday 2026 (manual · 5 · C04)
  cursos: {
    titulo: 'Você está na lista',
    etiqueta: 'você está na lista',
    h1: 'Pronto! Te aviso quando abrir.',
    texto: 'Mandei um e-mail de confirmação. Se não aparecer em alguns minutos, olhe a caixa de spam ou de promoções.',
    contador: { titulo: 'a black friday começa em', ate: '2026-11-01T00:00:00-03:00' },
    botaoPrincipal: 'seguir no instagram',
    botaoSecundario: 'voltar para o início',
    cabecalho: 'voltar ao início',
  },
  // Lista do No Estúdio: provisório, com os mesmos textos e sem contador. Ajustar quando a página do No Estúdio for aprovada.
  'no-estudio': {
    titulo: 'Você está na lista',
    etiqueta: 'você está na lista',
    h1: 'Pronto! Te aviso quando abrir.',
    texto: 'Mandei um e-mail de confirmação. Se não aparecer em alguns minutos, olhe a caixa de spam ou de promoções.',
    botaoPrincipal: 'seguir no instagram',
    botaoSecundario: 'voltar para o início',
    cabecalho: 'voltar ao início',
  },
};
