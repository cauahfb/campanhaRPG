export interface CatalogFilterGroup {
  filterSelector: string;
  filterAttribute: string;
  allValue: string;
  initialValue?: string;
}

export interface CatalogFilterOptions {
  searchSelector: string;
  cardSelector: string;
  filterSelector?: string;
  countSelector: string;
  emptySelector: string;
  filterAttribute?: string;
  allValue?: string;
  filterGroups?: CatalogFilterGroup[];
}


export function initCatalogFilter(options: CatalogFilterOptions): void {
  const search = document.querySelector<HTMLInputElement>(options.searchSelector);
  const cards = Array.from(document.querySelectorAll<HTMLElement>(options.cardSelector));
  const count = document.querySelector<HTMLElement>(options.countSelector);
  const empty = document.querySelector<HTMLElement>(options.emptySelector);
  if (!search || !count || !empty) return;

  const groups: CatalogFilterGroup[] = options.filterGroups ?? [{
    filterSelector: options.filterSelector ?? "",
    filterAttribute: options.filterAttribute ?? "data-category",
    allValue: options.allValue ?? "Todas",
  }];
  const states = groups.map((group) => {
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>(group.filterSelector));
    const initialValue = group.initialValue ?? group.allValue;
    const initial = buttons.find((button) =>
      (button.dataset.value ?? button.getAttribute(state.group.filterAttribute)) === initialValue,
    ) ?? buttons[0];
    return {
      group,
      buttons,
      active: initial?.dataset.value ?? initial?.getAttribute(group.filterAttribute) ?? initialValue,
    };
  });

  const update = (): void => {
    const query = search.value.trim().toLocaleLowerCase("pt-BR");
    let visible = 0;
    for (const card of cards) {
      const text = (card.dataset.search ?? card.textContent ?? "").toLocaleLowerCase("pt-BR");
      const matchesSearch = text.includes(query);
      const matchesGroups = states.every(({ group, active }) =>
        active === group.allValue || (group.filterAttribute === "data-personagens"
          ? (card.getAttribute(group.filterAttribute) ?? "").split(/\s+/).includes(active)
          : card.getAttribute(group.filterAttribute) === active),
      );
      const show = matchesSearch && matchesGroups;
      card.hidden = !show;
      card.style.display = show ? "" : "none";
      if (show) visible += 1;
    }
    count.textContent = String(visible);
    empty.hidden = visible > 0;
  };

  search.addEventListener("input", update);
  states.forEach((state) => {
    state.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        state.active = button.dataset.value ?? button.getAttribute(state.group.filterAttribute) ?? state.group.allValue;
        state.buttons.forEach((item) => {
          const selected = item === button;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-pressed", String(selected));
        });
        update();
      });
      if ((button.dataset.value ?? button.getAttribute(state.group.filterAttribute)) === state.active) {
        button.classList.add("is-active");
        button.setAttribute("aria-pressed", "true");
      } else {
        button.setAttribute("aria-pressed", "false");
      }
    });
  });
  update();
}
