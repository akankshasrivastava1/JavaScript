//i. Add 1 to odd number
let n = 21;
let remainder = n%2;
if (remainder==1){
    n++;
}
console.log(n);

//ii.Divisible by 2, 3 and 6
let num = 60;
if (num%6==0){
    console.log('Divisible by 6')
}
else if (num%3==0){
    console.log('Divisible by 3')
}
else if (num%3==0){
    console.log('Divisible by 3')
}
else {
    console.log("Not divisible by 2, 3 and 6")
}

//iii.Pattern JKJKJK
let size = 6;
let str = '';
for (let i =1; i<=size; i++){
    if (i%2==1){
        str = str + 'J';
    }
    else {
        str = str + 'K';
    }
}
console.log(str);

//iv.Check prime or composite
let num1 = 21;
let count =0;
for(let i =2; i<n; i++){
    if(n%i==0){
        count++;
    }
}
if (count==0){
    if (n==1){
        console.log('1 is neither prime nor composite')
    }
    else{
        console.log('Prime');
    }
}
else {
    console.log('Composite');
}


