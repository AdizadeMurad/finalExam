
for (let i=99; i < 990; i++) {
  let  sum=0
    let a=Math.floor(i/100)
    let b=Math.floor(i/10%10)
    let c=Math.floor(i%10)
    cem=(a**3)+(b**3)+(c**3)
    sum+=cem

if(i===sum){
console.log(`${i} merydir`);
}
else {console.log("mery delidir");
}
}

  

