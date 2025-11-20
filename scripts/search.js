let ConfigJson = undefined

const Searchbar = document.querySelector("#search-bar-input")

const TechList = document.querySelector(".tech-list")

const  GetJsonFile = async () => {
    
     const reponse = await fetch('scripts/Config.json');
     const data = await reponse.json();
     return data

};

const CreateTemplateCardsTech = (Name) => {
            const test = ['dd','dd']
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
    let NewData = Searchbar.value === "" && ConfigJson["Front-End"].Dev || filterObject( ConfigJson["Front-End"].Dev,(Data,key) => key.toLowerCase().includes(Value.toLowerCase())) 

    TechList.innerHTML = ""
     for (const [key, value] of Object.entries(ConfigJson)) {
        console.log(key,value)
    }
    for (const [key, value] of Object.entries(NewData)) {
         CreateTemplateCardsTech(key)
    }
         console.log(NewData)

}

(async () => {
   ConfigJson = await GetJsonFile();

GetSearchBar()
  Searchbar.addEventListener("input",(event)=>{
        GetSearchBar()
    })
})();

// const list = [["a","b","c"],["a","d","c"]]

// for (const [a,b,c] of list) {
//   console.log(a,b,c);
// }