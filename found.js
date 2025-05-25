
let arr =["talha","habib",["hussain","yaseen"],"asad"];
// console.log(arr);
var a = arr.join(",");
// console.log(a);
var findWord =prompt('find word');
console.log(findWord);
let flag = false
for( var i =0 ; i < arr.length ; i++){
    // console.log(i);  
// var b = a.split(",");
// console.log(b);
if(findWord==arr[i]){
flag = true
    alert("FOUND");
break
// }
}
// if (flag){
//     console.log("FOUND");
    
// }
else{
    alert("NOT FOUND");
}}