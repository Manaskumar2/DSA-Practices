//print duplicate element
function printDup(arr){
  let map=new Map()
  for(let i=0;i<arr.length;i++){
    if(map.get(arr[i])==undefined){
      map.set(arr[i],1)
    }
    else{
      map.set(arr[i],map.get(arr[i])+1)
    }
  }
  // console.log(map)
  let res=[]
  for(let key of map){
    if(key[1]>1){
      res.push(key[0])
    }
  }
  return res
}
let ans=printDup([2,3,5,6,2,3,9])
console.log(ans);