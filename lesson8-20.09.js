//Рассчитать итоговую сумму всех покупок.

// let goods = {
// 	name1: 'Арбуз',
// 	price1: 100,
// 	name2: 'Вишня',
// 	price2: 35,
// 	name3: 'Яблоко',
// 	price3: 45,
//             name4: 'Клубника',
// 	price5: 250,
// }
// for(let i in goods){
//     let sum=''
//     if(i[+i])
//     console.log(goods[i])
// }

// let someObj = {
//     name:'Tigran',
//     lastName:'Movsisyan'
// }
// function myMethod(obj){
//     let newArray = []
//     for (let i in obj){
//         newArray.push(obj[i])
//        return newArray
//     }
//     console.log(someObj)
// }

// Разбор ДЗ 
// Задание 3
// Создайте функцию getRandomChar(word), которая в качестве 
// аргумента передает строку произвольной длины и возвращает случайный символ строки. 

// Примечание: 
// В коде предусмотреть возможность вывода последнего символа в том числе. 
// Убедиться в том, что функция не возвращает undefined (проверить выполнение несколько раз)

// Пример: 
// console.log(getRandomChar(‘меню’))

// Результат: ‘н’

// Решение

// function getRandomChar(string){
//   let randomIndex = Math.floor(Math.random() * string.length)
//   return string[randomIndex]
// }

// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))
// console.log(getRandomChar('меню'))

// Задача 4 

// Напишите функцию getRandomChars(word,n), которая в качестве аргумента принимает строку и число. 
// Реализуйте функционал, который вернет в результате выполнения функции n рандомных символом строки word.
	
// 		Пример: 
// console.log(getRandomChars(‘меню’, 3))
// console.log(getRandomChars(‘меню’, 5))

// Решение

// function getRandomChar(string, n){
//   let result = ''
//   for (let i = 0; i < n; i++){
//     let randomIndex = Math.floor(Math.random() * string.length)
//     result += string[randomIndex]
//   }
//   return result
// }

// console.log(getRandomChar('меню', 1))
// console.log(getRandomChar('меню', 2))
// console.log(getRandomChar('меню', 3))
// console.log(getRandomChar('вертолет', 50))


// Создайте функцию checkEvenChar(word), которая в качестве аргумента 
// передает строку с произвольной длиной и реализует следующие вычисления:
// если из длины переменной word вычисляется квадратный корень (без дробной части) - 
// функция должна возвращать ответ 1, в противном случае - 0 

// Пример: 
// console.log(checkEvenChar(‘меню’))

// function checkEvenChar(string){
//   if (Math.sqrt(string.length) % 1 == 0){
//     return 1
//   } else {
//     return 0
//   }
// }


// Задача 1

// Создайте функцию функцию getQuadCssProps(props), которая в качестве 
// аргумента принимает значение css свойства и возвращает квадрат этого числа 
// по следующему примеру ниже. 
// Если в результате преобразования числа вычисляется NaN - необходимо вернуть строку ‘none’

// Пример:
// console.log(getQuadCssProps(‘5px’))
// console.log(getQuadCssProps(‘px5’))

// Результат: 
// ‘25px’
// ‘none’

// function getQuadCssProps(string){
//   if (isNaN(parseFloat(string))){
//     return 'none'
//   } else {
//     return (parseFloat(string) ** 2)+'px'
//   }
// }

// console.log(getQuadCssProps('5px'))
// console.log(getQuadCssProps('px100px'))

// ------------------------------------------------------
// Задание 3 (ДОП ЗАДАНИЕ из слака) PS: 

// Доработайте решение 2 задания, изменив условие:
// Выведите значение ключей, цифра в конце которых 
// делится на 2 без остатка.

// Пример значений переменной:
// let someObj = {
// 	someChar1: 1,
// 	char2: '2',
// 	char3: 3,
// 	someChar4: '4',
// 	char5: '5',
// 	veryBigShar6: 6,
// }

// Пример результата:

// char2
// someChar4
// veryBigShar6


// let someObj = {
// 	someChar1: 1,
// 	char2: '2',
// 	char3: 3,
// 	someChar4: '4',
// 	char5: '5',
// 	veryBigShar6: 6,
// }


// for (let i in someObj){
//   if (+i[i.length-1] % 2 == 0){
//     console.log(i)
//   }
// }

// console.log(Object.keys(someObj))        Все ключи объекта в массиве

// console.log(Object.values(someObj))      Все значения объекта в массиве​
// console.log(Object.entries(someObj))     Все ключи и занчения объекта в массиве

// Задача из лекции ​
// Рассчитать итоговую сумму всех покупок.
// Ответ: 430

// let goods = {
// 	name1: 'Арбуз',
// 	price1: 100,
// 	name2: 'Вишня',
// 	price2: 35,
// 	name3: 'Яблоко',
// 	price3: 45,
//   name4: 'Клубника',
// 	price5: 250,
// }

// let sum = 0​
// for (let i in goods){
//   if (typeof goods[i] == 'number'){
//     sum = sum + goods[i]
//   }
// }

// console.log(sum)​​

// Введение в массивы
// let array = [1,'строка',true,{name: 'Tigran'},[1,2,3]]​
// console.log(array.length)  - длина массива
// console.log(array[4][1])   - элементы индексируются также как и строки! (Можно использовать двойную индексацию)
// console.log(typeof array)  - typeof покажет тип object

// array[3] = 4               
// console.log(array)​
// array[3] = 4
// array[5] = 'это новый элемент'
// array[array.length] = 'length определит новый индекс'
// console.log(array)
// console.log(array.length)

// В массиве можно создавать и изменять существующие элементы как в объектах
// также присутствует сво-во length которое показывает длину массва (ко-во элементов)

// Методы взаимодействия с элементами
// pop    - удаляет элемент в конце массива
// push   - добавляет элемент в конец массива
// shift  - удаляет элемент в начале массива
// unsift - добавляет элемент в начало массива

// let a = [1,2,3]

// При удалении (с конца) указывать аргумент не требуется
// a.pop()
// console.log(a)

// Добавляем число 4 в конец массива
// a.push(4)
// console.log(a)​
// Удаление с начала (Операция использует больше производительности)
// a.shift()
// console.log(a)

// Добавляем с начала новый элемент (Со сдвигом индексов)
// a.unshift(4)
// console.log(a)​
// Используя цикл, сформируйте массив list со значениями от 10 до 20. 
// Выведите значение переменной list в консоль.

// Решение задача ​
// let a = []

// for (let i = 10; i <= 20; i++){
//   a.push(i)
// }​
// console.log(a)

// Цикл for для массива​
// 1 подход

// let a = ['раз','два','три']​
// for (let i = 0; i < a.length; i++){
//   console.log(a[i], i)
// }

// 2 подход​
// let a = ['раз','два','три']

// for (let i of a){
//   console.log(i)
// }​
// Задача от Яниса 
// Написать функцию, которая в качестве аргумента принимает массив и индекс, которые необходимо заменить

// function changeValue(array, index, value){
//   array[index] = value
//   return array
// }
// let a = [1,2,3]
// let b = changeValue(a, 1, 'два')​
// console.log(b)

// Напишите аналог метода Object.values() в виде функции myMethod(), 
// которая в качестве аргумента передает объект
// В результате фнкция должна вернуть массив из значений объектов​
// let someObj = {
//     name: 'Tigran', 
//     last_name: 'Movsisyan'
//   }

// function myMethod(obj){
//   let newArray = []
//   for (let i in obj){
//     newArray.push(obj[i])
//   }
//   return newArray
// }​
// console.log(myMethod(someObj))