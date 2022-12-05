// function declaration
// console.log('world')
// function sayHi(){
//     console.log('Privet')
// }
// sayHi()

// //function exprecion

// let sayHi = function {
//     console.log('Privet')

// }
// sayHi()
//absoliutno ednakvi fuct.obiaveni po razli4en na4in

// let handler = function(a,b){
//     console.log(a+' '+b)
// }
// handler('Privet','drug')
// handler(1,2)

// let handler = function(){
//     let result = 10;
//     return result
// }
// let finish = handler(handler)
// console.log(finish)

// function avg (a,b,c){
//     return (a+b+c)/3
// }
// console.log(avg(1,2,3))

// В программе объявлена переменная data, в которой записано строковое значение. Напишите функцию getNumber(data), которая преобразовывает строку в число по следующему правилу:

// если переменная data содержит не число, функция должна вернуть численное значение 0;
// если переменная data содержит число, например "123", то функция возвращает числовое значение 123.
// Вызовите эту функцию и выведите результат в консоль.

// Пример значений переменных:
// let data = "привет"

// Пример результата:
// 0

// let data = '1d23'
// function getNumber(data){
//     if (+data == NaN){
//         return 0
//     }
    
//     else {
//        return + data
//     }

// }
// let result = getNumber()
// console.log(typeof result)

// function ten (number){
//     for (let i = 2; i <=number; i+=2) {
//         console.log(i)
//     }
// }
// ten(18)

// Напишите функцию typeData(), который получает параметр произвольного типа и возвращает результат 
// согласну примеру:
//   typeData('Текст')
// Результат:
//   Текст - это string

// Пример 2: 
//   typeData(2)
// Результат:
//   2 - это number
// let a = 'text'
// function typeData(a){
//     return (typeof(a))
// }
// console.log(typeData)

// let typeData = function(a){
//     return typeof(a)
// }
// console.log(typeData)

// let typeData = (data)=> `${data} - this is ${typeof(data)}`

// console.log(typeData('stroka'))
// console.log(typeData(123))
// console.log(typeData(true))

// Напишите функцию checkEven(), которая передают аргумент строкового типа по условию:
// Если длина строки имеет четное значение - функция должна вывести в консоль значение true
// В противном случае - false

// Пример: checkEven('Привет')

// Ответ: true
let checkEven = function(thing){
    if(thing.length % 2==0)
    console.log(true)
    else {
        return false
    }
}
checkEven('privet')