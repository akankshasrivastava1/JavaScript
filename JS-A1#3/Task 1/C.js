// i. Print Count=1 to Count=6
for (let i=1; i<7; i++){
    let str = 'Count='+i;
    console.log(str);
}

//ii. Print A AA AAA AAAA
let str = '';
 for(let i=0; i<4; i++){
     str = str + 'A';
     console.log(str);
 } 
 
 // iii.Print 1 12 123 and so on
 let str1= '';
 for(let i =1; i<=5; i++){
     str1 = str1 +i;
     console.log(str1);
 }
// iv. Print table of 3
 for(let i =1; i<=10; i++){
     let mult = 3*i;
     let str2 = '3*' + i + '=' + mult;
     console.log(str2);
 }
