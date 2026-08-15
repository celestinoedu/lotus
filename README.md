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

## Seção NexLab + formulário de lead (`#nexlab` / `#nexlab-form`)

Apresenta o produto NexLab (o que é, diferenciais, tecnologia embarcada) e um formulário que qualifica o lead (responsável, laboratório, CNPJ/CPF, tamanho, faturamento, redes sociais) antes de avaliar a implementação. Site é estático (sem backend, mesma filosofia do NexLab) — o envio do formulário usa o **[Web3Forms](https://web3forms.com)** (camada gratuita permanente, 250 envios/mês), via `fetch` direto do navegador, sem servidor próprio.

**Antes de publicar, é obrigatório configurar a chave de acesso:**
1. Acesse [web3forms.com](https://web3forms.com), informe o e-mail `lotus@lotusnegocios.com` e gere a **Access Key** (chega por e-mail, sem precisar de conta/senha).
2. Em `index.html`, procure `COLE-SUA-ACCESS-KEY-DO-WEB3FORMS-AQUI` (dentro do `<form id="form-nexlab">`) e substitua pela chave gerada.
3. Teste enviando o formulário uma vez em produção — a primeira submissão pede uma confirmação simples do Web3Forms.

Sem isso, o formulário aparece normal na tela mas a submissão falha (mostra a mensagem de erro embutida, com o link do WhatsApp como alternativa).

Identidade conforme o Brand Book da Lotus — paleta `#18365D` / `#2D6CDF` / `#111111`, tipografia Garet, logo oficial.
