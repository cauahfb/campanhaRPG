import { isNavigableCity, normalizeName, TORIL_CITIES, type TorilCity } from "../data/toril";

const walkingPaces = [
  { name: "Passo lento", note: "Furtivo", speed: 3.2 },
  { name: "Passo normal", note: "", speed: 4.8 },
  { name: "Passo rápido", note: "−5 Percepção passiva", speed: 6.4 },
] as const;

const shipOptions = [
  { name: "Veleiro", speed: 3.2 },
  { name: "Navio de guerra", speed: 4 },
  { name: "Drácar", speed: 4.8 },
  { name: "Galé", speed: 6.4 },
] as const;

const formatNumber = (value: number) =>
  String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const formatDuration = (hours: number, hoursPerDay: number) => {
  let days = Math.floor(hours / hoursPerDay);
  let remainingHours = Math.round(hours - days * hoursPerDay);
  if (remainingHours >= hoursPerDay) {
    days += 1;
    remainingHours = 0;
  }
  return { days, remainingHours };
};

const setupCombobox = (inputId: string, listId: string) => {
  const input = document.getElementById(inputId) as HTMLInputElement;
  const list = document.getElementById(listId) as HTMLElement;
  let selected: TorilCity | null = null;

  const showMatches = () => {
    const query = normalizeName(input.value);
    list.replaceChildren();
    TORIL_CITIES
      .filter((city) => normalizeName(city.name).includes(query))
      .slice(0, 40)
      .forEach((city) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "distance-combobox__option";
        option.innerHTML = `<strong>${city.name}${city.precise ? "" : " ~"}</strong><small>${city.region}</small>`;
        option.addEventListener("mousedown", (event) => {
          event.preventDefault();
          selected = city;
          input.value = city.name;
          list.replaceChildren();
          calculate();
        });
        list.append(option);
      });
  };

  input.addEventListener("input", () => {
    selected = null;
    showMatches();
    calculate();
  });
  input.addEventListener("focus", showMatches);
  input.addEventListener("blur", () => window.setTimeout(() => list.replaceChildren(), 150));

  return () =>
    selected ??
    TORIL_CITIES.find((city) => normalizeName(city.name) === normalizeName(input.value)) ??
    null;
};

const getOrigin = setupCombobox("distance-origin", "distance-origin-list");
const getDestination = setupCombobox("distance-destination", "distance-destination-list");

const output = document.getElementById("distance-output") as HTMLElement;
const routeInput = document.getElementById("distance-route") as HTMLSelectElement;
const hoursInput = document.getElementById("distance-hours") as HTMLInputElement;
const terrainInput = document.getElementById("distance-terrain") as HTMLSelectElement;
const flightCheckbox = document.getElementById("distance-flight") as HTMLInputElement;
const flightWrap = document.getElementById("distance-flight-wrap") as HTMLElement;
const flightInput = document.getElementById("distance-flight-speed") as HTMLSelectElement;
const felypoCheckbox = document.getElementById("distance-felypo") as HTMLInputElement;
const FELYPO_SPEED_FEET = 55; // 16,5 m
const BASE_WALK_FEET = 30; // passo normal padrão: 9 m = 4,8 km/h
const shipWrap = document.getElementById("distance-ship-wrap") as HTMLElement;
const shipInput = document.getElementById("distance-ship") as HTMLSelectElement;

function durationRow(name: string, note: string, distance: number, speed: number, hoursPerDay: number) {
  const totalHours = distance / speed;
  const duration = formatDuration(totalHours, hoursPerDay);
  return `<tr><td>${name}${note ? ` <small>${note}</small>` : ""}</td><td class="distance-table__number">${formatNumber(duration.days)} d</td><td class="distance-table__number">${duration.remainingHours} h</td><td class="distance-table__number">${formatNumber(totalHours)} h</td></tr>`;
}

const tableHeader = `<thead><tr><th></th><th>Dias</th><th>+ Horas</th><th>Total</th></tr></thead>`;

function calculate() {
  const origin = getOrigin();
  const destination = getDestination();

  if (!origin || !destination) {
    output.innerHTML = `<p class="distance-empty">Selecione origem e destino para calcular a viagem.</p>`;
    shipWrap.hidden = true;
    return;
  }

  const routeFactor = Number(routeInput.value);
  const hoursPerDay = Number(hoursInput.value);
  const terrainFactor = Number(terrainInput.value);
  const directDistance = Math.hypot(origin.x - destination.x, origin.y - destination.y);
  const estimatedDistance = directDistance * routeFactor;
  const floating = origin.terrain === "V" || destination.terrain === "V";
  const terrestrial = !floating && origin.terrain === destination.terrain;
  const canNavigate = terrestrial && isNavigableCity(origin) && isNavigableCity(destination);

  shipWrap.hidden = !canNavigate;
  let html = `
    <h2>${origin.name} <span>→</span> ${destination.name}</h2>
    <div class="distance-stats">
      <div><small>Linha reta</small><strong>${formatNumber(directDistance)}</strong><span>km</span></div>
      <div><small>Percurso estimado ×${routeInput.value.replace(".", ",")}</small><strong>${formatNumber(estimatedDistance)}</strong><span>km</span></div>
    </div>`;

  if (!origin.precise || !destination.precise) {
    html += `<p class="distance-warning">Posição estimada (precisão baixa): ${[
      !origin.precise && origin.name,
      !destination.precise && destination.name,
    ].filter(Boolean).join(" e ")}.</p>`;
  }
  if (hoursPerDay > 8) {
    html += `<p class="distance-warning">Mais de 8 h/dia é marcha forçada: teste de CON (CD 10 + 1 por hora extra) ou 1 nível de exaustão.</p>`;
  }

  const felypo = felypoCheckbox.checked;
  const walkScale = felypo ? FELYPO_SPEED_FEET / BASE_WALK_FEET : 1;
  html += `<section class="distance-mode"><h3><span aria-hidden="true">◆</span> A pé${felypo ? " <small>Felypo · 16,5 m · 55 pés</small>" : ""}</h3>`;
  if (terrestrial) {
    html += `<table>${tableHeader}<tbody>${walkingPaces
      .map((pace) => durationRow(pace.name, pace.note, estimatedDistance, pace.speed * walkScale * terrainFactor, hoursPerDay))
      .join("")}</tbody></table>`;
  } else {
    html += `<p class="distance-unavailable">${floating ? "Impossível: cidade flutuante." : "Impossível: há oceano entre os dois pontos."}</p>`;
  }
  html += `</section>`;

  if (flightCheckbox.checked) {
    const selected = felypo ? "Felypo · 16,5 m · 55 pés" : flightInput.selectedOptions[0]?.text ?? "";
    const flightSpeed = (felypo ? FELYPO_SPEED_FEET : Number(flightInput.value)) * 0.1609;
    html += `<section class="distance-mode"><h3><span aria-hidden="true">✦</span> Voando <small>${selected}</small></h3>`;
    html += `<table>${tableHeader}<tbody>${durationRow("Voo contínuo", "", estimatedDistance, flightSpeed, hoursPerDay)}</tbody></table>`;
    if (!terrestrial) {
      html += `<p class="distance-warning">Travessia longa sobre o mar: criaturas voadoras precisam de pouso para descansar.</p>`;
    }
    html += `</section>`;
  } else if (floating) {
    html += `<p class="distance-warning">Marque <strong>Considerar voo</strong> para ver o tempo até Villegdar.</p>`;
  }

  if (floating) {
    html += `<p class="distance-warning">Villegdar flutua sobre o mar: só se chega por voo ou magia, como teletransporte. Navios não chegam.</p>`;
  } else if (canNavigate) {
    const ship = shipOptions[shipInput.selectedIndex] ?? shipOptions[2];
    html += `<section class="distance-mode"><h3><span aria-hidden="true">◈</span> De navio <small>${ship.name}, 24 h/dia</small></h3>`;
    html += `<table>${tableHeader}<tbody>${durationRow("Navegação", "", estimatedDistance * .95, ship.speed * 1.609, 24)}</tbody></table>`;
  } else if (!terrestrial) {
    html += `<p class="distance-warning">Navio indisponível: uma das cidades não é costeira ou navegável. Use um porto próximo como base.</p>`;
  }

  output.innerHTML = html;
}

felypoCheckbox.addEventListener("change", () => {
  flightInput.disabled = felypoCheckbox.checked;
  calculate();
});

flightCheckbox.addEventListener("change", () => {
  flightWrap.hidden = !flightCheckbox.checked;
  calculate();
});

[routeInput, hoursInput, terrainInput, flightInput, shipInput].forEach((control) =>
  control.addEventListener("change", calculate),
);

calculate();
