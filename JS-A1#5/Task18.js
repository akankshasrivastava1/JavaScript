let str = 'ABCDEABCDF';
if (str.length % 2 == 0) {
    x = (str.length / 2);
} 
let str1 = str.substring(0, x);
let str2 = str.substring(x);
str = str1 + str2;
if (str1==str2){
    console.log('Yes');
}
else{
    console.log('No');
}