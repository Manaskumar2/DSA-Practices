//Q1- 2sum in unsorted array.........................................//
// function twoSum(arr,target){
//    let newArr= arr.sort((a,b)=>a-b)
//    let i=0
//    let j=newArr.length-1
//    while(i<j){
//     if(newArr[i]+newArr[j]==target){
//         // console.log(true)
//     }
//     if(newArr[i]+newArr[j]<target)
//     {
//         i++
//     }
//     else{
//         j--
//     }
// }
// return false
// }
// twoSum([2,6,5,1,8,7,6,9],16)
//approach using hash map//
// var twoSum = function(nums, target) {
// let map= new Map();
//     for(let i =0; i<nums.length; i++){
//         let num1=nums[i]
//         let num2=target-num1
//         if(map.has(num2)){
//             console.log([i,map.get(num2)])
//         }
//         map.set(num1,i)
//     }

// };
// twoSum([2,6,5,1,8,7,6,9],7)


// triplet sum in array......two pointer technique............./
// function threeSum(arr,target){
// let newArr=arr.sort((a,b)=>a-b)
// let left=0
// let right=0
// for(let i=0;i<newArr.length-2;i++){
//     left=i+1
//     right=newArr.length-1
//     while(left<right){ 
//     if(newArr[i]+newArr[left]+newArr[right]==target){
//         console.log ("triplet sum is= " +[newArr[i]]+" and "+newArr[left]+" And "+newArr[right])
//         return true
//     }
//     else if (newArr[i] + newArr[left] + newArr[right] <target)
//                 left++;
//             else{

            
//                 right--;
//         }
//     }
    
// }
// }

// threeSum([2,3,5,4,6,9,5,8],15)

//four sum using two pointer


// function fourSum(arr,target){
//     let arr1= arr.sort((a,b)=>a-b)
//     let left =0
//     let right=0
//     for(let i=0;i<arr1.length-3;i++){
//         left=i+2
//         right=arr1.length-1
//         while(left<right){
//           if(arr1[i]+arr1[i+1]+arr1[left]+arr1[right]==target){
//              console.log(`the four sum is ${arr1[i]}, ${arr1[i+1]}, ${arr1[left]},${arr1[right]}`);
//             return true
//           }
//           else if(arr1[i]+arr1[i+1]+arr1[left]+arr1[right]<target){
//             left++
//           }
//           else{
//             right--
//           }
//         }
//     }
//   return -1
// }
// let res=fourSum([2,3,5,4,6,9,5,8],15)
// console.log(res)
// var fourSum = function(nums, target) {
//      let arr1= nums.sort((a,b)=>a-b)
//     let left =0
//     let right=0
//     let result=[]
//     for(let i=0;i<arr1.length-3;i++){
//         left=i+2
//         right=arr1.length-1
//         while(left<right){
//           if(arr1[i]+arr1[i+1]+arr1[left]+arr1[right]==target){
//              result.push([arr1[i],arr1[i+1],arr1[left],arr1[right]]);
             
        
//           }
//           else if(arr1[i]+arr1[i+1]+arr1[left]+arr1[right]<target){
//             left++
//           }
//           else{
//             right--
//           }
//         }
//     }
//     return result 
// }
// let rs=fourSum([2,3,6,4,3,6,9,4],16)
// console.log(rs);


//two sum
// function twoSum(nums,target){
//   let start=0
//   let end=nums.length-1
//   let arr= new Array(2)
//   while(start<end){
//     if(nums[start]+nums[end]==target){
//       arr[0]=start
//       arr[1]=end
//       break;
//     }
//     else if(nums[start]+nums[end]<target){
//       start++
//     }
//     else{
//       end--
//     }
//   }
//   return arr
// }
// let ans=twoSum([2,6,5,1,8,7,6,9],7)
// console.log(ans);
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
