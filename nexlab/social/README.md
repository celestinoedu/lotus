# Instagram NexLab — operação editorial

Pacote de lançamento com 9 publicações para três semanas, em cadência de segunda, quarta e sexta, às 12h30 (horário de Brasília). O conteúdo foi desenhado para tornar **NexLab** uma marca lembrada entre protéticos, gerar buscas pelo nome e levar tráfego qualificado para `https://lotusnegocios.com/nexlab/`.

Perfil oficial: [@nexlab.br](https://www.instagram.com/nexlab.br/).

## Posicionamento

**Ideia central:** o NexLab organiza a rotina do laboratório sem obrigar o laboratório a abandonar seu jeito de trabalhar.

**Promessa principal:** clareza da entrada da OS ao financeiro.

**Diferencial:** configuração e suporte próximos, com até 5 solicitações de modificação por semestre, sempre sujeitas à análise de viabilidade e validação técnica.

“100% personalizável” nunca aparece sozinho. A ressalva faz parte da mensagem, não de uma letra miúda escondida.

## Pilares editoriais

1. **Rotina real (35%)** — problemas que o protético reconhece imediatamente.
2. **Educação prática (25%)** — checklists e processos aplicáveis mesmo antes da compra.
3. **Produto em contexto (25%)** — recurso ligado a um resultado operacional, sem catálogo frio.
4. **Marca e confiança (15%)** — posicionamento, suporte, personalização e convite para demonstração.

## Regras de voz e visual

- Português brasileiro direto, respeitoso e sem “tecniquês”.
- Usar “laboratório de prótese dentária”, “laboratório protético”, “protético” e “Ordem de Serviço” naturalmente.
- Não prometer economia, crescimento ou resultado sem evidência.
- Um assunto e uma ação por publicação.
- Teal como cor dominante; âmbar apenas para orientar o olhar; Inter em toda peça.
- Imagens em 1080 × 1350 px (4:5), com margem segura para a grade e leitura no celular.
- Hashtags específicas e moderadas; o nome NexLab deve estar no texto visível e na legenda.

## Arquivos

- `content-plan.json`: fonte editorial e operacional de cada publicação.
- `generate-social-assets.mjs`: gera todos os JPEGs prontos para a API do Instagram.
- `generated/`: arquivos finais, organizados por publicação e slide.

Para regenerar as peças a partir deste repositório:

```powershell
node .\nexlab\social\generate-social-assets.mjs
```

O script procura o pacote `sharp` no projeto NexLab vizinho, onde ele já é usado pelo gerador oficial da marca.

## Rotina depois do lançamento

- Responder comentários e mensagens no mesmo dia útil quando possível.
- Registrar semanalmente: alcance entre não seguidores, visitas ao perfil, cliques no link, salvamentos e compartilhamentos.
- Registrar mensalmente no Search Console as consultas contendo “NexLab”; comparar com o período anterior, sem atribuir causalidade automática ao Instagram.
- Reaproveitar dúvidas reais em novos carrosséis e artigos do site.
- Só impulsionar ou ampliar frequência depois de identificar quais temas geram salvamentos, visitas qualificadas e pedidos de apresentação.
