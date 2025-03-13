
// Arrays 

const myAraay = [0, 1, 2, 3, 4, 5, "End of Array "]
// console.log(myAraay)


// myAraay.forEach( (x) => {
//     if(x==4){
//         console.log(`Value ${x} Found .`)
//     }
//     else
//         console.log(`Value Not Found .`)
// })

// Array Methods

const SuperHero = ["Neil Armstorm", "Elon Musk"]
console.log(SuperHero)

SuperHero.push("Crish Garner")
SuperHero.pop()
SuperHero.unshift(0)
SuperHero.shift()
console.log(SuperHero)


// slice , splice 

const myArr = [0,1,2,3,4]

console.log("A", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)