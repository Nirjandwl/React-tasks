// Create an array colors with 5 color names and log the third element.
let colorArr = ["red","blue",'pink','green','gray']
console.log(colorArr[2])

// Create an object book with properties title, author, pages, and publishedYear.
const book = {
    title:"The Life",
    author:"Nirjan Duwal",
    pages: 20,
    publishYear: 2020
}
console.log(book)

// Add a new property isRead: true to an existing book object immutably (return new object).
const newBook = {...book, isRead: 'true'}
console.log(newBook)

// Create an array of 3 objects, each representing a student with name and grade.
const stuArr = [{name: "Nirjan",grade:12},{name: "Milan",grade:13},{name: "Kabi",grade:13}]
console.log(stuArr)


// Create a nested object company with properties name, location, and employees (an array of names).
const companyObj = {
    name:"ABC",
    location:"Bhaktapur",
    employe : ["Nir","Ram"]
}
console.log(companyObj)

// From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.
const numArr = [10, 20, 30]
const newNum = [...numArr]
const res=newNum.map((ele)=>{
    return ele+5
})
console.log(res)

// Create an object car and add a new property color immutably.
const car = {
    name:"Ford"
}
const newCar = {...car, color : "White"}
console.log(newCar)


// Create an array shoppingList and add a new item at the beginning immutably.
const shopArr = ["Biscuit","chips"]
const newShop = ["Lays",...shopArr]
console.log(newShop)

// Create an object profile with nested address object containing city and country.
const profile ={
    address:{
        city: "Bhaktapur",
        country: "Nepal"
    }
}
console.log(profile)

// From an array of objects products, create a new array with only name and price properties.
const proArr = [{name:"Biscuit",price:200},{name:"Cream",price:2300}]
const proName = proArr.map((ele,ind)=>{
    return ele.name
})
console.log(proName)
const proPrice = proArr.map((ele,ind)=>{
    return ele.price
})
console.log(proPrice)