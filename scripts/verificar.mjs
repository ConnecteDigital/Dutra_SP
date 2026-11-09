// Confere o site gerado (dist/) contra os requisitos de rastreamento.
// Uso: npm run build && npm run verificar
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

// Dados deste site e do site "irmão" (que NÃO pode aparecer aqui)
const GTM = 'GTM-P8M6GGLD';
const FONE = '5511927483974';
const GTM_OUTRO = 'GTM-NKTZBFPR';
const FONE_OUTRO = '5519991709018';

async function listar(dir) {
  const itens = await readdir(dir, { withFileTypes: true });
  const arquivos = await Promise.all(
    itens.map((i) => (i.isDirectory() ? listar(path.join(dir, i.name)) : [path.join(dir, i.name)])),
  );
  return arquivos.flat();
}

const conta = (texto, re) => (texto.match(re) ?? []).length;
const erros = [];
const paginas = (await listar('dist')).filter((f) => f.endsWith('.html'));
const todos = (await listar('dist')).filter((f) => /\.(html|js|css|xml|txt|json)$/.test(f));
let linksWa = 0;
let linksTel = 0;

for (const arq of todos) {
  const t = await readFile(arq, 'utf8');
  if (t.includes(GTM_OUTRO)) erros.push(`${arq}: contém o GTM do outro site`);
  if (t.includes(FONE_OUTRO)) erros.push(`${arq}: contém o telefone do outro site`);
  if (/gtag\/js|gtag\(|\bAW-\d|\bGT-[A-Z0-9]/.test(t)) erros.push(`${arq}: contém gtag/js, gtag(, AW- ou GT-`);
  if (/wa\.me|window\.open|whatsapp:\/\//.test(t)) erros.push(`${arq}: usa wa.me, window.open ou whatsapp://`);
}

for (const arq of paginas) {
  const html = await readFile(arq, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  const body = html.slice(html.indexOf('</head>'));
  if (conta(html, new RegExp(GTM, 'g')) !== 2) erros.push(`${arq}: ${GTM} deveria aparecer exatamente 2 vezes`);
  if (conta(head, /googletagmanager\.com\/gtm\.js/g) !== 1) erros.push(`${arq}: script do GTM ausente ou repetido no <head>`);
  if (conta(body, /googletagmanager\.com\/ns\.html/g) !== 1) erros.push(`${arq}: noscript do GTM ausente ou repetido no <body>`);
  if (!/<body[^>]*>\s*(<!--[^>]*-->\s*)?<noscript><iframe src="https:\/\/www\.googletagmanager\.com\/ns\.html/.test(html))
    erros.push(`${arq}: o noscript do GTM não está logo após a abertura do <body>`);

  for (const m of html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>/g)) {
    const [tag, href] = m;
    if (/whatsapp/i.test(href)) {
      linksWa++;
      if (!href.startsWith(`https://api.whatsapp.com/send?phone=${FONE}&amp;text=`) && !href.startsWith(`https://api.whatsapp.com/send?phone=${FONE}&text=`))
        erros.push(`${arq}: link de WhatsApp fora do padrão: ${href}`);
      if (!/target="_blank"/.test(tag) || !/rel="noopener"/.test(tag)) erros.push(`${arq}: link de WhatsApp sem target/rel`);
      if (/onclick/i.test(tag)) erros.push(`${arq}: link de WhatsApp com onclick`);
    }
    if (href.startsWith('tel:')) {
      linksTel++;
      if (href !== `tel:+${FONE}`) erros.push(`${arq}: telefone diferente: ${href}`);
    }
  }
  for (const m of html.matchAll(/55\d{10,11}/g)) if (m[0] !== FONE) erros.push(`${arq}: número desconhecido ${m[0]}`);
}

console.log(`${paginas.length} páginas, ${linksWa} links de WhatsApp, ${linksTel} links de telefone conferidos.`);
if (erros.length) {
  console.error(`\n${erros.length} problema(s):\n` + erros.slice(0, 40).join('\n'));
  process.exit(1);
}
console.log(`OK: ${GTM} uma vez no <head> e uma no <noscript> em todas as páginas; todos os contatos são ${FONE}.`);
