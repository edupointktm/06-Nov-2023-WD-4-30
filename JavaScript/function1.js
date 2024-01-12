// 1. no arrguments and no return value
//2. with arrguments and no return value
//3. with arrguments and with return value

// function userInfo(b) {

//     var c = "my name is "+b
//     return c
// }



// var x = userInfo("Rupesh")
// console.log(x)

//Normal
function add(x, y){
    c = x + y
    return c

}
 a=20
 b=30
console.log(add(a,b))







//Variable of function
var add = function(x, y){
    c = x + y
    return c

}
 a=50
 b=30
console.log(add(a,b))

//Arrow function (most important )
var add = (x, y)=>{
    c = x + y
    return c

}
 a=50
 b=50
console.log(add(a,b))