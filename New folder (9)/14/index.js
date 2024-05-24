const num = prompt("eded daxil et")
let even=0
let odd=0

for (let i = 0; i <num.length ; i++) {
   if(i%2==0){
    even+=Number(num[i])
   }else{
    odd+=Number(num[i])
   }
    
}

console.log(even*odd)

