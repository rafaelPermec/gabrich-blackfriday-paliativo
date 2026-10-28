'use client';
import { salvarConsentimento } from '@/lib/analytics/consentimento';
import s from './BannerConsentimento.module.css';

// Texto provisório do banner; a política fica em /privacidade.
export function BannerConsentimento() {
  return (
    <div className={s.banner} role="region" aria-label="Cookies" data-tema="dg">
      <p className={s.texto}>
        Uso cookies para entender como o site é usado e medir anúncios. Você pode aceitar ou seguir só com os necessários.{' '}
        <a href="/privacidade" className={s.link}>política de privacidade</a>
      </p>
      <div className={s.acoes}>
        <button type="button" className={s.secundario} onClick={() => salvarConsentimento({ analise: false, marketing: false })}>
          só os necessários
        </button>
        <button type="button" className={s.primario} onClick={() => salvarConsentimento({ analise: true, marketing: true })}>
          aceitar
        </button>
      </div>
    </div>
  );
}
