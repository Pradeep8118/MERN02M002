//Operator
//Arithmatic Operator
//1.Addition (+)

let a = 5;
let b=30;
console.log(a+b) //50
console.log(a-b)//10
console.log(a*b)//600
console.log(a/b)//0.66

console.log(a%2)//1
console.log(a**b)//25

console.log(a++)//5
console.log(++a)//7

// console.log(b++)//30
// console.log(++b)//32

console.log(b--)//32
console.log(--b)//28

console.log("string"+30)//string30
console.log(20+30+"string")//50string
console.log(true+"string")//truestring
console.log("30")//30(string format)
console.log(+"30")//30(number format)
console.log(+"30"+1)//31
console.log(+"text")//Nan
console.log(typeof +"text")//number
console.log(typeof typeof +"text")//string
console.log(+true)//1
console.log("20"+"30")//2030
console.log("20"+ +"30"*2)//2060
// console.log("20"++)//
let c = 40;
c +=2
console.log(c)//40
c-=3
console.log(c)//39

let st1="xyz"
let st2="xyz"
console.log(st1==st2)//false
console.log(st1===st2)//true

let n1="20";
let n2=20;
//normal comparision
console.log(n1==n2)//true
//strict comparision
console.log(n1===n2)//false

console.log(2<9)//true
console.log(2>9)//false

let e="true"
console.log(true !=e)//true

//Logical operator
//logical AND

console.log((2<4)&&(3<5))//true
console.log((2>4)&&(3<5))//false

let f=3;
console.log((2<4) && (f++<5));//4
console.log(f);//true

let q=3;
console.log((2>4) && (f++<5));//false
console.log(f);//4


console.log(!false);//true

