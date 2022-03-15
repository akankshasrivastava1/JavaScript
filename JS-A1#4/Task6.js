/*Using a for loop, printnumbers from 1 to 15 in the console.
If the number is divisible by 5, printHello instead of the number.*/
for(let i=1;i<=15;i++){
    if (i%5==0){
        console.log('Hello');
        continue;
    }
    console.log(i);
}