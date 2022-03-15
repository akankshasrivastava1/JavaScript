//vi. All words in sentence
let str = 'I am learning JavaScript';
let sep = ' ';
let startPos = 0;
for(;;){
    let index = str.indexOf(sep,startPos);
    if (index>=0){
        let word = str.substring(startPos, index);
        console.log(word);
        startPos = index + 1;
    }
    else{
        let word = str.substring(startPos);
        console.log(word);
        break;
    }
}
