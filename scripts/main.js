const H1 = document.getElementsByClassName("test")
let Result = {}


async function Init() {
  const requestURL =
    "config.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const Config = await response.json();
  Result = Config
  console.log(Result)
    console.log(H1)
    
    Result.List.forEach((element) => {
        console.log(element)
          var newContent = document.createTextNode(element);
document.body.appendChild(newContent)

    });
H1[0].innerText = Result.Title
}


Init()
