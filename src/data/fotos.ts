import type { ImageMetadata } from 'astro';
import { getServico } from './servicos';

// Uma foto por serviço (src/assets/fotos/<slug>.jpg), mais a foto "geral" do topo da página inicial.
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Enquanto não houver foto, o site mostra o ícone do serviço no lugar.

// As fotos atuais são ILUSTRATIVAS (banco de imagens, ver fotos/CREDITOS.md).
// Mude para true só quando todas forem fotos reais de serviços da empresa:
// isso libera a galeria "Trabalhos realizados" e a legenda "serviço realizado por".
export const fotosReais = false;
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

// Texto alternativo de cada foto (descreve o que aparece na imagem)
const alts: Record<string, string> = {
  'geral': 'Profissional de uniforme laranja com mangote do caminhão em um poço de visita aberto na rua',
  'desentupimento-de-pia': 'Ralo de pia de aço inox visto de cima',
  'desentupimento-de-ralo': 'Ralo quadrado de aço inox em piso de azulejo branco',
  'desentupimento-de-vaso-sanitario': 'Vaso sanitário branco em banheiro',
  'desentupimento-de-cano': 'Tubos de PVC empilhados em um canteiro de obras',
  'desentupimento-de-esgoto': 'Máquina desentupidora com cabo na tubulação de esgoto, em piso de bloquete',
  'desentupimento-de-conduite': 'Caixas de passagem com conduítes e fios em parede em obra',
  'desentupimento-de-agua-limpa': 'Torneira aberta com água corrente',
  'hidrojateamento': 'Profissional usando jato de água de alta pressão',
  'limpa-fossa': 'Caminhão limpa fossa com carretel de mangueira durante atendimento',
  'limpeza-de-caixa-de-gordura': 'Caixa de gordura aberta e cheia, antes da limpeza',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  const nome = getServico(slug)?.nome ?? 'Serviço';
  return { src: mod.default, alt: alts[slug] ?? nome };
}

export const temFotos = fotosReais && Object.keys(arquivos).some((k) => !k.endsWith('/geral.jpg'));
