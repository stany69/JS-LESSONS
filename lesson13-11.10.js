

let array = [1,2,3,4,5]

let result = array.reduce((sum,elem)=>sum*elem)
console.log(result)

let array1 = [
    {arr: [1,2,3,4]},
    {arr: [5,4,3,2]},
    {arr: [2,3,4,1]},
]

let result1 = array1.reduce((accum,value)=>{
   let sumElem= value.arr.reduce((accum,value)=> accum+value)
        
    return accum+sumElem
},0)
console.log(result1)


class Object2 {
    static values(obj) {
        let array = []
        for (let i in obj){
            array.push(obj[i])
        }
        return array
    }
}

let obj = new Object({name: 'Tigran', salary: 1000})

console.log(Object.values(obj))
console.log(Object2.values(obj))

// Object.values()
// Object.entries()
// Object.keys()

// class Object2 {
//     static values(obj) {
//         let array = []
//         for (let i in obj){
//             array.push(obj[i])
//         }
//         return array
//     }

//     static entries(obj){
//         let array =[]
//         for(let in obj)
//         array.push(obj)
//     }
//     return array
// }