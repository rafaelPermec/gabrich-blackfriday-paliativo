import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import adfFoto from '@/imagens/capas/adf-foto.jpg';
import tripe from '@/imagens/capas/tripe.jpg';
import pizza from '@/imagens/capas/pizza.jpg';
import silhueta from '@/imagens/capas/estudio-silhueta.jpg';
import mentoria from '@/imagens/capas/mentoria-estudio.jpg';
import s from './Capa.module.css';

export type ProdutoCapa = 'adf' | 'lnp' | 'mqc' | 'ne' | 'mentoria';

// Mesmo conteúdo das capas da Hotmart (arquivo "Capas de Produto Hotmart"), 2:3, raio 16.
function Miolo({ produto, sizes, comAcao }: { produto: ProdutoCapa; sizes: string; comAcao?: boolean }) {
  switch (produto) {
    case 'adf':
      return (
        <div className={s.miolo} style={{ background: '#0b0b0b' }}>
          <Image src={adfFoto} alt="" fill sizes={sizes} className={s.foto} style={{ objectPosition: '60% 50%' }} />
          <div className={s.veu} style={{ background: 'linear-gradient(0deg,#0b0b0b 0%,rgba(11,11,11,.85) 32%,rgba(11,11,11,.2) 64%)' }} />
          <div className={s.adfBloco}>
            <img src="/marca/antes-da-foto-duas-linhas.svg" alt="Antes da Foto · e-book" className={s.adfLogo} width={361} height={160} />
            <span className={s.adfDesc}>direção criativa para fotografia de produtos</span>
            <div className={s.adfLinha}>
              <span className={s.adfPilula}>E-BOOK</span>
              <span className={s.adfAutora}>por Débora Gabrich</span>
            </div>
          </div>
        </div>
      );
    case 'lnp':
      return (
        <div className={s.miolo} style={{ background: '#1E1A17' }}>
          <Image src={tripe} alt="" fill sizes={sizes} className={s.foto} style={{ objectPosition: '50% 35%' }} />
          <div className={s.veu} style={{ background: 'linear-gradient(0deg,#1E1A17 0%,rgba(30,26,23,.88) 30%,rgba(30,26,23,.15) 62%)' }} />
          <div className={s.lnpBloco}>
            <img src="/marca/luz-na-pratica.svg" alt="Luz na Prática" className={s.lnpLogo} width={1874} height={170} />
            <span className={s.lnpDesc}>iluminação para fotografia de gastronomia e produtos</span>
          </div>
        </div>
      );
    case 'mqc':
      return (
        <div className={s.miolo} style={{ background: '#000' }}>
          <Image src={pizza} alt="" fill sizes={sizes} className={s.foto} style={{ objectPosition: 'left center' }} />
          <div className={s.mqcBloco}>
            <img src="/marca/mais-que-um-click-empilhada.svg" alt="Mais que um Click" className={s.mqcLogo} width={1012} height={584} />
            <span className={s.mqcDesc}>processos criativos na<br />fotografia de gastronomia</span>
          </div>
        </div>
      );
    case 'ne':
      return (
        <div className={s.miolo} style={{ background: '#302F2D' }}>
          <Image src={silhueta} alt="" fill sizes={sizes} className={s.foto} style={{ objectPosition: '50% 30%' }} />
          <div className={s.veu} style={{ background: 'linear-gradient(90deg,rgba(48,47,45,.75),rgba(48,47,45,.25) 60%,rgba(48,47,45,.5))' }} />
          <div className={s.neQuadro} aria-hidden="true">
            <i className={s.neCantoSE} /><i className={s.neCantoSD} /><i className={s.neCantoIE} /><i className={s.neCantoID} />
          </div>
          <div className={s.neCentro}>
            <img src="/marca/no-estudio-empilhada.svg" alt="No Estúdio" className={s.neLogo} width={543} height={202} />
          </div>
        </div>
      );
    case 'mentoria':
      return (
        <div className={s.miolo} style={{ background: '#0b0b0b' }}>
          <Image src={mentoria} alt="" fill sizes={sizes} className={s.foto} style={{ objectPosition: '50% 30%' }} />
          <div className={s.veu} style={{ background: 'linear-gradient(0deg,#0b0b0b 0%,rgba(11,11,11,.85) 34%,rgba(11,11,11,.1) 70%)' }} />
          <div className={`${s.meBloco} ${comAcao ? s.meBlocoAcima : ''}`}>
            <span className={s.mePilula}>mentoria individual</span>
            <span className={s.meTitulo}>mentoria</span>
            <span className={s.meDesc}>{comAcao ? 'acompanhamento individual com a Débora, online ou no estúdio.' : 'acompanhamento individual com a Débora'}</span>
            <img src="/marca/debora-gabrich.svg" alt="Débora Gabrich" className={s.meLogo} width={917} height={98} />
          </div>
        </div>
      );
  }
}

interface Props {
  produto: ProdutoCapa;
  href?: string;
  largura?: number;
  etiquetas?: ReactNode;
  rotulo?: string; // nome acessível do link
  acao?: ReactNode; // botão próprio dentro do card (ex.: "falar comigo" da Mentoria)
}

export function Capa({ produto, href, largura = 220, etiquetas, rotulo, acao }: Props) {
  const conteudo = (
    <>
      <Miolo produto={produto} sizes={`${largura}px`} comAcao={!!acao} />
      {etiquetas && <div className={s.etiquetas}>{etiquetas}</div>}
    </>
  );
  const estilo = { width: largura };
  const classe = `${s.capa} ${produto === 'mentoria' ? s.contorno : ''}`;
  // Com botão próprio: o link cobre o card por baixo e o botão fica por cima (sem <a> dentro de <a>).
  if (href && acao) {
    return (
      <div className={classe} style={estilo}>
        {conteudo}
        <Link href={href} className={s.cobertura} aria-label={rotulo} />
        <div className={s.acao}>{acao}</div>
      </div>
    );
  }
  return href ? (
    <Link href={href} className={classe} style={estilo} aria-label={rotulo}>{conteudo}</Link>
  ) : (
    <div className={classe} style={estilo}>{conteudo}</div>
  );
}

export const classeBotaoCapa = s.acaoBotao;

export function Etiqueta({ fundo, cor, children, contorno }: { fundo: string; cor: string; children: ReactNode; contorno?: string }) {
  return (
    <span className={s.etiqueta} style={{ background: fundo, color: cor, boxShadow: contorno ? `inset 0 0 0 1px ${contorno}` : undefined }}>
      {children}
    </span>
  );
}
