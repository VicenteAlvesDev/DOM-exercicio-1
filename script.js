
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

let cursos = [...document.querySelectorAll(".curso")];
let btn = document.querySelector("#btn");

// Adiciona clique a cada curso para marcar/desmarcar como selecionado
cursos.map((item) => {
    item.addEventListener("click", (event) => {
        const curso = event.target;
        curso.classList.toggle("selected") // Alterna a seleção
    })
})

// Ao clicar no botão, move os cursos selecionados para box2 e os outros para box1
btn.addEventListener("click", () => {
    const selecionados = [...document.querySelectorAll(".selected")];
    const naoSelecionados = [...document.querySelectorAll(".curso:not(.selected)")];

    // Move os selecionados para box2
    selecionados.map((item) => {
        box2.appendChild(item);
    })

    // Move os não selecionados para box1
    naoSelecionados.map((item) => {
        box1.appendChild(item);
    })
})