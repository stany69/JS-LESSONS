

// console.log('inital log')

// Плохой пример асинхронности (большая вложенность)
// setTimeout(()=>{
//     console.log('data...')

//     let data = [1,3,4]

//     setTimeout(()=>{
//         data = quad(data)
//         setTimeout(()=>{
//             console.log('init...', data)
//         })
//     },2000)
// }, 2000)

// --------------------------------
// Хороший пример (отсутствие вложенности) 

// let promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log('data...')
//         let data = [1,3,4]
//         resolve(data)
//     }, 2000)
// })

// let promise2 = promise.then((data)=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             data = quad(data)
//             resolve(data)
//         },2000)
//     })
// })

// promise2.then(loadData => {
//     console.log('init...', loadData)
// })


// function quad(array){
//     array = array.map(elem => elem ** 2)
//     return array
// }

// ------------------------
// Функция timesleep()

// let timesleep = (ms) => new Promise(res => setTimeout( ()=> res(), ms))

// timesleep(2000).then(()=> console.log('2 секунды'))
// timesleep(5000).then(()=> console.log('5 секунд'))


// ----------------------------
// Методы Promise
// метод all ожидает выполнение всех примосов в аргументе в виде массива

// Promise.all([timesleep(2000), timesleep(5000)]).then(()=> console.log('Все промисы выполнены!'))

// метод race выполняет than для каждого указанного промиса
// Promise.race([timesleep(2000), timesleep(5000)]).then(()=> console.log('Все промисы выполнены!'))

// -------------------------------------------------
// async, await директивы

let timesleep = (ms) => new Promise(res => setTimeout( ()=> res(), ms))

// let url = 'https://jsonplaceholder.typicode.com/todos'

// let fetchData = ()=> {
//     return timesleep(2000)
//     .then(()=> fetch(url))
//     .then((res)=> res.json())
// }

// fetchData()
// .then( data => console.log(data))
// ------------------------
// Аналогичный код с async и await

async function fetchAwait(){
   await timesleep(2000)
   let res = await fetch(url)
   let data = await res.json()
   console.log(data)
}

fetchAwait()