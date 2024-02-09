let get6sV1 = function(arr){
    console.log("Hello There is a 6 at index: ")
    for(let i=0;i<arr.length;i++)
        if(arr[i]===6)
            console.log(i+", ");
}
let diceRoll=[1,2,6,6,2,6,3,4,5,5,6];

get6sV1(diceRoll);

let is6 = (v,i)=>{if(v===6) console.log(`Index ${i} is a six`)};
let get6sV2 = function(arr){
    console.log("Hello There is a 6 at index: ")
    for(let i=0;i<arr.length;i++)
        is6(arr[i],i);
}
get6sV2(diceRoll);

let get6sV3 = function(arr,f){
    console.log("Hello There is a 6 at index: ")
    for(let i=0;i<arr.length;i++)
        f(arr[i],i);
}
get6sV3(diceRoll, is6);

let get6sV4 = function(arr,f){
    //console.log("Hello There is a 6 at index: ")
    for(let i=0;i<arr.length;i++)
        if(f(arr[i]))
            console.log(`There is a ${arr[i]} at ${i}`);
}
get6sV4(diceRoll, v => v===1);

console.log("opagve 5: ")
get6sV4(diceRoll, v => v>=3);


// The 6 task
// This takes and addeds the amount of 6 togethere and findes the sum of them
console.log(diceRoll.filter(dice => dice==6).reduce((sum,dice) => sum+dice,0));