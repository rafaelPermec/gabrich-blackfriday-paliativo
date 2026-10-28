// Ponto único de disparo de eventos. Cada ferramenta só existe na página se houve consentimento.
export type Evento = 'PageView' | 'ViewContent' | 'InitiateCheckout' | 'Lead' | 'Contact';

export interface DadosEvento {
  content_name?: string;
  content_ids?: string[];
  value?: number;
  currency?: 'BRL';
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function rastrear(evento: Evento, dados?: DadosEvento) {
  if (typeof window === 'undefined') return;
  window.fbq?.('track', evento, dados);
  window.clarity?.('event', evento);
  if (dados?.content_name) window.clarity?.('set', 'oferta', dados.content_name);
  // Pixel da Hotmart: adaptar aqui quando o script da conta for confirmado (ver PLANO.md · 7).
}

export const idSeguro = (id: string | undefined) => (id && /^[A-Za-z0-9_-]{4,40}$/.test(id) ? id : '');
