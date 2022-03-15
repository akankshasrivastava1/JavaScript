let str = 'qw23BN**45g';
var chart = '';
var string = '';
var specialChar ='';
for(i=0; i < str.length; i++){ 
    if (str[i]>='A' && str[i]<='Z') {
        chart = "A";
        string = string + chart;
    }
    else if (str[i]>='a' && str[i]<='z') {
        chart = "a";
        string = string + chart;
    }
    else if (str[i]>='0' && str[i]<='9') {
        chart = "0";
        string = string + chart;
    }
    else{
        specialChar = specialChar + str[i];
        chart = str.charAt(i);
        string = string + chart;
    }
}
console.log(string);