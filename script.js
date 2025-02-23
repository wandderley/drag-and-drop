const columns = document.querySelectorAll(".column_cards");
const cards = document.querySelectorAll(".card");

let draggedCard = null;


// Função Cards
const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = "move"
};

// Função coluna
const dragOver = (event) => {
    event.preventDefault();
};





// Evento de capura para os cards
cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
});

// Evento de capura para as colunas
columns.forEach((column) => {
    column.addEventListener("dragover", dragOver)
})