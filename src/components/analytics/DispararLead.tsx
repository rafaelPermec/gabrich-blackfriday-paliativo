'use client';
import { useEffect } from 'react';
import { useConsentimento } from '@/lib/analytics/consentimento';
import { rastrear } from '@/lib/analytics/eventos';

// Dispara "Lead" uma vez por sessão, quando houver consentimento e o pixel já estiver na página.
export function DispararLead({ nome }: { nome: string }) {
  const c = useConsentimento();
  useEffect(() => {
    if (!c?.marketing && !c?.analise) return;
    const chave = `dg_lead_${nome}`;
    if (sessionStorage.getItem(chave)) return;
    let tentativas = 0;
    const id = window.setInterval(() => {
      if (window.fbq || window.clarity || ++tentativas > 20) {
        window.clearInterval(id);
        rastrear('Lead', { content_name: nome });
        sessionStorage.setItem(chave, '1');
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [c, nome]);
  return null;
}
