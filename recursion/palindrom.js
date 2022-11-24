function ispal(str){
    if(str.length<2)
    return true
    if(str[0]!=str[str.length-1]){

    return false
    }
    return ispal(str.slice(1,-1))
}
let isPalindrom=function(str){
    let newStr=""
    let l=str.length
    for(let i=0;i<l;i++){
        let ch=str[i].toLowerCase()
        newStr+=ch
    }
    
    if(newStr==ispal(newStr))return true
    return false
}
let ans=isPalindrom("1madam2")
console.log(ans);