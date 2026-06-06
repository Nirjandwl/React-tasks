// Use map to double all numbers in [1, 2, 3, 4, 5].
const numArr = [1, 2, 3, 4, 5]
const dble = numArr.map((ele)=>{
    return 2*ele
})
console.log(dble)

// Use filter to get all even numbers from [1, 2, 3, 4, 5, 6].
const arr1 = [1, 2, 3, 4, 5, 6]
const even = arr1.filter((ele)=>{
    return ele%2==0
})
console.log(even)

// Use reduce to calculate the sum of [10, 20, 30, 40].
const arr2 = [10, 20, 30, 40]
const sum = arr2.reduce((acc,ele)=> {
    return acc+ele
})
console.log(sum)

// Use find to get the first object with age > 18 from an array of user objects.
const arr3 = [{name:"Nir",age:12},{name:"kabi",age:30},{name:"Ram",age:23}]
const under = arr3.find((u)=>{
    return u.age>18
})
console.log(under)

// Use forEach to log each element of ["apple", "banana", "orange"] with its index.
const fruits = ["apple", "banana", "orange"]
fruits.forEach((ele,ind)=> {
    console.log(ele,ind)
})

// Use map to extract only names from an array of user objects.
const user = [{name:"Nir",age:12},{name:"kabi",age:30},{name:"Ram",age:23}]
const names = user.map((ele,ind)=>{
    return ele.name
})
console.log(names)

// Use filter to get products with price < 100 from an array of product objects.
const product =  [{name:"Potato",price: 200},{name:"Chips",price: 50},{name:"Coco",price: 20}]
const getPro = product.filter((ele)=>{
    return ele.price<100
})
console.log(getPro)


// Use reduce to find the maximum value in an array of numbers.
const max = [20,30,60,1,3]
const num = max.reduce((acc,cur,ind)=>{
    return cur>acc?cur:acc
})
console.log(num)