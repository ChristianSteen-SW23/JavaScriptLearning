      //let ølKnap = document.querySelector("#ølKnap");
      let ølForm = document.querySelector("#beerForm");


      //ølKnap.addEventListener("click", writeØl);
      //ølForm.children.addEventListener("click", writeØl);
      console.log("here");
      
      for (let i = 0; i < ølForm.children.length; i++) {
          ølForm.children[i].addEventListener("click", () => {writeØl();updateSel();});
      }
      
      function writeØl(){
          console.log("FUCK ME");
          let typesOfØl = document.querySelectorAll('input[name="gæringstype"]');
          //ølKnap.style.width = "500px"; // VIRKER FUCKING IKKE
          for (let i = 0; i < typesOfØl.length; i++) {
              if(typesOfØl[i].checked){
                  console.log("This beer is on stock: "+typesOfØl[i].value);
                  h1Tilte.textContent= `There is this on stock: ${typesOfØl[i].value}`;
              }
          }
          h1Tilte.hidden = false;
      }
      
      let h1Tilte = document.createElement("h1");
      h1Tilte.append("Joooo click på knappen");
      h1Tilte.hidden = true;
      ølForm.before(h1Tilte);
      
      // Spy function --------------------------------------------------
      //document.body.addEventListener("mouseover", (event) => {console.log(`(${event.target.nodeName}, ${event.target.value},(${event.x},${event.y}))`);});
      //document.body.addEventListener("keydown", (event) => {console.log(`User pressed: (${event.key})`);});
      
      let ølSel = document.querySelector("#ØlSelect");
      
      async function updateSel() {
          console.log("here.....................");
          
          let res = await fetch("beer");
          let beerList = await res.json();
      
          console.log(beerList);
          // Clear existing options
          ølSel.innerHTML = '';
          let selectedType;
          // Append new option
          let checkboxElements = ølForm.querySelectorAll('input[name="gæringstype"]');
          for (let i = 0; i < checkboxElements.length; i++) {
              if(checkboxElements[i].checked){
                  selectedType = checkboxElements[i].value;
              }
          }
          beerList[selectedType].forEach(beer => {
              ølSel.append(makeOption(beer));
          });
      }
      
      function makeOption(name){
          let option = document.createElement("option");
          option.textContent = name;
          return option;
      }
      
          