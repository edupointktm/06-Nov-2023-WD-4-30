// var n1=5
// var n2=8
// var n3=6
// var n4=9
// var n5=45
// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n4)
// console.log(n5)

// var n=[4,45,10, 8,20]
// l = n.length
// for(i=0;i<l;i++){
//     console.log(n[i])
// }

// WAP to ask 5 different number and find out their sum
// var n=[15,3,17,9,10, 58]
// l = n.length
// var sum=0
// for(i=0;i<l;i++){
//     sum = sum + n[i]
// }
// console.log("Sum of 5 different no. : "+sum)

// WAP to ask 10 different number and find largest and smallest no
// var n=[64,16,97,28,9,91,52]
// var smallest=n[0]
// var largest=0
// var l=n.length
// for(i=0;i<l;i++){
//     if( n[i]> largest){
//         largest = n[i]
//     }
// }
// console.log("Largest = "+largest)

// for(i=0;i<l;i++){
//     if(n[i]<smallest){
//         smallest = n[i]
//     }
// }
// console.log("Smallest = "+smallest)


//WAP to ask any five student name and display it.
var student = ['ram', 'gopal', 'hari', 'ganesh','sujit']
l = student.length
document.write(`<table border=1>`)
document.write(`<th> Name </th>`)
for(i=0;i<l;i++){
    document.write(`
    
     <tr>
     <td>${student[i]}</td>
     </tr>`)
}
document.write(`</table>`)


// Object