import s from './SeloGarantia.module.css';

// Manual · 2 · 05.07
export function SeloGarantia() {
  return (
    <div className={s.selo}>
      <div className={s.quadro} aria-hidden="true">
        <span className={s.numero}>7</span>
        <span className={s.dias}>DIAS</span>
      </div>
      <p className={s.texto}>
        <strong>Garantia de 7 dias.</strong>
        <br />
        Se não for para você, devolvemos 100% do valor.
      </p>
    </div>
  );
}
