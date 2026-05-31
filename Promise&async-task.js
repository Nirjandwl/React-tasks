
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ name: "Dipak", age: 26 })
//         }, 2000)
//     })
// }
// // async function
// async function showUser() {
//     const user = await getUser()  
//     console.log(user) 
// }
// showUser()



// create a promise
// const orderPizza = new Promise((resolve, reject) => {
//     const ingredientsAvailable = false 
//     if (ingredientsAvailable) {
//         return resolve("Pizza is ready 🍕")
//     } else {
//         return reject("Sorry, no ingredients 😢")
//     }
// })
//     .then(mes => {
//         console.log(mes) // Pizza is ready 🍕
//     })
//     .catch(error => {
//         console.log(error) // if ingredients were false
//     })
//     .finally(() => {
//         console.log("Order process finished")
//     })


function getData(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            let data = false
            if(data) {
                console.log("data received")
                resolve("success")
            }
            else {
                reject("unsuccess")
            }
        },2000)
    })
}
async function show(){
    try{
        const msg = await getData()
        console.log(msg)
    }
    catch(error) {
        console.log(error)
    }
    
}
show()