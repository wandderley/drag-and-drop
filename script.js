const columns = document.querySelectorAll(".column_cards");
const cards = document.querySelectorAll(".card");

let draggedCard = null;


// Função Cards
const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = "move";
};

// Função coluna
const dragOver = (event) => {
    event.preventDefault();
};

const dragEnter = ({target}) => {
    if(target.classList.contains("column_cards")){
        target.classList.add("column_highlight");
    }
};

const dragLeave = ({target}) => {
    target.classList.remove("column_highlight")    ;
};

// Função drop
const drop = ({target}) => {
    if(target.classList.contains("column_cards")){
        target.classList.remove("column_highlight");        target.append(draggedCard);
    }
};

const createCard = ({target}) => {
    if(!target.classList.contains("column_cards")) return

    const card = document.createElement("section");

    card.className = "card";
    card.draggable = "true";
    card.contentEditable = "true"

    card.addEventListener("focusout", () => {
        card.contentEditable = "false";
        if(!card.textContent){
            card.remove();
        }
    })

    card.addEventListener("dragstart", dragStart);


    target.append(card)
    card.focus()

};


// Evento de capura para as colunas
columns.forEach((column) => {
    column.addEventListener("dragover", dragOver); // Está sobre
    column.addEventListener("dragenter", dragEnter ) ;// Entra
    column.addEventListener("dragleave", dragLeave ); // Arrasta pra fora
    column.addEventListener("drop", drop ); // solta
    column.addEventListener("dblclick", createCard ); // adiciona novo card

})

// Evento de capura para os cards
cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
});