console.log("Hello")

console.log(1 !="1");

console.log(1 !=="1");

// let is = "true";
console.log(true != "true");

console.log(true !== "true");


console.log("a"-1);

console.log('10'-'4'-'3'-2+'5');

let a=2;
let b=a++;
console.log(a,b);

console.log(0 == '');
console.log(0 === '');

console.log(!!false);
console.log(!! "");


// let age =prompt("Enter your age")
// if(age>=18){
//     console.log("He/She can eligible for voting");
// }
// else{
//     console.log("He/She can not eligible for voting");
// }



let stMark=40   ;
if(stMark>=90){
    console.log("Grade A")
}
else if(stMark>=80){
    console.log("Grade B")
}
else if(stMark>=60){
    console.log("Garde C")
}
else{
    console.log("Fail")
}


//Ternary Operator
// let stage=40;
// console.log(stage>=18 ? "can vote" :"can't Move");

// let num = prompt("Enter a number")
// if(num%5==0){
//     console.log(num,"This number is divisible the 5")
// }
// else{
//      console.log(num,"This number is not divisible the 5")
// }



//Loops
//1.for loop
//2.while loop
//3.do-while loop

for(let i=1;i<=10;i++){
    console.log(i)
}

console.log("This is while loop")
let i=1;
while(i<=5){
    console.log(i)
    i++;
}
console.log("do-while loop")
let n=1;
do{
    console.log(n)
    n++;
}while(n<=15)


//Object
let obj={
    name:"xyz",
    age:30,
    phone:324542655,
    email:"xyz@gamil.com"
}
console.log(obj.name)
console.log(obj.age)
console.log(obj["email"])
obj.name="y"
console.log(obj.name)

// console.log(obj.ahsg)

let arr=[1,2,3,4,5,,6];
console.log(typeof obj)
console.log(typeof arr)

//for-in loop
console.log("for-in loop")
for(let key in obj){
    console.log(obj [key])
}

for(let idx in arr){
    console.log(arr[idx])
}
console.log("for-of loop")
//for-of
for (const e of arr) {
    console.log(e)
}
// for (const e of obj){
//     console.log(e)
// }

let str="Qlith innovation"
console.log("length is:",str.length)

console.log(str[0])

str[0]="D";
console.log(str)

//InterPollation of String
let c=20;
console.log("value is :",(c+1))
console.log(`value is :${c}+1`)

