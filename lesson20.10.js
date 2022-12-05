

HW (15.10)
// task3

// class Delivery {
//     constructor(name, phone){
//         this.name = name
//         this.phone = phone
//     }
//     get validPhone() {
//         return (this.phone[0] != '+') ? false : true
//     }
//     set changePhome(phone){
//         return this.phone = phone
//     }
// }

// let deliveryName = new Delivery('Tigran', '+9327409890324')

// deliveryName.changePhome = '+9083485093578'
// console.log(deliveryName.validPhone)

// task1

// let order = { 
//     productName: "Велосипед", 
//     costomerName: "Саша", 
//     salesName: "Петя", 
//     totalPrice: 15000 
// } 

// let descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice')
// console.log(Object.entries(descriptor))


// ----------------------------------------------
// Date (lesson2)

// Задача 1. 
// getDay()
// Напишите финкцию getWeekDay(date), которая получает дату в 
// аргументе и в зависимости от дня недели в консоль сформирует ответ по примеру:

// Пример:
// let date = new Date('2022-10-18 19:00:00 -04:00')
// getWeekDay(date)

// Результат:
// 'Сегодня вторник'
//------------------------
// Пример 1
// let date = new Date('2022-10-16 19:00:00 GMT')
// function getWeekDay(date){
//     if (date.getDay() == 0 ){
//         console.log('сегодня воскресенье')
//     } else if (date.getDay() == 1 ){
//         console.log('сегодня понедельник')
//     } else if (date.getDay() == 2 ){
//         console.log('сегодня вторник')
//     } else if (date.getDay() == 3 ){
//         console.log('сегодня среда')
//     } else if (date.getDay() == 4 ){
//         console.log('сегодня четверг')
//     } else if (date.getDay() == 5 ){
//         console.log('сегодня пятница')
//     } else if (date.getDay() == 6 ){
//         console.log('сегодня суббота')
//     }
// }
//------------------------
// Пример 2
// let date = new Date('2022-10-18 19:00:00 GMT')
// function getWeekDay(date){
//     let days = ["воскресенье", "понедельник","вторник","среда","четверг","пятница","суббота"]
//     console.log(`Сегодня ` + days[date.getDay()] )
// }

// getWeekDay(date)

// -------------------------
// Задача 2.
// Напишите функцию endDay(), которая возвращает количество секунд до конца текущего дня.

// function endDay(){
//     let currentDate = new Date()
//     let nexDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+1)
//     let result = (nexDate - currentDate ) / 1000
//     console.log(result)
// }

// endDay()

// console.log(typeof (new Date()  -  10000000000))    number
// console.log(typeof (new Date()))         


// ---------------------------
// Из даты в строку
// let date = new Date()

// let string = date.toLocaleString()
//  Дата + момент времени
// 10/20/2022, 11:17:52 PM


// let string = date.toLocaleDateString()
// Дата 
// 10/20/2022

// let string = date.toLocaleString('ru-RU')
// console.log(string)

// ------------------------------------
// Методы строк 

// concat() - метод, конкатенирующий строки
// let a = 'Привет'
// let b = 'друг'
// let result = a.concat(', ', b)
// console.log(result)


// repeat(n) - повторить n-ое раз строку
// let a = '_-'
// console.log(a.repeat(50))


// includes(подстрока) - определение подстроки в строке
// let a = 'Привет мой друг'
// let result = a.includes('мой')       -- true
// let result = a.includes('друг')      -- true
// let result = a.includes('мой_')      -- false 
// console.log(result)

// startWith() проверяет начинается ли строка на подстроку, указанную в качестве аргумента метода
// let a = 'Привет мой друг'
// let result = a.startsWith('Привет')      -- true
// let result = a.startsWith('друг')        -- false
// let result = a.startsWith('мой')         -- false
// console.log(result)

// endWith() проверяет заканчивается ли строка на подстроку, указанную в качестве аргумента метода
// let a = 'Привет мой друг'
// let result = a.endsWith('друг')             -- true
// let result = a.endsWith('мой')              -- false
// let result = a.endsWith('Привет')           -- false
// console.log(result)

// indexOf() lastIndexOf()
// let a = 'Привет мой мой друг'
// let result = a.indexOf('мой')                7
// let result = a.lastIndexOf('мой')            11 
// console.log(result)

// Задача. 
// Задан формат даты в переменной dates. 
// '2022/10/18' - американский
// '2022.10.18' - русский

// 1) Напишите программу, которая определит к какой стране относится формат даты
// В качестве ответа вывести сообщение "Формат даты российский"

// let date = '2022.10/18'

// if (date.includes('/')){
//     console.log('Формат даты американский')
// } else if (date.includes('.')){
//     console.log('Формат даты российский')
// }else {
//     console.log('неизвестный формат')
// }