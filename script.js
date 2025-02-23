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

const dragEnter = ({target}) => {
    if(target.classList.contains("column_cards")){
        target.classList.add("column_highlight")
    }
};

const dragLeave = ({target}) => {
    target.classList.remove("column_highlight")    
};


// Evento de capura para as colunas
columns.forEach((column) => {
    column.addEventListener("dragover", dragOver)
    column.addEventListener("dragenter", dragEnter )
    column.addEventListener("dragleave", dragLeave )
})

// Evento de capura para os cards
cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
});