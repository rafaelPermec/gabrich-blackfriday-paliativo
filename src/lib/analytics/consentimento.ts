'use client';
import { useSyncExternalStore } from 'react';

export interface Consentimento { analise: boolean; marketing: boolean; versao: number; ts: number }

const CHAVE = 'dg_consentimento';
const VERSAO = 1; // aumente para pedir o consentimento de novo
const EVENTO = 'dg:consentimento';

function ler(): Consentimento | null {
  try {
    const c = JSON.parse(localStorage.getItem(CHAVE) ?? 'null') as Consentimento | null;
    return c && c.versao === VERSAO ? c : null;
  } catch {
    return null;
  }
}

let cache: Consentimento | null | undefined;
const snapshot = () => (cache === undefined ? (cache = ler()) : cache);

export function salvarConsentimento(escolha: Pick<Consentimento, 'analise' | 'marketing'>) {
  const c: Consentimento = { ...escolha, versao: VERSAO, ts: Date.now() };
  localStorage.setItem(CHAVE, JSON.stringify(c));
  cache = c;
  window.dispatchEvent(new Event(EVENTO));
}

function assinar(cb: () => void) {
  const aoMudar = () => { cache = undefined; cb(); };
  window.addEventListener(EVENTO, cb);
  window.addEventListener('storage', aoMudar);
  return () => { window.removeEventListener(EVENTO, cb); window.removeEventListener('storage', aoMudar); };
}

/** undefined = ainda no servidor · null = pessoa não escolheu · objeto = escolha salva */
export function useConsentimento(): Consentimento | null | undefined {
  return useSyncExternalStore(assinar, snapshot, () => undefined);
}
