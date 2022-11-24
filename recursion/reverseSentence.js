function reverse(str){
    if(str.length==0) {
        return""
    }else{
     return reverse(str.slice(1))+str[0]
    } 

}
function revWords(sentence){
    let words=sentence.split(" ")
    for(let i=0;i<words.length;i++){
        words[i]=reverse(words[i])
    }
    return words.join(" ")
}
console.log(revWords("hi to all"))