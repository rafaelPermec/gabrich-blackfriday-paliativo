import { LogoMascara, LOGO } from '@/components/LogoMascara';
import s from './FaixaRolante.module.css';

// Faixa rolante da Black (tema preto, conteúdo "cursos"). Só CSS: zero JS no navegador.
function Sequencia({ oculta }: { oculta?: boolean }) {
  const pecas = [
    <LogoMascara key="l" src={LOGO.lnp.src} alt={LOGO.lnp.alt} largura={Math.round(16 * LOGO.lnp.r)} altura={16} cor="#F4F0E8" />,
    <LogoMascara key="c" src={LOGO.mqc.src} alt={LOGO.mqc.alt} largura={Math.round(16 * LOGO.mqc.r)} altura={16} cor="#F4F0E8" />,
    <LogoMascara key="a" src={LOGO.adf.src} alt={LOGO.adf.alt} largura={Math.round(15 * LOGO.adf.r)} altura={15} cor="#F4F0E8" />,
  ];
  return (
    <div className={s.metade} aria-hidden={oculta || undefined}>
      {[0, 1, 2].flatMap((r) => pecas.flatMap((p, i) => [<span key={`${r}${i}`} className={s.peca}>{p}</span>, <i key={`${r}${i}s`} className={s.sep} />]))}
    </div>
  );
}

export function FaixaRolante() {
  return (
    <div className={s.faixa} role="marquee" aria-label="Black Friday: Luz na Prática, Mais que um Click e Antes da Foto">
      <div className={s.trilho}>
        <Sequencia />
        <Sequencia oculta />
      </div>
    </div>
  );
}
