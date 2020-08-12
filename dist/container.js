let xlabel = ["a", "b", "c", "d", "e", "f", "g", "h"];
let ylabel = ["1", "2", "3", "4", "5", "6", "7", "8"];
ylabel = ylabel.reverse();
export function labels() {
    let containerTop = document.querySelector(".row-1");
    let containerBottom = document.querySelector(".row-3");
    let containerLeft = document.querySelector(".col-1");
    let containerRight = document.querySelector(".col-3");
    for (let i = 0; i < 10; i++) {
        let col = document.createElement("div");
        let col2 = document.createElement("div");
        let row = document.createElement("div");
        let row2 = document.createElement("div");
        col.classList.add("col");
        col2.classList.add("col");
        row.classList.add("row");
        row2.classList.add("row");
        if (i > 0 && i < 9) {
            col.innerHTML = `${xlabel[i - 1]}`;
            col2.innerHTML = `${xlabel[i - 1]}`;
            col.classList.add("x-label");
            col2.classList.add("x-label");
        }
        else {
            col.classList.add("col-empty");
            col2.classList.add("col-empty");
        }
        if (i < 8) {
            row.innerHTML = `${ylabel[i]}`;
            row.classList.add("y-label");
            row2.innerHTML = `${ylabel[i]}`;
            row2.classList.add("y-label");
        }
        containerTop?.appendChild(col);
        containerBottom?.appendChild(col2);
        containerLeft?.appendChild(row);
        containerRight?.appendChild(row2);
    }
}
