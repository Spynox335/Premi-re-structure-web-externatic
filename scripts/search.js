import { ListChanged } from "./main.js";



let ConfigJson = undefined

const Searchbar = document.querySelector("#search-bar-input")

const TechList = document.querySelector(".tech-list")
const Cards_Tech_Desc = document.querySelector(".details-list")

// Settings
let ChoosedCategory = ""

const  GetJsonFile = async () => {
    
     const reponse = await fetch('scripts/Config.json');
     const data = await reponse.json();
     return data

};

// "Angular.js": {
//     "MainCategory": "Front-End",
//     "SubCategory": "Dev",
//     "MainTag": "Javascript",
//     "OthersTags": ["Framework"],
//     "Description": "Ancienne version d’Angular, basée uniquement sur JavaScript",
//     "Utility": "Développer des applications web avec architecture MVC"
//   },

const AddNewCardDesc = (Data,Name) => {
    const Card = ` <div class="details">
            <div class="details-header">
                <h2>${Name}</h2>
                <div class="Tags">
                    <div class="MainTag">
                        <p>JavaScript</p>
                    </div>
                    <div class="SecondTag">
                        <p>Framework</p>
                    </div>

                </div>


            </div>

            <h4>${Data.Description||"N/A"}</h4>
            <p>${Data.Utility||"N/A"}</p>
          </div>`
          Cards_Tech_Desc.insertAdjacentHTML("beforeend",Card)

}

const InitInfoCards = () => {
        Cards_Tech_Desc.innerHTML = ''
        for (const [key, value] of Object.entries(ConfigJson)) {
             AddNewCardDesc(value,key)
        }

}

const CreateTemplateCardsTech = (Name) => {
           const Tech =   `<div class="tech">${Name}</div>`
           TechList.insertAdjacentHTML('beforeend',Tech)


}


function filterObject(obj, callback) {                                                     //  Key ,    Val
  return Object.fromEntries(Object.entries(obj). // Transforme l'objet en Array du genre : [["Angular",{...}],["Vite",{...}]]
    filter(([key, val]) => callback(val, key))); // Array donc la fct filter fctnne , Callback : key.toLowerCase().includes(Value.toLowerCase()
}

const InitCategories = () => {
     const Categories = []
     const ListesCat = document.querySelector(".listes").children[0]
      for (const [key, value] of Object.entries(ConfigJson)) {
         if (!Categories.includes(value.MainCategory)) {
              Categories.push(value.MainCategory)
                const li = document.createElement("li")
                li.innerText = value.MainCategory
                li.addEventListener("click",(event)=>{
                    ChoosedCategory = value.MainCategory
                    GetSearchBar()

                })
                ListesCat.appendChild(li)

          }
    }
  
}

const GetSearchBar = () => {
    const Value = Searchbar.value
    let FinalData = {}
    let NewData =  filterObject( ConfigJson,(Data,key) =>  ChoosedCategory == "" &&  key.toLowerCase().includes(Value.toLowerCase()) || ChoosedCategory == Data.MainCategory && key.toLowerCase().includes(Value.toLowerCase()) ) 

    TechList.innerHTML = ""
    
    // Le foreach mais pour un objet 
    for (const [key, value] of Object.entries(NewData)) {
         CreateTemplateCardsTech(key)
    }
    ListChanged()


}

(async () => {
   ConfigJson = await GetJsonFile();

GetSearchBar()
InitInfoCards()
InitCategories()
  Searchbar.addEventListener("input",(event)=>{
        GetSearchBar()
    })
})();

// const list = [["a","b","c"],["a","d","c"]]

// for (const [a,b,c] of list) {
//   console.log(a,b,c);
// }
