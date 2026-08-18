import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const sharpPath = join(here, '..', '..', '..', '..', 'NexLab', 'node_modules', 'sharp', 'lib', 'index.js')
const { default: sharp } = await import(pathToFileURL(sharpPath).href)

const plan = JSON.parse(await readFile(join(here, 'content-plan.json'), 'utf8'))
const output = join(here, 'generated')
const logoPrimary = (await readFile(join(here, '..', 'assets', 'logo-nexlab-primary.svg'))).toString('base64')
const logoReverse = (await readFile(join(here, '..', 'assets', 'logo-nexlab-reverse.svg'))).toString('base64')
const font = (await readFile(join(here, '..', 'assets', 'fonts', 'inter-latin-wght-normal.woff2'))).toString('base64')

await mkdir(output, { recursive: true })

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

function wrap(text, max = 25) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    if (`${line} ${word}`.trim().length > max && line) {
      lines.push(line)
      line = word
    } else {
      line = `${line} ${word}`.trim()
    }
  }
  if (line) lines.push(line)
  return lines.slice(0, 5)
}

function textLines(lines, x, y, fontSize, lineHeight, fill, weight = 760) {
  return lines.map((line, index) => `<text x="${x}" y="${y + index * lineHeight}" class="copy" font-size="${fontSize}" font-weight="${weight}" fill="${fill}">${escapeXml(line)}</text>`).join('')
}

async function productImage(slug) {
  const file = slug.includes('financeiro') ? 'nexlab-dashboard.png' : 'nexlab-ordens.png'
  const data = await readFile(join(here, '..', 'assets', file))
  return `data:image/png;base64,${data.toString('base64')}`
}

async function render(post, slide, slideIndex) {
  const isDark = slide.theme === 'dark' || slide.theme === 'product'
  const isAmber = slide.theme === 'amber'
  const bg = isDark ? '#0A403F' : isAmber ? '#FFF7EB' : '#F5F7F8'
  const ink = isDark ? '#FFFFFF' : '#172033'
  const muted = isDark ? '#A7E7E3' : '#667085'
  const accent = isAmber ? '#EE9524' : '#71D3CE'
  const logo = isDark ? logoReverse : logoPrimary
  const title = wrap(slide.title, slide.theme === 'product' ? 30 : 24)
  const body = wrap(slide.body, 48)
  const page = post.slides.length > 1 ? `${String(slideIndex + 1).padStart(2, '0')} / ${String(post.slides.length).padStart(2, '0')}` : 'NEXLAB'
  const screenshot = slide.theme === 'product' ? await productImage(post.slug) : null

  const productBlock = screenshot ? `
    <g transform="translate(90 690)">
      <rect width="900" height="488" rx="28" fill="#fff" opacity=".98"/>
      <rect width="900" height="52" rx="28" fill="#EEF2F3"/>
      <rect y="28" width="900" height="24" fill="#EEF2F3"/>
      <circle cx="28" cy="26" r="7" fill="#EE9524"/><circle cx="52" cy="26" r="7" fill="#71D3CE"/><circle cx="76" cy="26" r="7" fill="#D0D5DD"/>
      <clipPath id="screen"><rect y="52" width="900" height="436" rx="0 0 28 28"/></clipPath>
      <image href="${screenshot}" x="0" y="52" width="900" height="562" preserveAspectRatio="xMidYMin slice" clip-path="url(#screen)"/>
    </g>` : `
    <g opacity="${isDark ? '.12' : '.1'}">
      <circle cx="930" cy="1020" r="360" fill="none" stroke="${accent}" stroke-width="2"/>
      <circle cx="930" cy="1020" r="250" fill="none" stroke="${accent}" stroke-width="2"/>
      <path d="M760 1100 870 990 930 1050 1060 900" fill="none" stroke="${accent}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <rect x="90" y="1040" width="130" height="10" rx="5" fill="#EE9524"/>
    <rect x="90" y="1070" width="82" height="10" rx="5" fill="#71D3CE"/>`

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
    <style>
      @font-face{font-family:Inter;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
      .copy{font-family:Inter,Arial,sans-serif;letter-spacing:-1.5px}.label{font-family:Inter,Arial,sans-serif;letter-spacing:2.4px}
    </style>
    <rect width="1080" height="1350" fill="${bg}"/>
    <rect x="0" y="0" width="16" height="1350" fill="#EE9524"/>
    <circle cx="1000" cy="72" r="190" fill="${accent}" opacity="${isDark ? '.08' : '.16'}"/>
    <image href="data:image/svg+xml;base64,${logo}" x="90" y="72" width="210" height="62" preserveAspectRatio="xMinYMid meet"/>
    <text x="990" y="110" text-anchor="end" class="label" font-size="18" font-weight="760" fill="${muted}">${page}</text>
    <rect x="90" y="230" width="58" height="7" rx="4" fill="#EE9524"/>
    <text x="90" y="290" class="label" font-size="20" font-weight="800" fill="${isDark ? '#71D3CE' : '#0E7C79'}">${escapeXml(slide.eyebrow)}</text>
    ${textLines(title, 90, 400, slide.theme === 'product' ? 62 : 72, slide.theme === 'product' ? 68 : 78, ink, 790)}
    ${textLines(body, 92, 400 + title.length * (slide.theme === 'product' ? 68 : 78) + 48, 28, 40, muted, 470)}
    ${productBlock}
    <text x="90" y="1280" class="label" font-size="17" font-weight="720" fill="${muted}">LOTUSNEGOCIOS.COM/NEXLAB</text>
    <circle cx="962" cy="1274" r="8" fill="#EE9524"/><circle cx="990" cy="1274" r="8" fill="#71D3CE"/>
  </svg>`

  const filename = `${post.slug}-${String(slideIndex + 1).padStart(2, '0')}.jpg`
  await sharp(Buffer.from(svg)).jpeg({ quality: 92, chromaSubsampling: '4:4:4' }).toFile(join(output, filename))
  return filename
}

const manifest = []
for (const post of plan) {
  const files = []
  for (let index = 0; index < post.slides.length; index += 1) {
    files.push(await render(post, post.slides[index], index))
  }
  manifest.push({
    slug: post.slug,
    scheduledAt: post.scheduledAt,
    format: files.length > 1 ? 'carousel' : 'image',
    caption: post.caption,
    files,
  })
}

await writeFile(join(output, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
const sqlQuote = (value) => `'${value.replaceAll("'", "''")}'`
const publicBase = 'https://lotusnegocios.com/nexlab/social/generated'
const seedRows = manifest.map((item) => {
  const post = plan.find((candidate) => candidate.slug === item.slug)
  const urls = item.files.map((file) => sqlQuote(`${publicBase}/${file}`)).join(', ')
  const altText = post.slides.length === 1
    ? `${post.slides[0].title} ${post.slides[0].body}`
    : `Carrossel NexLab: ${post.slides[0].title}`
  return `  (${sqlQuote(item.slug)}, ${sqlQuote(item.caption)}, ${sqlQuote(altText)}, ${sqlQuote(item.format)}, array[${urls}]::text[], ${sqlQuote(item.scheduledAt)}::timestamptz, 'scheduled')`
}).join(',\n')
const seedSql = `-- Gerado por nexlab/social/generate-social-assets.mjs.\n-- Horários em UTC; 15:30Z corresponde a 12h30 em Brasília nesta campanha.\n\ninsert into instagram_publicacoes\n  (slug, caption, alt_text, media_type, media_urls, scheduled_at, status)\nvalues\n${seedRows}\non conflict (slug) do update set\n  caption = excluded.caption,\n  alt_text = excluded.alt_text,\n  media_type = excluded.media_type,\n  media_urls = excluded.media_urls,\n  scheduled_at = excluded.scheduled_at,\n  status = excluded.status\nwhere instagram_publicacoes.status <> 'published';\n`
await writeFile(join(output, 'instagram-seed.sql'), seedSql)
console.log(`Generated ${manifest.reduce((total, item) => total + item.files.length, 0)} Instagram assets in ${output}`)
