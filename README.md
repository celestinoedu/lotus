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

- **E-mail:** trocar `contato@lotus.com.br` (aparece no botão e no rodapé).
- **WhatsApp:** trocar o número em `https://wa.me/5500000000000` (formato: 55 + DDD + número).
- **LinkedIn:** ajustar a URL da página da empresa.
- **Fonte Garet:** para fidelidade total, coloque `Garet-Book.woff2`, `Garet-Medium.woff2` e `Garet-Heavy.woff2` em `assets/fonts/`. Sem isso, o site usa **Sora** como fallback (carregada do Google Fonts).

## Landing NexLab (`/nexlab/`)

Página de produto co-branded Lotus + NexLab, construída com a identidade oficial do NexLab. Inclui screenshots reais do sistema, visão de produto, recursos, fluxo de implementação, qualificação de público, FAQ e formulário de apresentação.

O formulário foi reduzido aos dados essenciais para diminuir atrito: responsável, laboratório, WhatsApp, e-mail, tamanho da equipe e desafio principal opcional. O site continua estático; o envio usa o **[Web3Forms](https://web3forms.com)** via `fetch` direto do navegador.

Os arquivos exclusivos da página ficam em `nexlab/assets/`: logos, favicon, pattern, fontes Inter auto-hospedadas, imagem social e screenshots do produto.

A chave do Web3Forms já está configurada. Caso o e-mail de destino mude, gere uma nova chave no Web3Forms, atualize o campo `access_key` em `nexlab/index.html` e teste uma submissão em produção.

Identidade conforme o Brand Book da Lotus — paleta `#18365D` / `#2D6CDF` / `#111111`, tipografia Garet, logo oficial.
