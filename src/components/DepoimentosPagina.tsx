import { DEPOIMENTOS } from '@/config/depoimentos';
import { Depoimentos } from './Depoimentos';

// Ponte para as páginas geradas do manual: <DepoimentosPagina set="lnp" />
export function DepoimentosPagina({ set }: { set: keyof typeof DEPOIMENTOS }) {
  return <Depoimentos conjunto={DEPOIMENTOS[set] ?? DEPOIMENTOS.cursos} />;
}
