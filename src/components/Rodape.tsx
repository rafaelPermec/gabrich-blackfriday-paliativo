import { LOGOS, type Marca } from '@/config/marcas';
import { CONTATO } from '@/config/links';
import s from './Rodape.module.css';

interface Props {
  marca: Marca;
  // Na página "cursos" a linha "um curso Débora Gabrich" sai.
  assinatura?: boolean;
  alturaLogo?: number;
}

// Manual · 2 · 05.11. Igual com e sem Black Friday.
export function Rodape({ marca, assinatura = true, alturaLogo }: Props) {
  const logo = LOGOS[marca];
  const altura = alturaLogo ?? (marca === 'no-estudio' ? 20 : 16);
  return (
    <footer className={s.rodape}>
      <div className={s.interno}>
        <div className={s.marca}>
          <img src={logo.src} alt={logo.alt} height={altura} width={Math.round(altura * logo.proporcao)} loading="lazy" />
          {assinatura && <span className={s.assinatura}>um curso Débora Gabrich</span>}
        </div>
        <nav className={s.links} aria-label="Contato">
          <a href={CONTATO.geral.url}>contato</a>
          <a href={CONTATO.instagram.url} target="_blank" rel="noopener noreferrer">{CONTATO.instagram.name}</a>
          <a href="/privacidade">privacidade</a>
        </nav>
      </div>
    </footer>
  );
}
