// var country = "Ind"
// var c = 5+6
// console.log(c)
// console.log(5==="5")
// var name="rit" //=== checks the data type also

// function greet(name){
//     console.log("Hello"+name)
// }
// greet("Ritheesh")

// let fruits =["Apple","Banana","Mango"]
// let car = {brand: "tyota", model:"Innova", year:2022}
// console.log(car.brand)

// //console.log(x)
// //var x=5 // undefined
// //let x=5 //causes error
// // called hoisting

// var a=5
// console.log(a)
// a=10
// console.log(a)

// //error
// // const b=10
// // console.log(b)
// // b=15
// // console,log(b)

// let person ={
//     Name: "Rit",
//     city: "Salem"
// }
// for(let key in person){
//     console.log(key)
//     console.log(person[key])
// }

// // let fruits =["apple","banana"]
// // for(let fruits of person)

// var age=21

// age>18?console.log("True") :console.log("False")

// const greets = (name)=>{
//     return `hello,${name}`
// }    
// console.log(greets("Ritheesh"))

// const num=[1,2,3]
// const num1=[4,5,6]
// const num2=[0,...num,4,5,6]
// console.log(num2)

// const person2 = {
//     name:"Arun",
//     age:21
// }
// const upd ={...person2,city:"chennai"}
// console.log(upd)


// //arr destructuring
// const num3 = [1,2,3]
// const [a1,b1,c1] = num3;
// console.log(a1,b1,c1)

// const[fis,,third] = num3;
// console.log(fis,third)

// //obj destructuring

// const obj = {name1: "Rithee", age1:21, city:"Salem"}
// const {name1,age1} = obj
// console.log(name1,age1)


// //Map filter Reduce

// //Map
// const num4 = [1,2,3,4,5]
// const num5 = num4.map(num4=>num4*num4)
// console.log(num4)
// // map creates a variable but for not  map does not change value for changes

// const num6 = num4.filter(num4=>num4%2==0)
// console.log(num6)

// // const sum = num.reduce((acc,curr)
// // =>acc+curr,o
// // )
// // console.log(sum)

// // function sum(...numbe)

// const arr = [1,2,3,4]
// arr.push(5)
// console.log("push1: "+arr)
// arr.push(5,6)
// console.log("push2: "+arr)
// arr.unshift(0,0)
// console.log("unshift:"+arr)
// arr.shift(0)
// console.log("shift: "+arr)

let str1 ="Rit"
let str2 ="eesh"
console.log(str1.concat(",",str2,"!"))
console.log(str1.includes("Rit"))
console.log(str1.indexOf("i"))
console.log(str1.substring("0,5"))