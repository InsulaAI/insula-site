# insula-site

O site da Insula AI (insula-ai.com) em Astro, migrado do WordPress (tema Brandex + Elementor).
Site estático: HTML pronto, sem PHP nem banco de dados. O WordPress continua no ar até a troca de DNS.

## Rodar

```
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
```

## Onde está cada coisa

```
src/data/works.ts        portfólio: um objeto por filme (ordem = ordem da grade)
src/data/contacts.ts     contatos e redes sociais
src/data/privacy.html    texto da política de privacidade, copiado do WordPress
src/pages/               uma rota por arquivo; /portfolio/[slug].astro gera as páginas dos filmes
src/layouts/Base.astro   cabeçalho, menu, rodapé, lightbox de vídeo
src/styles/global.css    cores e fontes (tokens em :root)
public/                  imagens, vídeo do topo, _headers e _redirects da Cloudflare
```

### Incluir um filme

Acrescentar um objeto em `src/data/works.ts`:

```ts
{ slug: 'novo-filme', title: 'Novo Filme', video: { yt: 'ID_DO_YOUTUBE' }, credits: [{ label: 'Brand', value: 'Marca' }] },
```

A página `/portfolio/novo-filme/` e o item na grade saem sozinhos. A capa vem do YouTube (ou do
vumbnail.com, para Vimeo).

## Publicação (Cloudflare Pages)

Cloudflare Pages → Create → Connect to Git → este repositório.
- Framework preset: Astro · Build command: `npm run build` · Output: `dist`
- Variável `NODE_VERSION` = `22`

Enquanto estiver só no endereço `*.pages.dev`, o site sai com `noindex` e `robots.txt` bloqueando
tudo, para o Google não indexar uma cópia do site oficial.

### Troca de domínio (quando aprovado)

1. No projeto do Pages, adicionar a variável `PUBLIC_SITE_LIVE` = `true` e refazer o deploy
   (libera indexação, canonical e sitemap).
2. Custom domains → adicionar `insula-ai.com` e `www.insula-ai.com`.
3. Antes de apontar o DNS: exportar o WordPress inteiro (plugin All-in-One WP Migration, já
   instalado) e guardar. Os vídeos do Vimeo/YouTube não dependem do WordPress.
4. Depois, conferir: as URLs `/portfolio/<slug>/` são as mesmas do WordPress.

## Diferenças em relação ao WordPress

- Sem banner de cookies e sem Google Tag Manager (o site novo não grava cookie). Se o GTM
  (`GTM-WLQ5V3GB`) voltar, o banner de consentimento volta junto.
- As páginas de diretores (`/alexandragb/`, `/billyboman/`, `/fabio-hacker/`, `/stephanebenini/`)
  não foram migradas: não têm link no menu e estão incompletas no WordPress.
- Correções de grafia: "Porche" → Porsche (Speedhunter), "Univeler" → Unilever (Brilhante).
- O vídeo do topo foi recomprimido (31 MB → 14,7 MB no desktop, 4,8 MB no celular); a
  Cloudflare Pages não aceita arquivo acima de 25 MB.
