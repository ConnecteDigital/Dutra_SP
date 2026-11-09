import type { ImageMetadata } from 'astro';
import { site } from './site';
import { getServico } from './servicos';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Enquanto não houver foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

// Texto alternativo específico de cada foto (preencher quando as fotos chegarem)
const alts: Record<string, string> = {};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  const nome = getServico(slug)?.nome ?? 'Serviço';
  return { src: mod.default, alt: alts[slug] ?? `${nome} realizado pela ${site.name}` };
}

export const temFotos = Object.keys(arquivos).some((k) => !k.endsWith('/geral.jpg'));
