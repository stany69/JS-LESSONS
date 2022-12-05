
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


//console.log(newPhones)