let str = 'AB ABC ABCD ABCD ABC AB';
let count = 0;
let word ='ABCD';
let M = word.length;      
let N = str.length;
let str1 ='';      
for(let i = 0; i <= N - M; i++)
{          
    for(var j = 0; j < M; j++)
    {
        if (str[i + j] != word[j])
        {
            break;
        }
    }
    if (j == M)
    {              
        count++;              
        j = 0;              
    }
}   
console.log(count);     