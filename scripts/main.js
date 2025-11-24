
import { To , Reset,Hide} from "./Cards.js";

export function ListChanged(){
    const buttonlist = document.querySelectorAll('.tech')

console.log(buttonlist)

buttonlist.forEach((Element)=>{
    Element.addEventListener("click",(event)=>{
        To(Element.innerText)
        console.log(Element.innerText)
    })
})
}
