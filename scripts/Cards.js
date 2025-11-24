export function To(TechName){
    const CardsList = document.querySelectorAll('.details')
    CardsList.forEach((element)=>{
        if(element.getElementsByTagName('h2')[0].innerText == TechName){
                 element.style.display = "flex"

        }else {
            element.style.display = "none"

        }
    })
}

export function Reset(){
    const CardsList = document.querySelectorAll('.details')
    CardsList.forEach((element)=>{
       
                 element.style.display = "flex"

    })
}

export function Hide(){
    const CardsList = document.querySelectorAll('.details')
    CardsList.forEach((element)=>{
       
                 element.style.display = "none"

    })
}



