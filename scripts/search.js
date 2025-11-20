let ConfigJson = undefined

const Searchbar = document.querySelector("#search-bar-input")

const TechList = document.querySelector(".tech-list")
const Cards_Tech_Desc = document.querySelector(".details-list")


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

            <h4>${Data.Description}</h4>
            <p>${Data.Utility}</p>
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

function filterObject(obj, callback) {
  return Object.fromEntries(Object.entries(obj).
    filter(([key, val]) => callback(val, key)));
}

const GetSearchBar = () => {
    const Value = Searchbar.value
    let FinalData = {}
    let NewData = Searchbar.value === "" && ConfigJson || filterObject( ConfigJson,(Data,key) => key.toLowerCase().includes(Value.toLowerCase())) 

    TechList.innerHTML = ""
    
    for (const [key, value] of Object.entries(NewData)) {
         CreateTemplateCardsTech(key)
    }


}

(async () => {
   ConfigJson = await GetJsonFile();

GetSearchBar()
InitInfoCards()
  Searchbar.addEventListener("input",(event)=>{
        GetSearchBar()
    })
})();

// const list = [["a","b","c"],["a","d","c"]]

// for (const [a,b,c] of list) {
//   console.log(a,b,c);
// }
