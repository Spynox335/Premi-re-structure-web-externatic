


export function ListChanged(){
    const buttonlist = document.querySelectorAll('.tech')

console.log(buttonlist)

buttonlist.forEach((Element)=>{
    Element.addEventListener("click",(event)=>{
        console.log(Element.innerText)
    })
})
}
