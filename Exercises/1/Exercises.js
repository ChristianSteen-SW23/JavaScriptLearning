//Exercise 1
let s = "";
for(let i=0; i<7;i++){
    s+="#";
    console.log(s);
}

//Exercise 2
let s2=""
let size=8
for(let j=0;j<size;j++){
    for(let i=0;i<size;i++){
        if((i+j)%2==0){
            s2+=" "
            continue
        }
        s2+="#"
    }
    s2+="\n"
}
console.log("\n"+s2);


//Exercise 3
function renderPage(title,heading,demoString) { 
    let string = "";
    string += `
    <!DOCTYPE html>
    <html lang=\"da\">
    \t<head>
    \t\t<meta charset="utf-8">
    \t\t<title>${title}</title>
    \t</head>
    \t<body>
    \t\t<!-- page content -->
    \t\t<h1>${heading}</h1>
    \t\t<script>
    \t\t\tconsole.log("${demoString}")
    \t\t</script>
    \t</body>
    </html>`;
    return string
} 

let s3= renderPage("Hej","Med","dig");
console.log(s3);

//Exercise 4
function avg(array){
    let sum = 0;
    for(let element of array)
        sum+=element.length;

    return sum/array.length
}
s4= ["hejsa","med","dig!"];

console.log(avg(s4));
