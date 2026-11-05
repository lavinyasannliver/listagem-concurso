/**
 * Classificação por cargo — dados carregados do CSV local.
 * Para abrir a página, utilize Live Server no VS Code ou hospede no GitHub Pages.
 */
const CSV_PATH = "dados/candidatos.csv";

const elements = {
  cargo: document.querySelector("#cargo"),
  search: document.querySelector("#q"),
  title: document.querySelector("#title"),
  count: document.querySelector("#count"),
  active: document.querySelector("#active"),
  absent: document.querySelector("#absent"),
  shown: document.querySelector("#shown"),
  tbody: document.querySelector("#tbody"),
};

let candidates = [];

/** Parse CSV fields, including quoted values and escaped quotes. */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value.length || row.length) {
    row.push(value);
    rows.push(row);
  }

  const [headers, ...records] = rows;
  return records.map((record) => Object.fromEntries(
    headers.map((header, index) => [header.replace(/^\uFEFF/, ""), record[index] ?? ""]),
  ));
}

function toNumber(value) {
  if (value === "" || value === "null" || value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeCandidate(record) {
  return {
    ...record,
    port: toNumber(record.port),
    leg: toNumber(record.leg),
    ger: toNumber(record.ger),
    esp: toNumber(record.esp),
    total: toNumber(record.total),
    pos: toNumber(record.pos),
    pendente: record.pendente === "True" || record.pendente === "true",
  };
}

function normalizeText(value) {
  return String(value ?? "")
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHTML(value) {
  return String(value ?? "—").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function fillCargoOptions() {
  const cargoCounts = new Map();
  candidates.forEach(({ cargo }) => cargoCounts.set(cargo, (cargoCounts.get(cargo) || 0) + 1));

  [...cargoCounts.entries()].sort(([first], [second]) => first.localeCompare(second, "pt-BR", { numeric: true }))
    .forEach(([cargo, count]) => {
      const option = document.createElement("option");
      option.value = cargo;
      option.textContent = `${cargo} (${count})`;
      elements.cargo.append(option);
    });
}

function renderTable(records) {
  if (!records.length) {
    elements.tbody.innerHTML = '<tr><td colspan="9">Nenhum candidato encontrado.</td></tr>';
    return;
  }

  elements.tbody.innerHTML = records.map((candidate) => {
    const topClass = candidate.pos && candidate.pos <= 10 ? "top" : "";
    const tieLabel = candidate.pendente ? ' <span class="tag">desempate pendente</span>' : "";
    const total = candidate.total == null
      ? '<span class="abs">AUSENTE</span>'
      : escapeHTML(candidate.total);

    return `
      <tr class="${topClass}">
        <td><b>${candidate.pos ?? "—"}</b></td>
        <td class="name">${escapeHTML(candidate.nome)}${tieLabel}</td>
        <td>${escapeHTML(candidate.id)}</td>
        <td>${escapeHTML(candidate.nasc)}</td>
        <td>${candidate.port ?? "—"}</td>
        <td>${candidate.leg ?? "—"}</td>
        <td>${candidate.ger ?? "—"}</td>
        <td>${candidate.esp ?? "—"}</td>
        <td class="score">${total}</td>
      </tr>`;
  }).join("");
}

function updateView() {
  const selectedCargo = elements.cargo.value;
  const query = normalizeText(elements.search.value.trim());
  const cargoCandidates = candidates.filter(({ cargo }) => cargo === selectedCargo);
  const withScore = cargoCandidates.filter(({ total }) => total != null).length;
  const absent = cargoCandidates.length - withScore;
  const visible = cargoCandidates.filter(({ nome, id }) =>
    normalizeText(`${nome} ${id}`).includes(query));

  elements.title.textContent = selectedCargo || "Selecione um cargo";
  elements.count.textContent = cargoCandidates.length;
  elements.active.textContent = withScore;
  elements.absent.textContent = absent;
  elements.shown.textContent = visible.length;
  renderTable(visible);
}

async function initialize() {
  try {
    const response = await fetch(CSV_PATH);
    if (!response.ok) throw new Error(`Falha ao carregar CSV: ${response.status}`);

    const csvText = await response.text();
    candidates = parseCSV(csvText).map(normalizeCandidate);
    fillCargoOptions();
    updateView();

    elements.cargo.addEventListener("change", updateView);
    elements.search.addEventListener("input", updateView);
  } catch (error) {
    console.error(error);
    elements.tbody.innerHTML = `
      <tr><td colspan="9">
        Não foi possível carregar os dados. Abra o projeto com Live Server
        ou por um servidor local; o carregamento de CSV pode ser bloqueado
        quando a página é aberta diretamente como arquivo.
      </td></tr>`;
  }
}

initialize();
