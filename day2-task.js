// const user = {
//     name : "Nirjan",
//     login(){
//         console.log(`${this.name}`)
//     }
// }
// user.login()


// const user = {
//     name: "Nirjan",

//   showName() {
//     console.log(this.name);
//   }
// };

// function simulateButtonClick(callback) {
//   callback();
// }

// // // this is lost
// // simulateButtonClick(user.showName);

//   import {URL} from "./config.js"
// console.log(URL)

// import {formatCurrency, generateRandomId, getTodayDate} from "./config.js"
// formatCurrency()
// generateRandomId()
// getTodayDate()



// class Product {
//   constructor(name,price) {
//     this.name = name
//     this.price = price
//   }
//   getinfo(){
//       console.log(`My name is ${this.name}`)
//     }
// }
// const obj= new Product("Nirjan",25)
// obj.getinfo()


// class FoodProduct extends Product {
//   constructor(expirydate){
//     super("FoodProduct")
//     this.expirydate=expirydate
//   }
//   gett(){
//     console.log(`my name is  and expiry date is ${expirydate}`)
//   }
// }
// let pro = new FoodProduct("jan25")
// pro.gett()

// function getAppSettings() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         theme: "dark",
//         language: "English"
//       });
//     }, 2000);
//   });
// }

// getAppSettings()
//   .then((settings) => {
//     console.log("Theme:", settings.theme);
//     console.log("Language:", settings.language);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  let fetchUsers=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(["Nirjan","kabi"])
      }, 1000);
    })
  }
async function fell(){
  let prom = await fetchUsers()
  console.log(prom)
}
fell()