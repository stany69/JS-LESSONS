
// HW (string and date methods)

//-----------------------
//  task1

// let prices = [ 
//     'Цена товара - 1200$', 
//     'Стоимость - 500$', 
//     'Цена не определена', '9999',
//     'Ценовая категория - больше 300$',
//     'Цена за услугу 500 EUR'
// ]

// function getInfo(array){
//     let a = 0
//     let b = 0
//     for (let i = 0; i < array.length; i++){
//         if (array[i].startsWith('Цена')){
//             a++
//         }
//         if(array[i].endsWith('$')){
//             b++
//         }

//     }
//     return {
//         type1: a,
//         type2: b
//     }
// }

// Решение 2

// function getInfo(array){
//     let result = {
//         type1: 0,
//         type2: 0
//     }
//     array.forEach(elem=>{
//         if (elem.startsWith('Цена')){
//             result.type1++
//         }
//         if(elem.endsWith('$')){
//             result.type2++
//         }
//     })
//     return result
// }

// console.log(getInfo(prices))

//-------------------
// taks1

// function checkDate(){
//     let crDate = new Date()
//     let date = new Date(crDate.getFullYear(), crDate.getMonth()+1)
//     let result = (date.getTime() - crDate.getTime()) / (1000*60*60*24)
//     return result
// }

// console.log(checkDate())

// --------------------
// task2
// function isItFridayToday(){
//     let date = new Date() 
//     let day = date.getDay()
//     if (day == 5){
//         console.log('Сегодня пятница!')
//     } else if (day == 6){
//         console.log('Пятница была вчера')
//     } else if (day == 4){
//         console.log('Пятница будет завтра!')
//     } else {
//         console.log(`Пятница будет через ${5-day} ${(day == 0) ? 'дней' : 'дня'}`)
//     }
// }
// isItFridayToday();


// Задача 1
// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру:

// let arrays = [
//     '89840959944exampleonemain@mail.ru', 
//     '+79840959933forreason@yandex.net', 
//     'somemail@mail.ru', 
//     '89840959900example@gmil.ru', 
//     '+79840959911', 
//     'grandthere@mail.ru', 
//     'jetpackfor@gmail.ru', 
//     '89840959922some@yandex.com', 
// ]

// Номер + почта
// Почта
// Номер

// Результат: 
// ['89840959944','+79840959933','89840959900','+79840959911','89840959922']
// ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']


// let phones = []
// let emails = []

// for (let elem of arrays){
//     if ((elem.startsWith('+7') || elem.startsWith('8')) && elem.includes('@')){
//         phones.push(elem.substring(0,(elem.startsWith('+')) ? 12 : 11 ))
//         emails.push(elem.replace(elem.substring(0,(elem.startsWith('+')) ? 12 : 11 ), ''))
//     } else {
//         if (elem.includes('@')){
//             emails.push(elem)
//         } else {
//             phones.push(elem)
//         }
//     }
// }

// console.log(emails)
// console.log(phones)

// Регулярные выражения

// let string = '1000000f0f000'

// let reg = /\d{3}$/ 

// let result = string.match(reg)

// console.log(result)

// Решение с регуляркой:

// let arrays = [
//     '89840959944exampleonemain@mail.ru', 
//     '+79840959933forreason@yandex.net', 
//     'somemail@mail.ru', 
//     '89840959900example@gmil.ru', 
//     '+79840959911', 
//     'grandthere@mail.ru', 
//     'jetpackfor@gmail.ru', 
//     '89840959922some@yandex.com', 
// ]
// ​
// let phones = []
// let emails = []

// for (let elem of arrays){
//     let reg1 = /[+]\d+|\d+/
//     let reg2 = /\D+$/
//     phones.push(elem.replace(reg2,''))
//     emails.push(elem.replace(reg1,''))

// }

// for (let elem of arrays){
//     let reg1 = /[+]\d+|\d+/
//     let reg2 = /\D+$/
//     if (elem.replace(reg2,'') != '' && elem.replace(reg1,'') != ''){
//         phones.push(elem.replace(reg2,''))
//         emails.push(elem.replace(reg1,''))
//     }
// }
// ​
// console.log(phones)
// console.log(emails)







// Tigran
//   10:05 PM
// Конспект сегодняшнего занятия
// Тема: регулярные выражения
// lesson1.11(regexp).js
 
// ------------------------
//  Регулярные выражение
// \w - латинские буквы и цифры
// \d - только цифры 0-9
// \s - только пробел
// \W - НЕ латинские буквы и НЕ цифры _
// \D - НЕ цифры 
// \S - НЕ пробел
// [abcABC123] - пользовательский набор символов
// . - любой знак
//  [.]  - экранирование точки (и любого символа)

// let string = 'hello world'
// let reg = /\w\w\w\w\w\s\w\w\w\w\w/

// let result = string.match(reg)
// console.log(result)

// Квантификаторы
// {n}  - n-ое количество вхождений
// {n,m} - диапазон вхождений от n до m
// {n,}  - n или много
//  +    - аналог {1,}
// {0,}  - 0 или много
//  *    - аналог {0,}
//  ?    - аналог {0,1}

// ---------------------------
//  ^    -  начало подстроки
//  $    -  конец подстроки

// let string1 = 'tigran@gmail.com.ru'
// let string2 = 'some@mail.com'

// let reg = /^\w+[@]\w+[.]\w+[.]?\w*$/
// let result1 = string1.match(reg)
// let result2 = string2.match(reg)

// console.log(result1[0])
// console.log(result2[0])



// Задача 1
// Задан массив phones. Найдите номера телефонов, которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в новый массив newPhones.

// let phones = [
//     '4235123.123.123',
//     '453.567.98512345',
//     '23.33.22.34',
//     '567.986.423',
//     '123456.4533',
//     '567.90987.5',
//     '12.3323.321',
//     '1234.566777',
//     '655.432.342'
// ]



// Решение 1
// let newPhones = []
// for (let elem of phones){
//     let regexp = /^\d{3}[.]\d{3}[.]\d{3}$/
//     if (elem.match(regexp)){
//         newPhones.push(elem)
//     } 
// }

// Решение 2
// let regexp = /^\d{3}[.]\d{3}[.]\d{3}$/
// let newPhones = phones.filter(elem => elem.match(regexp) )


// console.log(newPhones)
