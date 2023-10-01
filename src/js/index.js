const buttons = document.querySelectorAll('.btn');
const character = document.querySelectorAll('.character')

buttons.forEach((btn, indice) => {
    btn.addEventListener("click", () => {
        deselectButton();
        deselectCharacter();

        btn.classList.add("selected");
        character[indice].classList.add("selected");
    });
});

function deselectCharacter() {
    const characterSelected = document.querySelector(".character.selected");
    characterSelected.classList.remove("selected");
};

function deselectButton() {
    const buttonSelected = document.querySelector(".btn.selected");
    buttonSelected.classList.remove("selected");
};

