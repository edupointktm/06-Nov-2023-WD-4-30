var num = [5, 9, 8, 12, 13, 17, 19, 15]
var l = num.length

//For Sum
var sum=0
for(i=0;i<l;i++){
    sum=sum+num[i]
}
console.log("Sum = "+sum)
console.log("Average = "+sum/l)

//Smallest and Largetst
var sm =num[0]
var lg = num[0]
for(i=0;i<l;i++){
    if(num[i]>lg){
        lg=num[i]
    }
    if(num[i]<sm){
        sm=num[i]
    }
}
console.log("Largest Number = "+lg)
console.log("Smallest Number = "+sm)

//Check ODD or EVEN
var e=0;
var o=0;
for(i=0;i<l;i++){
    if(num[i]%2==0){
        e++
    }
    else{
        o++
    }
}
console.log("Total Even number = "+e)
console.log("Total ODD number = "+o)