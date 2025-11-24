const buttonlist = document.querySelectorAll(".tech");

buttonlist.forEach((button) => {
    console.log(button)
    button.addEventListener("click" , (event) => {
    event.preventDefault();
})
});

console.log(buttonlist)
