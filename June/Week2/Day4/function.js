console.log("Hello function")
//This is function declaration
function print(){
    console.log("This is my function")
}

//This is function invocation and calling
print()

//expression function
let printQlith=function(){
    console.log("This my expression function")
}
printQlith()
// console.log(printQlith)


//function with parameter
let add = function(a,b){
    return a+b;
}
let sum=add(10,20)
console.log(sum)
// console.log(add)

let sub=()=>{
    console.log("this my arrow function")
}
sub()
// console.log(sub)

//Higher order function
function hof(a,b,task){
   return task(a,b)
}

let addNum=hof(10,20,(x,y)=>{
    return(x+y);
})

console.log(addNum)

// let newString=prompt("Enter your string:");

// function checkVowel(str){
//     let newStr=str.tolowerCase();
// let count=0;
//     // for(let e of newStr)
//     //     if(e ==="a"|| e==="e"||e==="i"||e==="o"||e==="u"){
//     //          count++;
//     //     }
//     // }


// for(let e of newStr){
//     if("aeiou".includes(e)){
//         count++;
//     }
//     return count;
// }

// console.log("No of vowel is:",checkVowel(newString))

let arr=[1,2,3,4,5,6,,7,8]
arr.forEach((v,idx,arr)=>{
    console.log(`In index ${idx}value is :${v} array ${arr}`);
})

let strArr=["pagal","dasu","bakadi","choro","sabyasachi","biswajit"]
let countStartWithS=0;

strArr.forEach((v)=>{
    if(v.startsWith("s")){
        countStartWithS++;
    }
})
console.log("Ans is :",countStartWithS)


let numArr=[1,2,3,4,5,6]

let modifiedArr=numArr.map((v)=>{
    return v+1;
})
console.log(modifiedArr)

//Filter method

let filterData=numArr.filter((v)=>{
    // if(v%2===0){
    //     return v;
    // }
    return v%2===0;
})
console.log(filterData)

//This is reduce method
// let sumOfNumber=numArr.reduce((accu,curr)=>{
//     return accu+curr
// },0)
// console.log("sum is :",sumOfNumber)
let sumNu=0
for(let e of numArr){
    sumNu+=e;
}
console.log(sumNu)


//Question 1
let marksofStudent=[40,50,60,80,90]
 let afterFilter=marksofStudent.filter((e)=>{
    return e>50
 })

 console.log(afterFilter)

 //Question 2
 let n=prompt("Enter a number")

 let from1ToN=[];
  
 for(let i=1;i<n;i++){
    from1ToN.push(i);
 }

 console.log(from1ToN)

 let sumFrom1Ton=from1ToN.reduce((accu,cuur)=>{
    return accu+cuur;
 })
  let multFrom1Ton=from1ToN.reduce((accu,cuur)=>{
    return accu*cuur;
 })

 console.log("Summation is :",sumFrom1Ton)
 console.log("Multiplication is :",multFrom1Ton)

