let n = 1001;
let sum = 0;
for(var i=1; i<=4; i++){
    var rem = n %10;
    n = (n - rem) / 10;
    sum = sum + rem;  
}
console.log(sum)

    
