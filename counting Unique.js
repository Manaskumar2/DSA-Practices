function countUnique(array){
    if(array.length>0){
    let i=0
    for(let j=0;j<array.length;j++){
        if(array[i]!==array[j]){
            i++
            array[i]=array[j]
        }
    }
    return i+1

 }
 else{
    throw new Error("array is empty")
 }
}
let result=countUnique([2,2,3,3,4,4,5,5,6,6,7,8])
console.log(result)