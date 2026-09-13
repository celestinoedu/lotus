# Lotus — Landing Page

Site institucional da **Lotus**, consultoria de sistemas, processos e IA para pequenas e médias empresas.

> **Do caos à clareza.**

Página única, estática e responsiva, com os 6 serviços da Lotus:

1. Desenvolvimento de Sistemas Low-Code
2. Consultoria e Treinamentos em Melhoria Contínua
3. Serviços de Infraestrutura de Redes
4. Automação RPA
5. Infraestrutura de Dados
6. Branding, Marketing e Publicidade

A página institucional também possui a seção **Conheça nossos aplicativos**, que apresenta os produtos próprios da Lotus e direciona para suas páginas dedicadas: **NexLab** (laboratórios de prótese dentária) e **NexWash** (lava-rápidos e estética automotiva).

## Estrutura

```
.
├── index.html          # a página
└── assets/
    ├── lotus-symbol-black.png
    ├── lotus-symbol-white.png
    ├── lotus-master-black.png
    └── fonts/           # (opcional) Garet-Book/Medium/Heavy.woff2
```

## Publicar no GitHub Pages

1. Faça push do conteúdo desta pasta para o repositório.
2. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, selecione **`main`** e pasta **`/ (root)`**, salve.
3. Em ~1 minuto o site fica disponível em `https://celestinoedu.github.io/lotus/`.

## Personalizar antes de divulgar

- **E-mail oficial:** `lotus@lotusnegocios.com` (usado no botão e no rodapé).
- **WhatsApp:** trocar o número em `https://wa.me/5500000000000` (formato: 55 + DDD + número).
- **LinkedIn:** ajustar a URL da página da empresa.
- **Fonte Garet:** para fidelidade total, coloque `Garet-Book.woff2`, `Garet-Medium.woff2` e `Garet-Heavy.woff2` em `assets/fonts/`. Sem isso, o site usa **Sora** como fallback (carregada do Google Fonts).

## Landing NexLab (`/nexlab/`)

Página de produto co-branded Lotus + NexLab, construída com a identidade oficial do NexLab. Inclui screenshots reais do sistema, visão de produto, recursos, fluxo de implementação, qualificação de público, FAQ e formulário de apresentação.

O formulário foi reduzido aos dados essenciais para diminuir atrito: responsável, laboratório, WhatsApp, e-mail, tamanho da equipe e desafio principal opcional. O site continua estático; o envio usa o **[Web3Forms](https://web3forms.com)** via `fetch` direto do navegador.

Os arquivos exclusivos da página ficam em `nexlab/assets/`: logos, favicon, pattern, fontes Inter auto-hospedadas, imagem social e screenshots desktop/mobile do produto. A landing troca a apresentação automaticamente conforme o tamanho da tela, sem reduzir uma captura desktop para caber no celular.

A seção `nexlab/social/` contém a estratégia editorial do Instagram, calendário de lançamento, legendas e o gerador das peças 4:5. Os JPEGs públicos em `nexlab/social/generated/` também são a origem de mídia usada pela automação no Supabase.

A chave do Web3Forms já está configurada. Caso o e-mail de destino mude, gere uma nova chave no Web3Forms, atualize o campo `access_key` em `nexlab/index.html` e teste uma submissão em produção.

## Landing NexWash (`/nexwash/`)

Página de produto co-branded Lotus + NexWash, com a mesma estrutura da landing do NexLab e a identidade visual do NexWash — paleta azul `#082F49` / `#0369A1` / `#075985` com acento ciano `#22D3EE`, tipografia Inter.

As capturas em `nexwash/assets/` saíram do próprio sistema rodando em modo prévia, que usa dados fictícios (`src/lib/demo-rows.ts` no repositório do NexWash). Para atualizá-las: `npm run preview` no NexWash e capture `/app/dashboard/` e `/app/orders/` em 1440x900 e 390x844.

O formulário usa o mesmo **Web3Forms** da landing do NexLab, com a mesma `access_key` e assunto próprio (`Novo lead NexWash`). Se quiser separar os destinos, gere uma chave nova e troque o campo `access_key` em `nexwash/index.html`.

Preços publicados: regular R$ 199,00/mês; lançamento R$ 99,90/mês no mensal e R$ 79,90/mês no anual (pagamento único de R$ 958,80). A página não tem contagem regressiva porque a campanha do NexWash ainda não tem data de término definida.

Identidade conforme o Brand Book da Lotus — paleta `#18365D` / `#2D6CDF` / `#111111`, tipografia Garet, logo oficial.
