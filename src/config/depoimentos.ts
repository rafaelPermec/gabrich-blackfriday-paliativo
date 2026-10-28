import type { StaticImageData } from 'next/image';
import d01 from '@/imagens/depoimentos/cursos-dep-01.png';
import d02 from '@/imagens/depoimentos/cursos-dep-02.png';
import d03 from '@/imagens/depoimentos/cursos-dep-03.png';
import d04 from '@/imagens/depoimentos/cursos-dep-04.png';
import d05 from '@/imagens/depoimentos/cursos-dep-05.png';
import d06 from '@/imagens/depoimentos/cursos-dep-06.png';
import d07 from '@/imagens/depoimentos/cursos-dep-07.png';
import d08 from '@/imagens/depoimentos/cursos-dep-08.png';
import adf1 from '@/imagens/depoimentos/adf-dep-01.png';
import adf2 from '@/imagens/depoimentos/adf-dep-02.png';
import adf3 from '@/imagens/depoimentos/adf-dep-03.png';
import lnp1 from '@/imagens/depoimentos/lnp-dep-01.png';
import lnp2 from '@/imagens/depoimentos/lnp-dep-02.png';
import lnp3 from '@/imagens/depoimentos/lnp-dep-03.png';
import lnp4 from '@/imagens/depoimentos/lnp-dep-04.png';
import lnp5 from '@/imagens/depoimentos/lnp-dep-05.png';
import lnp6 from '@/imagens/depoimentos/lnp-dep-06.png';
import mqc1 from '@/imagens/depoimentos/mqc-dep-01.png';
import mqc2 from '@/imagens/depoimentos/mqc-dep-02.png';
import mqc3 from '@/imagens/depoimentos/mqc-dep-03.png';
import mqc4 from '@/imagens/depoimentos/mqc-dep-04.png';
import mqc5 from '@/imagens/depoimentos/mqc-dep-05.png';
import mqc6 from '@/imagens/depoimentos/mqc-dep-06.png';
import ne1 from '@/imagens/depoimentos/noestudio-dep-01.png';
import ne2 from '@/imagens/depoimentos/noestudio-dep-02.png';
import ne3 from '@/imagens/depoimentos/noestudio-dep-03.png';
import ne4 from '@/imagens/depoimentos/noestudio-dep-04.png';
import ne5 from '@/imagens/depoimentos/noestudio-dep-05.png';
import ne6 from '@/imagens/depoimentos/noestudio-dep-06.png';
import ne7 from '@/imagens/depoimentos/noestudio-dep-07.png';

export interface Print { id: string; img: StaticImageData; legenda?: string }
export interface Video { id: string; legenda?: string }
export interface ConjuntoDepoimentos {
  acento: string;
  corLegenda: string;
  fundoCard: string;
  moldura: string;
  videos: Video[];
  prints: Print[];
  formatoVideo?: 'vertical' | 'largo' | 'duo'; // duo: 2 vídeos, até 560 px · largo: 16:9 (youtu.be)
  alto?: string; // layout lado a lado: vídeo + print 9:16 + coluna com os demais
  base?: string; // print largo da última linha (2 colunas)
  baseLado?: string[]; // prints empilhados ao lado do base
}

export const DEPOIMENTOS = {
  cursos: {
    acento: '#CCAA66', corLegenda: '#a89e8c', fundoCard: '#141312', moldura: '#1b1917',
    videos: [
      { id: 'IqUJ7S26M_M', legenda: 'aluna do Mais que um Click' },
      { id: 'YNqsShoqs0o', legenda: 'aluna do Luz na Prática' },
      { id: 'QJ34iLO5fY4', legenda: 'alunos do No Estúdio' },
    ],
    prints: [
      { id: 'cursos-dep-01', img: d01 }, { id: 'cursos-dep-02', img: d02 }, { id: 'cursos-dep-03', img: d03 },
      { id: 'cursos-dep-04', img: d04 }, { id: 'cursos-dep-05', img: d05 }, { id: 'cursos-dep-06', img: d06 },
      { id: 'cursos-dep-07', img: d07 }, { id: 'cursos-dep-08', img: d08 },
    ],
    base: 'cursos-dep-03',
    baseLado: ['cursos-dep-07', 'cursos-dep-08'],
  },
  adf: {
    acento: '#D39858', corLegenda: '#6F482C', fundoCard: '#0B0B0B', moldura: '#E6D6C6', alto: 'adf-dep-02',
    videos: [{ id: 'LwxNV5iGWBs', legenda: 'Bruna Doti · aluna Antes da Foto' }],
    prints: [{ id: 'adf-dep-01', img: adf1, legenda: 'Ana Clara · aluna do No Estúdio, onde o processo do Antes da Foto foi ensinado ao vivo' }, { id: 'adf-dep-02', img: adf2, legenda: 'Bruna Correa · aluna do No Estúdio, onde o processo do Antes da Foto foi ensinado ao vivo' }, { id: 'adf-dep-03', img: adf3, legenda: 'Jorge · aluno do No Estúdio, onde o processo do Antes da Foto foi ensinado ao vivo' }],
  },
  lnp: {
    acento: '#D9A648', corLegenda: '#B7A793', fundoCard: '#2a241f', moldura: '#2a241f', formatoVideo: 'duo',
    videos: [{ id: 'YNqsShoqs0o' }, { id: 'wUWE5UuGETk' }],
    prints: [{ id: 'lnp-dep-01', img: lnp1 }, { id: 'lnp-dep-02', img: lnp2 }, { id: 'lnp-dep-03', img: lnp3 }, { id: 'lnp-dep-04', img: lnp4 }, { id: 'lnp-dep-05', img: lnp5 }, { id: 'lnp-dep-06', img: lnp6 }],
  },
  mqc: {
    acento: '#F5C242', corLegenda: '#D9D5CC', fundoCard: '#3A3733', moldura: '#2A2826',
    videos: [{ id: 'IqUJ7S26M_M' }, { id: 'wUWE5UuGETk' }, { id: 'molz3qQGXNI' }],
    prints: [{ id: 'mqc-dep-01', img: mqc1 }, { id: 'mqc-dep-02', img: mqc2 }, { id: 'mqc-dep-03', img: mqc3 }, { id: 'mqc-dep-04', img: mqc4 }, { id: 'mqc-dep-05', img: mqc5 }, { id: 'mqc-dep-06', img: mqc6 }],
  },
  mqcvideo: {
    acento: '#F6F3EC', corLegenda: '#D9D5CC', fundoCard: '#0B0B0B', moldura: '#2A2826', formatoVideo: 'largo',
    videos: [{ id: '2T6fPs9kf1w' }],
    prints: [],
  },
  ne: {
    acento: '#D57D3D', corLegenda: '#A99583', fundoCard: '#202020', moldura: '#202020',
    videos: [{ id: 'QJ34iLO5fY4' }],
    prints: [{ id: 'noestudio-dep-01', img: ne1, legenda: 'Ana Clara · turma 01' }, { id: 'noestudio-dep-02', img: ne2, legenda: 'Bruna Correa · turma 01' }, { id: 'noestudio-dep-03', img: ne3, legenda: 'Jorge · turma 01' }, { id: 'noestudio-dep-04', img: ne4, legenda: 'Letícia · turma 01' }, { id: 'noestudio-dep-05', img: ne5, legenda: 'João Augusto · turma 01' }, { id: 'noestudio-dep-06', img: ne6 }, { id: 'noestudio-dep-07', img: ne7 }],
  },
} satisfies Record<string, ConjuntoDepoimentos>;
