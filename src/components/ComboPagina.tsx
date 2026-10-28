'use client';
import { MonteCombo } from './MonteCombo';
import type { CursoId } from '@/config/ofertas';

// Ponte para as páginas geradas do manual: <ComboPagina curso="a" bf={…} />
const CURSO: Record<string, CursoId> = { a: 'antes-da-foto', l: 'luz-na-pratica', c: 'mais-que-um-click' };

export function ComboPagina({ curso, bf }: { curso: 'a' | 'l' | 'c'; bf?: boolean }) {
  const c = CURSO[curso] ?? 'antes-da-foto';
  return <MonteCombo bf={!!bf} pagina={c} cursoDaPagina={c} />;
}
