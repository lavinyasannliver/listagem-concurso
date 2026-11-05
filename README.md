 <div align="center">

# 📊 Classificações de Tombos — MG

### Consulta de candidatos por cargo | Concurso Público e Processo Seletivo — 2026

Uma página web simples e organizada para consultar as listas de classificação dos processos seletivos do município de **Tombos, Minas Gerais**.

</div>

---

## ✨ Sobre o projeto

O **Classificações de Tombos** foi desenvolvido para facilitar a consulta dos resultados publicados para o Concurso Público e para o Processo Seletivo Público de 2026.

Em vez de procurar manualmente em documentos extensos, a pessoa usuária pode acessar a página correspondente e visualizar os candidatos organizados por cargo.

O projeto reúne duas áreas de consulta:

- **Concurso Público — Edital nº 01/2026**
- **Processo Seletivo Público — Edital nº 02/2026**

> **Importante:** esta ferramenta é de caráter informativo. Confira sempre os editais, retificações e publicações oficiais. A classificação exibida pode ser preliminar e não representa, por si só, uma confirmação oficial de convocação ou nomeação.

## 🧭 Funcionalidades

- Consulta separada entre concurso e processo seletivo.
- Seleção de cargo para visualizar a lista correspondente.
- Pesquisa de candidatos para facilitar a localização de nomes.
- Exibição dos dados em tabela organizada.
- Dados armazenados em arquivos CSV, facilitando futuras atualizações.
- Interface web acessível pelo navegador.

## 🖥️ Como executar localmente

Como as páginas carregam os dados dos arquivos CSV, é necessário abrir o projeto por meio de um servidor local — não diretamente pelo caminho `file://`.

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no **Visual Studio Code**.
3. Instale a extensão **Live Server**, caso ainda não esteja instalada.
4. Abra o arquivo `index.html` que fica na raiz do projeto.
5. Clique com o botão direito e selecione **Open with Live Server**.
6. Na página inicial, escolha **Concurso Público** ou **Processo Seletivo**.

## 📁 Organização dos arquivos

```text
Projeto_Classificacao_Tombos/
├── index.html
├── README.md
├── concurso/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── dados/
│       └── candidatos.csv
├── processo-seletivo/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── dados/
│       └── candidatos.csv
└── documentos/
    ├── editais/
    └── resultados/
```

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura das páginas.
- **CSS3** — identidade visual e layout responsivo.
- **JavaScript** — interação, filtros e carregamento dos dados.
- **CSV** — armazenamento dos registros de candidatos.

O projeto foi construído sem frameworks, utilizando tecnologias web básicas.

## 🔄 Como atualizar os dados

1. Abra o arquivo `candidatos.csv` da área que deseja atualizar.
2. Edite ou acrescente os registros mantendo o formato e os cabeçalhos existentes.
3. Salve o arquivo e atualize a página no navegador.

Para personalizar a aparência, altere o `style.css` da pasta correspondente. Para ajustar os filtros ou a forma de exibição, edite o `script.js`.

## 🌐 Publicação no GitHub Pages

É possível publicar o projeto como um site estático:

1. Envie os arquivos para um repositório no GitHub.
2. Acesse **Settings → Pages**.
3. Em *Build and deployment*, selecione a branch desejada e a pasta raiz (`/`).
4. Salve e aguarde a publicação do site.

A página `index.html` da raiz funciona como entrada para as duas áreas de consulta.

## 👩‍💻 Autoria

<div align="center">

**Lavinya Sannliver**  
Criadora do projeto

</div>

---

<div align="center">

Feito para tornar a consulta das classificações mais prática e organizada.

</div>