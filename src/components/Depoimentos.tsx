import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { ConjuntoDepoimentos, Print } from '@/config/depoimentos';
import { CarrosselDepoimentos } from './CarrosselDepoimentos';
import { PlayerYouTube } from './PlayerYouTube';
import s from './Depoimentos.module.css';

// Distribui os prints em 3 colunas, na ordem, sempre na coluna mais baixa (calculado no build).
function colunas(prints: Print[]) {
  const alturas = [0, 0, 0];
  const cols: Print[][] = [[], [], []];
  for (const p of prints) {
    const i = alturas.indexOf(Math.min(...alturas));
    cols[i]!.push(p);
    alturas[i]! += p.img.height / p.img.width + 0.12;
  }
  return cols;
}

function CardPrint({ p, sizes }: { p: Print; sizes: string }) {
  return (
    <figure className={s.figura}>
      <div className={s.moldura}>
        <Image src={p.img} alt={p.legenda ? `depoimento · ${p.legenda}` : 'depoimento de aluna ou aluno'} sizes={sizes} className={s.print} />
      </div>
      {p.legenda && <figcaption className={s.legenda}>{p.legenda}</figcaption>}
    </figure>
  );
}

function CardVideo({ id, legenda, largo }: { id: string; legenda?: string; largo?: boolean }) {
  return (
    <div className={s.video}>
      <PlayerYouTube id={id} titulo={legenda ?? 'depoimento'} className={`${s.videoCard} ${largo ? s.largo : ''}`}>
        <Image src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" fill sizes="(max-width: 640px) 100vw, 400px" className={s.capaVideo} />
        <span className={s.play} aria-hidden="true"><span /></span>
      </PlayerYouTube>
      {legenda && <div className={s.legendaVideo}>{legenda}</div>}
    </div>
  );
}

// Manual · 2 · 10 · 09. Player do YouTube dentro do card; só a capa carrega até o clique.
export function Depoimentos({ conjunto }: { conjunto: ConjuntoDepoimentos }) {
  const { prints, base, baseLado = [] } = conjunto;
  const grade = prints.filter((p) => p.id !== base && !baseLado.includes(p.id));
  const pBase = prints.find((p) => p.id === base);
  const pLado = baseLado.map((id) => prints.find((p) => p.id === id)).filter(Boolean) as Print[];
  const mobile: Print[] = [];
  for (const p of prints) {
    if (baseLado.includes(p.id)) continue;
    mobile.push(p);
    if (p.id === base) mobile.push(...pLado);
  }
  const fmt = conjunto.formatoVideo ?? 'vertical';
  const pAlto = conjunto.alto ? prints.find((p) => p.id === conjunto.alto) : undefined;
  const restoAlto = pAlto ? prints.filter((p) => p !== pAlto) : [];
  const vars = { '--dep-acento': conjunto.acento, '--dep-legenda': conjunto.corLegenda, '--dep-card': conjunto.fundoCard, '--dep-moldura': conjunto.moldura } as CSSProperties;

  return (
    <div className={s.raiz} style={vars}>
      {conjunto.videos.length > 0 && (
        <div className={`${s.videos} ${fmt === 'duo' ? s.duo : ''} ${fmt === 'largo' ? s.umaColuna : ''} ${pAlto ? s.soMobile : ''}`}>
          {conjunto.videos.map((v) => <CardVideo key={v.id} id={v.id} legenda={v.legenda} largo={fmt === 'largo'} />)}
        </div>
      )}

      {pAlto && (
        <div className={`${s.desktop} ${s.ladoALado}`}>
          {conjunto.videos.map((v) => <CardVideo key={v.id} id={v.id} legenda={v.legenda} />)}
          <figure className={s.figura}>
            <div className={s.alto}><Image src={pAlto.img} alt="depoimento" fill sizes="400px" className={s.altoImg} /></div>
            {pAlto.legenda && <figcaption className={s.legenda}>{pAlto.legenda}</figcaption>}
          </figure>
          <div className={s.lado}>{restoAlto.map((p) => <CardPrint key={p.id} p={p} sizes="600px" />)}</div>
        </div>
      )}

      {!pAlto && grade.length > 0 && <div className={s.desktop}>
        <div className={s.masonry}>
          {colunas(grade).map((col, i) => (
            <div key={i} className={s.coluna}>{col.map((p) => <CardPrint key={p.id} p={p} sizes="400px" />)}</div>
          ))}
        </div>
        {pBase && (
          <div className={s.base}>
            <CardPrint p={pBase} sizes="800px" />
            <div className={s.lado}>{pLado.map((p) => <CardPrint key={p.id} p={p} sizes="400px" />)}</div>
          </div>
        )}
      </div>}

      {prints.length > 0 && <CarrosselDepoimentos className={s.mobile} total={mobile.length}>
        {mobile.map((p) => (
          <figure key={p.id} className={s.slideMobile}>
            <div className={s.molduraMobile}>
              <Image src={p.img} alt={p.legenda ? `depoimento · ${p.legenda}` : 'depoimento de aluna ou aluno'} sizes="90vw" className={s.printMobile} />
            </div>
            {p.legenda && <figcaption className={s.legenda}>{p.legenda}</figcaption>}
          </figure>
        ))}
      </CarrosselDepoimentos>}
    </div>
  );
}
