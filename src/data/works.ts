// Trabalhos do portfólio. A ordem aqui é a ordem da grade (linha a linha, duas colunas).
// Para incluir um filme novo: acrescentar um objeto. A página /portfolio/<slug>/ sai sozinha.
//
// video: { yt: '<id de 11 caracteres>' } ou { vimeo: '<número>' }
// credits: pares rótulo/valor mostrados nos cartões abaixo do vídeo.
// cover: imagem em public/img/works/ no lugar da capa automática do YouTube.
//   Filmes do Vimeo precisam de cover: o Vimeo não tem endereço fixo de capa, e o
//   vumbnail.com (serviço de terceiros) falhava às vezes.
// inGrid: false mantém a página no ar sem aparecer na grade (caso do Brilhante no WordPress).

export type Work = {
  slug: string;
  title: string;
  video: { yt: string } | { vimeo: string };
  credits: { label: string; value: string }[];
  cover?: string;
  inGrid?: boolean;
  inCases?: boolean;
};

export const works: Work[] = [
  {
    slug: 'nespresso',
    title: 'Nespresso',
    video: { yt: '1K_x1J1TYvw' },
    credits: [{ label: 'Brand', value: 'Nespresso' }, { label: 'Director', value: 'Harbor' }],
  },
  {
    slug: 'mercado-pago',
    title: 'Mercado Pago',
    video: { yt: '0Z5S6LgLesU' },
    // Quadro do próprio filme no YouTube (maxres1): o mecânico de barba olhando para a câmera.
    cover: '/img/works/mercado-pago.webp',
    credits: [{ label: 'Brand', value: 'Mercado Pago' }, { label: 'Director', value: 'Harbor' }],
  },
  {
    slug: 'clear-men',
    title: 'Clear Men',
    video: { yt: 'wc6uuefUL0Y' },
    credits: [{ label: 'Brand', value: 'Unilever' }, { label: 'Director', value: 'Harbor' }],
    inCases: true,
  },
  {
    slug: 'the-invitation',
    title: 'The Invitation',
    video: { yt: 'Ew1L3hLX0wM' },
    credits: [{ label: 'Title', value: 'The Invitation (short film)' }, { label: 'Director', value: 'Luciano Mathias' }],
    inCases: true,
  },
  {
    slug: 'kfc',
    title: 'KFC',
    video: { yt: 'Y51h7aMZV-Q' },
    credits: [{ label: 'Brand', value: 'KFC' }, { label: 'Director', value: 'Harbor' }],
    inCases: true,
  },
  {
    slug: 'red-bull',
    title: 'Red Bull',
    video: { yt: 'TS8nbKD993I' },
    credits: [{ label: 'Brand', value: 'Red Bull' }, { label: 'Director', value: 'Billy Boman' }],
    inCases: true,
  },
  {
    slug: 'snickers',
    title: 'Snickers',
    video: { yt: 'zdrSccNMnVI' },
    credits: [{ label: 'Brand', value: 'Snickers' }, { label: 'Director', value: 'Billy Boman' }],
  },
  {
    slug: 'bottega-veneta',
    title: 'Bottega Veneta',
    video: { vimeo: '1106404260' },
    cover: '/img/works/bottega-veneta.webp',
    credits: [{ label: 'Brand', value: 'Bottega Veneta' }, { label: 'Director', value: 'Niccolò Valentino' }],
  },
  {
    slug: 'gucci',
    title: 'Gucci',
    video: { vimeo: '1095704631' },
    cover: '/img/works/gucci.webp',
    credits: [{ label: 'Brand', value: 'Gucci' }, { label: 'Director', value: 'Niccolò Valentino' }],
  },
  {
    slug: 'viaplay',
    title: 'Viaplay',
    video: { vimeo: '1068203118' },
    cover: '/img/works/viaplay.webp',
    credits: [{ label: 'Brand', value: 'Viaplay' }, { label: 'Director', value: 'Stephane Benini' }],
  },
  {
    slug: 'fyi',
    title: 'Mercedes-Benz FYI',
    video: { vimeo: '1092449966' },
    cover: '/img/works/fyi.webp',
    credits: [{ label: 'Brand', value: 'Mercedes-Benz' }, { label: 'Director', value: 'Stephane Benini' }],
  },
  {
    slug: 'paranoia',
    title: 'Paranoia',
    video: { vimeo: '1040247900' },
    cover: '/img/works/paranoia.webp',
    credits: [{ label: 'Title', value: 'Paranoia' }, { label: 'Director', value: 'Stephane Benini' }],
  },
  {
    slug: 'speedhunter',
    title: 'Speedhunter',
    video: { vimeo: '1035039476' },
    cover: '/img/works/speedhunter.webp',
    // No WordPress está "Porche"; a grafia correta é Porsche.
    credits: [{ label: 'Brand', value: 'Porsche' }, { label: 'Director', value: 'Stephane Benini' }],
  },
  {
    slug: 'brilhante',
    title: 'Brilhante',
    video: { yt: 'O9hFv0Nh-P4' },
    // No WordPress está "Univeler".
    credits: [{ label: 'Brand', value: 'Unilever' }, { label: 'Director', value: 'Harbor' }],
    inGrid: false,
  },
];

export function thumb(w: Work): string {
  if (w.cover) return w.cover;
  return 'yt' in w.video
    ? `https://i.ytimg.com/vi/${w.video.yt}/maxresdefault.jpg`
    : `https://vumbnail.com/${w.video.vimeo}.jpg`;
}

export function thumbFallback(w: Work): string | undefined {
  if (w.cover) return undefined;
  return 'yt' in w.video ? `https://i.ytimg.com/vi/${w.video.yt}/hqdefault.jpg` : undefined;
}

export function embed(w: Work, autoplay = false): string {
  if ('yt' in w.video) {
    return `https://www.youtube-nocookie.com/embed/${w.video.yt}?rel=0&playsinline=1${autoplay ? '&autoplay=1' : ''}`;
  }
  return `https://player.vimeo.com/video/${w.video.vimeo}?dnt=1${autoplay ? '&autoplay=1' : ''}`;
}

export const showreel = 'sPFeX2y2g34';
