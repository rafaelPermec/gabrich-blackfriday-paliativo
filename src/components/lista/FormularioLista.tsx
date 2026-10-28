'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import type { FormularioSend } from '@/config/links';
import { PARAMS_UTM, lerAtribuicaoDoNavegador, type Atribuicao } from '@/lib/atribuicao';
import s from './FormularioLista.module.css';

interface Opcao { valor: string; rotulo: ReactNode }

interface Props {
  form: FormularioSend;
  origem: string; // slug usado em /obrigado?curso=
  opcoes: Opcao[];
}

// Formulário com o visual do manual que envia para o Hotmart Send (POST direto, funciona sem JS).
export function FormularioLista({ form, origem, opcoes }: Props) {
  const router = useRouter();
  const [atrib, setAtrib] = useState<Atribuicao | null>(null);
  const [marcados, setMarcados] = useState<string[]>([]);
  useEffect(() => setAtrib(lerAtribuicaoDoNavegador()), []);

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    if (form.acao) return; // envio real: o navegador posta para o Hotmart Send
    e.preventDefault();
    console.warn(`[lista] "${form.name}" sem action configurada em links.ts · simulando envio`);
    router.push(`/obrigado?curso=${origem}`);
  };

  return (
    <form className={s.form} action={form.acao || undefined} method="post" onSubmit={enviar}>
      <div className={s.rotulo}>entrar na lista de espera</div>
      <label className={s.campo}>
        <span className={s.legenda}>nome</span>
        <input className={s.input} name={form.campos.nome} required autoComplete="name" placeholder="seu nome" />
      </label>
      <label className={s.campo}>
        <span className={s.legenda}>e-mail</span>
        <input className={s.input} name={form.campos.email} type="email" required autoComplete="email" inputMode="email" placeholder="seu@email.com" />
      </label>
      <label className={s.campo}>
        <span className={s.legenda}>whatsapp · opcional</span>
        <input className={s.input} name={form.campos.whatsapp} type="tel" autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" />
      </label>
      <fieldset className={s.grupo}>
        <legend className={s.legenda}>qual curso te interessa? · pode marcar mais de um</legend>
        {opcoes.map((o) => {
          const on = marcados.includes(o.valor);
          return (
            <label key={o.valor} className={s.opcao}>
              <input
                type="checkbox"
                className={s.check}
                name={form.campos.interesse}
                value={o.valor}
                checked={on}
                onChange={() => setMarcados((m) => (on ? m.filter((x) => x !== o.valor) : [...m, o.valor]))}
              />
              <span className={s.anel} aria-hidden="true"><span /></span>
              {o.rotulo}
            </label>
          );
        })}
      </fieldset>
      {Object.entries(form.ocultos).map(([k, v]) => <input key={k} type="hidden" name={k} value={v} />)}
      {atrib && PARAMS_UTM.map((k) => atrib[k] && <input key={k} type="hidden" name={k} value={atrib[k]} />)}
      <button type="submit" className={s.enviar}>entrar na lista de espera</button>
      <p className={s.aviso}>Ao entrar na lista, você concorda em receber e-mails da Débora Gabrich sobre a Black Friday. Dá pra sair quando quiser.</p>
    </form>
  );
}
