const SearchEngine = document.querySelector(".searchengine");
const SearchIcon = document.querySelector(".SearchIcon");

SearchIcon.addEventListener(`click`, () => {
    SearchEngine.classList.toggle(`active`);
})