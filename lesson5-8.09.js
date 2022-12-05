// let a = 10

// Ключевое слово return позволяет вернуть вместо undefined произовльное значение
// Произвольное значение мы можем увидеть, если результат выполнения функции поместим в метод console.log() 



// function hanlder(){
//   if (a > 10){
//     return true
//   } else {
//     return false
//   }
// } 
                        // Аналогичная функция, только короче
// function hanlder(){ 
//   return a > 10
// }

// hanlder()
//  if (hanlder()){
//   console.log('тру')
//  }

// console.log(hanlder())


// function sqrt(num){
//   return num ** 2
// }

// let sqrt = function(num){
//   return num ** 2
// }

// стрелочная функция

// let sqrt = (num) => num ** 2                   

// console.log(sqrt(5))


// Задание 1

// Напишите функцию typeData(), который получает параметр произвольного типа и возвращает результат 
// согласну примеру:
//   typeData('Текст')
// Результат:
//   Текст - это string

// Пример 2: 
//   typeData(2)
// Результат:
//   2 - это number

// Зфдание 2
// Написать решение используя все три подхода инициализации функции

// function typeData(data){
//   return `${data} - это ${typeof(data)}`
// }

// let typeData = function(data){
//   return `${data} - это ${typeof(data)}`
// }

// let typeData = (data) => `${data} - это ${typeof(data)}`

// console.log(typeData('строка'))
// console.log(typeData(1))
// console.log(typeData(true))

// let a = 'Привет'
// let b = 'мой'
// let c = 'друг'

// console.log(a+', '+b+' '+c+'!')
// console.log(`${a}, ${b} ${c}!`)

// Задача 3

// Напишите функцию checkEven(), которая передают аргумент строкового типа по условию:
// Если длина строки имеет четное значение - функция должна вывести в консоль значение true
// В противном случае - false

// Пример: checkEven('Привет')

// Ответ: true


// Решение задачи 3 (1 способо)
// function checkEven(string){
//   if (string.length % 2 == 0){
//     console.log('true')
//   } else {
//     console.log('false')
//   }
// }

// checkEven('привете')

// 2-ой способ
// function checkEven(string){
//   console.log(string.length % 2 == 0)
// }

// 2 способ (стрелочные функции)
// let checkEven = (string) => console.log(string.length % 2 == 0)


// function stringToNumber(string, onOk, onError){
//   if (typeof(string) != 'string'){
//     onError('Введенное значение не строка!')
//     return;
//   }
//   if (!isNaN(+string)){
//     onOk(+string)
//   } else {
//     onError('Введенное строка не преобразовывается в число!')
//   }
// }

// function printNumQuad(num){
//   console.log(num**2)
// }

// function logError(message){
//   console.log(message)
// }

// stringToNumber(5,printNumQuad, logError)

// Логическое операторы
// && (Логика И)
// || (Логика ИЛИ)

// let a = 10
// let b = 20

// console.log(a > 9 && b < a)
         // true  &&  true
// Если логический оператор && встретить хоть 1 FALSE, то реузльтат всего сравнения будет FALSE. 
// Если && не найдет false, то ответ выражения будет TRUE

// console.log(a > 9 || b >= 20 && b < a) true
//             true            false

// console.log((a > 9 || b >= 20) && b < a) false
//                   true          false

// Логическое НЕ (!)

// console.log(!true) false

// console.log(!!true) true

// console.log(!!!true) false

// function stringToNumber(string, onOk, onError){
//     if (typeof(string) != 'string'){
//       onError('Введенное значение не строка!')
//       return;
//     }
//     if (!isNaN(+string)){
//       onOk(+string)
//     } else {
//       onError('Введенное строка не преобразовывается в число!')
//     }
//   }
//   function printNumQuad(num){
//     console.log(num**2)
//   }
//   function logError(message){
//     console.log(message)
//   }
//   stringToNumber(5,printNumQuad, logError)