// В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите результат в консоль.
// Пример значений переменных:
// let word = "мир"
// Пример результата:
// "рим"
// Решение 1
// let word = "автомобиль"
// let result = ''
// for (let i = word.length - 1; i >= 0; i--){
//   result += word[i]
// }
// console.log(result)
// Решение 2
// let word = "автомобиль"
// let result = word.split('').reverse().join('')
// console.log(result)
// Сформируйте программу, которая проверяет, является ли слово палиндромом.
// Если слово является палиндромом - сформируйте в консоли ответ YES, в противном случае NO
// Пример значений переменных:
// let word = "потоп"
// Пример результата:
// "YES"
// Решение
// let word = "потоп"
// let palindrom = ''
// for (let i = word.length - 1; i >= 0; i--){
//   palindrom += word[i]
// }
// if (word == palindrom){
//   console.log('YES')
// } else {
//   console.log("NO")
// }
// ---------------------------------------------------
//               Функции
// function declaration
// printHello()
// function printHello() {
//   console.log('Добрый день, дорого пользователь!!!')
//   console.log('Надееимся что у вас сегодня хорошее настроение')
// }
// let number1 = 9
// let number2 = 4
// function summ(numb1,numb2){
//   console.log(numb1+numb2)
// }
// summ(number1,number2)
// Глупый калькулятор v2 (Решение через функцию)
// function calc(a,b,sign) {
//   if (typeof(a) == 'number' && typeof(b) == 'number'){
//     if (sign == "+"){
//       console.log(a+b)
//     } else if (sign == "-"){
//       console.log(a-b)
//     } else if (sign == "*"){
//       console.log(a*b)
//     } else if (sign == '/') {
//       if (b == 0) {
//         console.log('на 0 делить нельзя!')
//       } else {
//         console.log(a/b)
//       }
//     } else {
//       console.log('не верно подобран математический знак')
//     }
//   } else {
//     console.log('В переменных a и b содержатся не числа')
//   }
// }
// calc(5,7,'-')
// calc(10,10,'*')
// calc(12,2,'/')
// calc('СТРОКА',7,'-')
// Задача 3
// В программе объявлены две переменные — value и total, в которых записаны числовые значения. Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total. Вызовите эту функцию с value и total в качестве аргументов. Результат работы функции выведите в консоль.
// Пример значений переменных:
// let value = 4
// let total = 80
// Пример результата:
// 5
// Решение:
// let value = 4
// let total = 80
// function getPercent(value ,total) {
//   let result = (value * 100) / total
//   console.log(result+'%')
// }
// getPercent(value,total)
// getPercent(10,75)
// Работать не будет (Локальная область видимости)
// function test() {
//   let string = 'Hello world!'
// }
// test()
// console.log(string)
// Function expression (функция внутри выражения)
// let summ = function calc(a,b){
//   console.log(a+b)
// }
// calc(2,4) ошибка
// summ(2,4)
// let summ = function(a,b){
//   console.log(a+b)
// }
// summ(2,4)
// самовызывающая функция
// (function() {
//   console.log('check')
// })()
// Ключевое слово return
// let check = function(a,b) {
//   return a > b
// } вернет булевый тип (тру или фолс)
// let checkWin = function(a,b){
//   return a > b
//   console.log('Завершение функции')
// } return принудитильено завершает работу функции
//  метол log не будет выполнен.
// Задание 4
// Реализуйте функцию, которая должна вывести в консоль конкатенацию типов данных для переменных firstElem, secondElem и thirdElem.
// Пример результата:
// check(1,2,3)
// =>
// number number number
// Решение
// let check = function(firstElem,secondElem,thirdElem){
//   console.log(`${typeof(firstElem)} ${typeof(secondElem)} ${typeof(thirdElem)}`)
//   console.log(typeof(firstElem) + ' '+typeof(secondElem)+''+typeof(thirdElem))
// }
// check(1,'str',true)





