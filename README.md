# Classificações — Tombos/MG (2026)

Projeto de consulta das classificações por cargo do Concurso Público (Edital nº 01/2026) e do Processo Seletivo Público (Edital nº 02/2026).

## Estrutura

```text
Projeto_Classificacao_Tombos/
├── index.html                         # Página inicial
├── README.md
├── concurso/
│   ├── index.html                     # Estrutura da página
│   ├── style.css                      # Estilos (visual preservado)
│   ├── script.js                      # Filtro e renderização
│   └── dados/candidatos.csv            # Dados usados na consulta
├── processo-seletivo/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── dados/candidatos.csv
└── documentos/
    ├── editais/                       # Editais retificados
    └── resultados/                    # Resultados e CSV de referência
```

## Como executar no VS Code

1. Extraia ou abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server** (Ritwick Dey), caso ainda não tenha.
3. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.
4. Escolha Concurso Público ou Processo Seletivo na página inicial.

O sistema carrega os dados CSV via `fetch`. Por segurança do navegador, a consulta de CSV pode não funcionar ao abrir o HTML diretamente com `file://`; use Live Server ou outro servidor local.

## Publicação no GitHub Pages

Envie a pasta para um repositório GitHub. Em **Settings → Pages**, escolha a branch e a pasta raiz (`/`) como origem. O arquivo `index.html` da raiz será a página inicial. Os caminhos são relativos e funcionam no GitHub Pages.

## Dados e critérios

Os CSVs de cada interface são os dados incorporados às duas páginas HTML aprovadas para esta versão, extraídos para arquivos separados para facilitar manutenção. Os PDFs de referência estão em `documentos/`. As classificações são informativas e provisórias; não substituem publicações oficiais. Critérios que dependem de comprovação ou etapas posteriores podem alterar a ordem.

## Manutenção

- Para corrigir ou atualizar registros, edite o CSV correspondente.
- Para alterar cores, espaçamento ou tipografia, edite o `style.css` da respectiva pasta.
- Para alterar pesquisa, seleção de cargo ou apresentação dos dados, edite o `script.js`.
- Mantenha os cabeçalhos do CSV consistentes com os campos usados no JavaScript.

## Tecnologias

HTML5, CSS3, JavaScript (sem bibliotecas externas) e CSV.
