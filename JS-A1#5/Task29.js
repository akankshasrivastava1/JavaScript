let str = 'ABCD JS';
let pattern1 = "ABCD";
let pattern2 = "XYZ";
let len = str.length;
 
for (let i = 0; i <len; i++)
{
    if (pattern1[i] == 'XYZ') {
        //chart = pattern1;
        str = str + chart;
    }
}
console.log(str); 
   