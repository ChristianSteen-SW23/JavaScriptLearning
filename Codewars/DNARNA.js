function DNAtoRNA(dna){
    let RNA="";
    for(let c of dna){
      if(c==="T"){
        RNA += "U";
        continue;
      }
      RNA += c;
    }
    
    return RNA;
  } 

  console.log(DNAtoRNA("GUCT"))