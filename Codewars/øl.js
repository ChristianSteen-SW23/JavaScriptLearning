function spinWords(string){
    string.indexOf(" ");
    let newString="";
    for (let index = 0; 0 < string.indexOf(" "); index++) {
        if(string.indexOf(" ")>5){
            newString += string.slice(0,strings.indexOf(" "));
            string = string.slice(strings.indexOf(" "), string.length);
        }else{
            let testS=(string.slice(0,string.indexOf(" ")));
            let testnewS="";
            for (let i = 0; i < testS.length; i++) {
                testnewS[testS.length-i]+=testS[i];
            }
            newString += testnewS;
            string = string.slice(string.indexOf(" "), string.length);
        }
    }
    if(string.indexOf(" ")>5){
        newString += string.slice(0,strings.indexOf(" "));
        string = string.slice(strings.indexOf(" "), string.length);
    }else{
        let testS=(string.slice(0,string.indexOf(" ")));
        let testnewS="";
        for (let i = 0; i < testS.length; i++) {
            testnewS[testS.length-i]+=testS[i];
        }
        newString += testnewS;
        string = string.slice(string.indexOf(" "), string.length);
    }
    return newString;
}
let stringtest = "abc";

console.log(spinWords(stringtest));