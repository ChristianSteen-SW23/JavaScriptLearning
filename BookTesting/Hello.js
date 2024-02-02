console.log("Hello World!");

let s = function(y) {return y*y};

function abs(x){
    if(x>=0){
        return x
    }
    return -x
}
let a=4
let b=5

//a===b?console.log("yes").console.log("no")

function log(x){
    console.log("Dit tal er "+x);
}

function square2(x, func){
    func?.(x);
    console.log(a+" her er a")
    var c=6;
    return x*x;
}


console.log(square2(10, log));

console.log(10**6);
console.log(1+{})

console.log(0b10)
console.log(0o10)
console.log(0x10)
console.log(1!="1")
console.log(1!=="1")


if(abs(10)===abs(-10)){
    /*console.log("\u{1F600}")
    console.log("Det her er sku da dumt 1/0 "+1/0)
    console.log("Det her er sku da dummere 1/-0 "+1/-0)
    console.log(s(5));*/
}


let n=5;
switch (n){
    case 5:
        console.log("hej " + n);
    case 6:
        console.log("hej " + n);
        
        break;
    case 7:
        console.log("hej " + n);
        break;

}
console.log(c+" det her er c")