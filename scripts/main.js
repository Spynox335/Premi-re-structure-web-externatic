const buttonlist = document.querySelectorAll('.tech')

console.log(buttonlist)


buttonlist.forEach((button) => {
    button.addEventListener("click" , (event) => {
    event.preventDefault();
})
});

