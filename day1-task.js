// 1) Create two variables, firstName and lastName, and combine them into a greeting message using template literals. Log the message.
let firstName = "Nirjan"
let lastName = "Duwal"
let greetMessage = `Hello, My Name is ${firstName} ${lastName}`
console.log(greetMessage)

// 2) Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.
if (true) {
    let a=10;
    const b=20;
    console.log("a can be access here:",a)
    console.log("b can access here :",b)
}
console.log(a)// not defined
console.log(b)// not defined

// 3) Write an arrow function greet that takes a name and returns "Hello, !". Test it with your name.
let greet = (name) => {
    return `Hello, ${name}`
}
let greeting = greet("Nirjan")
console.log(greeting)

// 4) Write an arrow function multiply that takes two numbers and returns their product. Log the result for 5 and 6.
let multiply = (a,b) => {
    return a*b
}
let multiplyRes = multiply(5,6)
console.log(multiplyRes)


//5)  Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.
const person = {
    name : "Nirjan",
    age : 19,
    country : "Nepal"
}
let { name, country} = person 
console.log(name,country)


//6)  Create an array [10, 20, 30, 40]. Destructure the first two elements into variables and log them.
let arr = [10, 20, 30, 40]
let [first, second] = arr
console.log(first)
console.log(second)

// 7) Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.
let sayHello = (name = "guest") => {
    return name
}
let res1 = sayHello("Nirjan")
let res2 = sayHello()
console.log(res1)
console.log(res2)

// 8) Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.
let sumAll = (...number) => {
    return number.reduce((acc,val)=> {
        return acc+val
    } )
}
let sum = sumAll(1,2,3,4)
console.log(sum)

// 9)Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.
let array1 = [1,2,3]
let array2 = [4,5]
let merge = [...array1,...array2]
console.log(merge)


// 10) Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.
const obj1 = {
    a: 1,
    b: 2
}
const obj2= {
    c: 3,
    d: 4
}
let mergeObj = {...obj1,...obj2} 
console.log(mergeObj)
let {a,d} = mergeObj
console.log(a,d)
