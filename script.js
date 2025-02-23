const columns = document.querySelectorAll(".columns_cards");
const cards = document.querySelectorAll(".card");

let draggedCard = null;

const dragStart = (event) => {
    draggedCard = event.target;
    console.log(draggedCard)
};

cards.forEach((card) => {
          card.addEventListener("dragstart", dragStart);
});
