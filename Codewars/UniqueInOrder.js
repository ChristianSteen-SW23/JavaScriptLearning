var uniqueInOrder=function(sIn){
    let sOut=[];
    for(let c of sIn){
      if(c!==sOut[sOut.length-1]){
        sOut[sOut.length]=c;
        }
    }
    return sOut;
}

var uniqueInOrder2=(sIn) => Array.from(new Set(sIn))


console.log(uniqueInOrder('aaaaaabbbbbbbaaaaa'))