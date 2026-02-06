const menu = document.getElementById("menu");
const navig= document.getElementById("navig");

menu.addEventListener("click", () => {
    navig.classList.toggle("active");
});
