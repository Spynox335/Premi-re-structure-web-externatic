
import { To , Reset,Hide} from "./Cards.js";

export function ListChanged(){
    const buttonlist = document.querySelectorAll('.tech')

let Link =  window.location.origin // Url de base du site 
//console.log(window.location)
buttonlist.forEach((Element)=>{
    Element.addEventListener("click",(event)=>{
        To(Element.innerText)
        console.log(Link)
            location.replace(`${Link}#${Element.innerText}`); // change le lien , utilise le # pour target a la card et directement s'aligner a la card

      //  console.log(Element.innerText)
    })
})
}
