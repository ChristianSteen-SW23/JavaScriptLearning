/* ***************************************************
 * HTML elemets
 ***************************************************** */
let beerForm = document.querySelector("#beerForm");
let beerSel = document.querySelector("#beerSel");
let drinkTypesRadio = beerForm.querySelectorAll('input[name="drinkType"]');
let ordreBtn = document.querySelector("#ordreBtn")

/* ***************************************************
 * Eventlisters and simple HTML
 ***************************************************** */
//ølKnap.addEventListener("click", writeØl);
//ølForm.children.addEventListener("click", writeØl);

for (let i = 0; i < drinkTypesRadio.length; i++)
    drinkTypesRadio[i].addEventListener("click", () => {writeDrinkType();updateSel();})

ordreBtn.addEventListener("click", () => {ordreDrink()});

// Tilte for side
let h1Tilte = document.createElement("h1");
h1Tilte.append("Welcome please pick a drink type🥰");
h1Tilte.hidden = false;
beerForm.before(h1Tilte);

// Tilte for speclied drink type
let h2DrinkType = document.createElement("h2");
h2DrinkType.append("");
h2DrinkType.hidden = true;
beerForm.after(h2DrinkType);

// Ordre status
let h2Ordre = document.createElement("h2");
h2Ordre.append("");
h2Ordre.hidden = true;
h2DrinkType.after(h2Ordre);

//beerForm.children[0].addEventListener("click", () => {writeØl();updateSel();});

/* ***************************************************
 * Other functions
 ***************************************************** */

function writeDrinkType(){
    //ølKnap.style.width = "500px"; // VIRKER FUCKING IKKE
    for (let i = 0; i < drinkTypesRadio.length; i++) {
        if(drinkTypesRadio[i].checked){
            //console.log(drinkTypesRadio[i].value+" is in stock");
            h2DrinkType.textContent= drinkTypesRadio[i].value+" is in stock";
        }
    }
    h2DrinkType.hidden = false;
}



// Spy function --------------------------------------------------
//document.body.addEventListener("mouseover", (event) => {console.log(`(${event.target.nodeName}, ${event.target.value},(${event.x},${event.y}))`);});
//document.body.addEventListener("keydown", (event) => {console.log(`User pressed: (${event.key})`);});

/* ***************************************************
 * Update Drink type selction
 ***************************************************** */
async function updateSel(){
    let res = await fetch("drinkType");
    let beerList = await res.json();
    //console.log(beerList);
    // Clear existing options
    beerSel.innerHTML = '';
    let selectedType;
    // Append new option
    for (let i = 0; i < drinkTypesRadio.length; i++) {
        if(drinkTypesRadio[i].checked){
            selectedType = drinkTypesRadio[i].value;
        }
    }
    beerList[selectedType].forEach(beer => {
        beerSel.append(makeOption(beer));
    });
}

function makeOption(name){
    let option = document.createElement("option");
    option.textContent = name;
    option.value = name;
    return option;
}

/* ***************************************************
 * Ordre drink
 ***************************************************** */
async function ordreDrink (){
    let selectedOption = beerSel.selectedOptions[0];
    if (selectedOption) {
        console.log("Selected Option Name: " + selectedOption.value);
    }
    /*let ordreRes;
fetch("ordre")
    .then((res) => {
        ordreRes = res;
        if (!res.ok) {
            throw new Error("Fetch error");
        }
        return res.json();
    })
    .then((ordreStatus) => {
        console.log(ordreStatus);
        // Now you can access the properties of ordreStatus like ordreStatus.ales, ordreStatus.lagers, etc.
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });*/

    let ordreRes2 = fetch("ordre").then((res) => res.json()).then((res) => {console.log(res); return res});

    ordreRes2.then((final) => console.log(final))
}