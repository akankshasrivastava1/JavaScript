let str = "12ab1128d";
let chart = '';
let string = '';
    for(i=0; i < str.length; i++){ 
        if (str.charAt(i) == "1") {
            chart = "@";
            string = string + chart;
        }
        else if (str.charAt(i) == "2") {
            chart = "#";
            string = string + chart;
        }
        else {
            chart = str.charAt(i);
            string = string + chart;
        }
    }
    console.log(string);