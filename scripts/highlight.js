const lis = document.querySelectorAll("ul li");  
  lis.forEach(li => {
    let bool = true

  li.addEventListener("click", (event) => {
      const couleurs = ["red", "yellow", "purple", "green"];
      if (bool) {
        li.style.backgroundColor = "red";
        console.log("DTFGHFH");
        bool = false;
      } else {
        li.style.backgroundColor = "#182634";
        bool = true;
      }


    }
  );
});