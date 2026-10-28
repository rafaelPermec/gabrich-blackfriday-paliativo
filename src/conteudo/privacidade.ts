// Política de privacidade · texto-base padrão para LGPD (Lei 13.709/2018).
// Preencha os campos entre [colchetes] antes de publicar. Atualize a data a cada mudança.
export const RESPONSAVEL = {
  nome: '[NOME COMPLETO OU RAZÃO SOCIAL]',
  documento: '[CPF OU CNPJ]',
  endereco: '[ENDEREÇO COMPLETO]',
  email: 'contato@deboragabrich.com.br',
};

export const ATUALIZADA_EM = '27 de outubro de 2026';

export const SECOES: { titulo: string; paragrafos: string[] }[] = [
  {
    titulo: 'Quem somos',
    paragrafos: [
      `Este site (www.deboragabrich.com) é mantido por ${RESPONSAVEL.nome}, inscrita sob o ${RESPONSAVEL.documento}, com endereço em ${RESPONSAVEL.endereco}, responsável pelo tratamento dos seus dados pessoais.`,
      `Para qualquer assunto sobre os seus dados, fale com a gente pelo e-mail ${RESPONSAVEL.email}.`,
    ],
  },
  {
    titulo: 'Quais dados coletamos',
    paragrafos: [
      'Dados que você informa: nome, e-mail, WhatsApp (opcional) e os cursos de interesse, quando você entra numa lista de espera; e as informações que você envia por e-mail.',
      'Dados de navegação, só com o seu consentimento: páginas visitadas, cliques, origem da visita (por exemplo, parâmetros de campanha), tipo de dispositivo e navegador.',
      'Não coletamos dados de pagamento. As compras são feitas no ambiente da Hotmart, que tem a própria política de privacidade.',
    ],
  },
  {
    titulo: 'Para que usamos os dados',
    paragrafos: [
      'Enviar os avisos e e-mails que você pediu ao entrar numa lista de espera.',
      'Responder o seu contato.',
      'Entender como o site é usado e melhorar as páginas.',
      'Medir o resultado dos anúncios e mostrar anúncios mais relevantes.',
    ],
  },
  {
    titulo: 'Bases legais',
    paragrafos: [
      'Consentimento (art. 7º, I, da LGPD): lista de espera, cookies de análise e de marketing.',
      'Execução de contrato ou de procedimentos preliminares (art. 7º, V): atendimento a pedidos de informação sobre os cursos.',
      'Cumprimento de obrigação legal (art. 7º, II), quando aplicável.',
    ],
  },
  {
    titulo: 'Cookies e ferramentas',
    paragrafos: [
      'Cookies necessários: guardam a sua escolha sobre cookies. Não dependem de consentimento.',
      'Análise (Microsoft Clarity): mostra como as páginas são usadas, de forma agregada. Só é ativado se você aceitar.',
      'Marketing (Meta Pixel e Hotmart): mede conversões e a origem das visitas e permite anúncios personalizados. Só é ativado se você aceitar. Também guardamos, por até 180 dias, a campanha que trouxe você ao site.',
      'Você pode mudar a sua escolha a qualquer momento limpando os cookies do navegador; o aviso aparece de novo na próxima visita.',
    ],
  },
  {
    titulo: 'Com quem compartilhamos',
    paragrafos: [
      'Hotmart (pagamentos, área de membros e envio de e-mails da lista de espera), Meta Platforms (Meta Pixel) e Microsoft (Clarity), apenas para as finalidades descritas aqui.',
      'Alguns desses serviços podem armazenar dados fora do Brasil, com as garantias previstas na LGPD.',
      'Não vendemos os seus dados.',
    ],
  },
  {
    titulo: 'Por quanto tempo guardamos',
    paragrafos: [
      'Dados da lista de espera: até você pedir a saída da lista ou cancelar o recebimento dos e-mails.',
      'Dados de navegação: pelo prazo de cada ferramenta, e no máximo 180 dias para a campanha de origem.',
      'Dados que a lei obriga a manter: pelo prazo legal.',
    ],
  },
  {
    titulo: 'Seus direitos',
    paragrafos: [
      'Você pode pedir, a qualquer momento: confirmação de que tratamos seus dados, acesso, correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre compartilhamento e revogação do consentimento.',
      `Para isso, escreva para ${RESPONSAVEL.email}. Respondemos em até 15 dias. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).`,
      'Todo e-mail da lista de espera traz um link para sair da lista.',
    ],
  },
  {
    titulo: 'Segurança',
    paragrafos: ['O site usa conexão segura (HTTPS) e só compartilha dados com os serviços listados acima, que adotam medidas próprias de segurança.'],
  },
  {
    titulo: 'Alterações',
    paragrafos: ['Esta política pode ser atualizada. A data da última versão fica no topo da página.'],
  },
];
