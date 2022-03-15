//Given n, check which of the numbers from 2 to 5 divide n and display it on the console.
n=22;
for(let i=2;i<=5;i++){
    if (n%i==0){
        console.log(i,':yes');
    }
    else {
        console.log(i,':no');
    }
}