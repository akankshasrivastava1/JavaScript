/*Given a String str, create a new String in which z has been replaced by x. 
Display the new string in the console.*/
/*let str = 'zoom';
let result = str.replace(/z/g, "x");
console.log(result);*/
var str = "sleep=zzz";
var chart = '';
var string = '';
    for(i=0; i < str.length; i++){ 
        if (str.charAt(i) == "z") {
            chart = "x";
            string = string + chart;
        }
        else {
            chart = str.charAt(i);
            string = string + chart;
        }
    }
    console.log(string);