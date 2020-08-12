export function labels() {
  let containerTop: Element | null = document.querySelector(".row-1");
  let containerBottom: Element | null = document.querySelector(".row-3");
  for (let i = 0; i < 10; i++) {
    let col = document.createElement("div");
    col.classList.add("col");
    if (i > 0 && i < 9) {
      col.innerHTML = "s";
      col.classList.add("x-label");
    } else {
      col.classList.add("col-empty");
    }

    containerTop?.appendChild(col);
  }
}
