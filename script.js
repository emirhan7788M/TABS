const tab = document.querySelectorAll(`.tab-nav__btn`);
const tabContent = document.querySelectorAll(`.tab-body__content`);

tab.forEach((elem, ind) => {

    elem.addEventListener(`click`, () => {
        for (let index = 0; index < tab.length; index++) {
            tab[index].classList.remove(`active`)
            tabContent[index].classList.remove(`active`)
        }
        elem.classList.add(`active`)
        tabContent[ind].classList.add(`active`)
    })

});