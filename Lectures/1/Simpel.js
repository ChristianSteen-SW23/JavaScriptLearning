let toggleState=true;
let text=""

function doToggle(event){
    let elem=event.target;
    if(toggleState){
        text=elem.textContent;
        elem.textContent="Boommmer";
        toggleState=false;
        return
    }
    text=elem.textContent;
        elem.textContent="Abe";
        toggleState=true;
}

let h1Elem=document.querySelector("#iwp_id");
h1Elem.addEventListener("click",doToggle);


let a="Hej"

function addButton(v){
    let b = document.createElement("button");
    b.textContent = v;
    document.body.appendChild(b);
}

addButton(a);