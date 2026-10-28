'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import type { FormularioSend } from '@/config/links';
import { PARAMS_UTM, lerAtribuicaoDoNavegador, type Atribuicao } from '@/lib/atribuicao';

// <form> que posta para o Hotmart Send (sem JS também funciona). Sem `acao`, simula e vai para /obrigado.
export function FormEnvio({ form, origem, children, style, className }: { form: FormularioSend; origem: string; children: ReactNode; style?: CSSProperties; className?: string }) {
  const router = useRouter();
  const [atrib, setAtrib] = useState<Atribuicao | null>(null);
  useEffect(() => setAtrib(lerAtribuicaoDoNavegador()), []);
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    if (form.acao) return;
    e.preventDefault();
    console.warn(`[lista] "${form.name}" sem action configurada em links.ts · simulando envio`);
    router.push(`/obrigado?curso=${origem}`);
  };
  return (
    <form action={form.acao || undefined} method="post" onSubmit={enviar} style={style} className={className}>
      {children}
      {Object.entries(form.ocultos).map(([k, v]) => <input key={k} type="hidden" name={k} value={v} />)}
      {atrib && PARAMS_UTM.map((k) => atrib[k] && <input key={k} type="hidden" name={k} value={atrib[k]} />)}
    </form>
  );
}
