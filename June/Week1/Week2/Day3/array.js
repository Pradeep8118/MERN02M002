console.log("Hello World");
let a=20;
console.log("The value is :",a+1)
console.log(`The value of is :${a+2}`)

// const obj={
//     name:"xyz"
// }
// console.log(obj.name)
// obj.name="y"
// console.log(obj.name)

let str="Welcome"
console.log(str[1])
str[0]="D";
console.log(str)

console.log(str.length)
const newstr=str.toLowerCase();
console.log(newstr)
console.log(str.toUpperCase())


console.log("After trim:",str.trim().length)
console.log("here trim not applicable",str.length);

console.log(str.charAt(0))
console.log(str.concat(" Qlith ").concat("Innovation"))

const newString=str.replace("W","D");
console.log(newString)

console.log(str.slice(0,str.length))
console.log(str.slice(2))
console.log(str.slice(-2))
console.log(str.slice(-3))
console.log(str.slice(4,4))


// const usreName=prompt("Enter your name");
// console.log("".concat("@").concat(usreName).concat(usreName.length))

console.log(str.substring(-2))


//Arrays
let starr=["babul","sagar","pagal","prangya","Suchismita","bacadi"]
console.log(starr[0])
// for(let e of starr){
//     console.log(e)
// }
//Average of the array element
let numArr=[2,3,4,6,7];
let sum=0;
for(let e of numArr){
     sum=sum+e;
}
console.log(sum/(numArr.length))

let arr2=[1,2,3,4,5]
let arr3=[6,7,8]
arr2.push(6,7,"bhhg",true);
console.log(arr2)
arr2.pop()
console.log(arr2)

console.log(arr2.toString())
console.log(arr2.concat(arr3))

arr2.unshift(0)
console.log(arr2)
arr2.shift();
console.log(arr2)

console.log(arr2.slice(0,4))

arr2.pop()
console.log(arr2)
arr2.splice(1,2,10)
console.log(arr2);

arr2.splice(4,1)
console.log(arr2)

console.log(arr2.includes(10));

console.log(arr2.reverse())

let arr4=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
arr4.splice(0,1)
console.log(arr4)
arr4.splice(1,1,"Ola")
console.log(arr4)
arr4.push("Amazon")
console.log(arr4)