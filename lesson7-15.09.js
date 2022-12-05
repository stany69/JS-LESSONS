// let myObj = new Object({}) - не используется
​
// let myObj = {
//   name: 'Tigran',        
//   lastName: 'Movsisyan',
//   age: 29,
//   jobStatus: false
// }
​
// console.log(myObj.lastName)  обращение к кокнертному сво-ву через объект myObj
// ------------------------------------------------------
// let myObj = {
//   name: 'Tigran',
//   lastName: 'Movsisyan',
//   age: 29,
//   jobStatus: false
// }
// myObj.age = '19'       изменение значения сво-ва
// myObj.growth = 189     добавление нового сво-ва
// delete myObj.jobStatus    удаление сво-ва объекта 
// ------------------------------------------------------
// Сравнение объектов
​
// let myObj1 = {
//   name: 'Tigran',
//   lastName: 'Movsisyan',
//   age: 29,
//   jobStatus: false
// }
​
// let myObj2 = myObj1  создание дополнительной ССЫЛКИ к объекту myObj1
​
// myObj1.age = 10
// delete myObj1.jobStatus  изменения коснутся так же myObj2
​
// console.log(myObj2,myObj1)
​
// ------------------------------------------------------
//                            пример инициализации функции (метода), который 
//                            повторяет функционал метода Math.floor()
// myObj.sayHi = function(n){     
//   let result = parseInt(''+n)
//   return result + 1
// }
​
// console.log(myObj.sayHi(10.000))
​
​
// ------------------------------------------------------
// Цикл в объектах
​
// let myObj = {
//   name: 'Tigran',
//   lastName: 'Movsisyan',
//   age: 29,
//   jobStatus: false
// }
​
// 
// }for (let i in myObj){     выводит все ключи объекта myObj
//   console.log(i)
​
// for (let i in myObj){
//   console.log(myObj[i])    выводит все занчения объекта myObj
// }
​
// ------------------------------------------------------
// Методы объектов ч1
​
// let myObj = {
//   name: 'Tigran',
//   lastName: 'Movsisyan',
//   age: 29,
//   jobStatus: false
// }
​
// let a = Object.keys(myObj)     Object.keys() формирует массив из ключей объекта
​
// let a = Object.values(myObj)   Object.values() формирует массив из значений объекта
​
// let a = Object.entries(myObj)  Object.entries формирует массив элементы которого представляюся в виде вложенного массива с парой ключ - значение
// console.log(a)
​
// ------------------------------------------------------
// Методы объектов ч2
​
// let obj1 = {
//   name: 'Tigran',
//   lastname: 'Petrov'
// }
​
// let obj2 = {
//   lastname: 'Movsisyan'
// }
​
// let newObj = Object.assign(obj1, obj2)      Object.assign позволяет объединить два объекта, создавая новый объект с новой ссылкой 
// console.log(newObj)
​
// Пример использования 2
​
// let obj1 = {
//   name: 'Tigran',
//   lastname: 'Petrov'
// }
​
// let newObj = Object.assign(obj1, {})      Object.assign в том числе используется дл того чтобы скопировать новый объект и сформировать отдельную ссылку
// console.log(newObj)
// ------------------------------------------------------
​
// console.log(Object.is(1,1))  true  Object.is аналогичен строгому сравнению ===, но при этом имеет ряд особенностей
// console.log(1 === 1)         true
​
// console.log(Object.is(NaN,NaN)) true
// console.log(NaN === NaN)        false
​
// console.log(Object.is(-0,0))    false
// console.log(-0 === 0)           true
// ------------------------------------------------------
// Задача 1
// В программе заданы две переменные article и author, которые содержат объекты. 
// Объект article содержит информацию о статье, а author — об авторе. 
// Сформируйте новый объект, который содержит свойства объектов article и author. 
// Результат выведите в консоль.
​
// Пример значений переменных:
​
// let article = {
//     title: "Загадки дачного огурца", 
//     text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
// }
// let author = {
//     name: "Ричард М.В.",
//     age: 43
// }
​
// Пример результата:
​
// let article = {
//     title: "Загадки дачного огурца", 
//     text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
//     name: "Ричард М.В.",
//     age: 43
// }
// Решение:
​
// let article = {
//     title: "Загадки дачного огурца", 
//     text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
// }
// let author = {
//     name: "Ричард М.В.",
//     age: 43
// }
​
// let article2 = Object.assign(article, author)
// console.log(article2)
​
// ------------------------------------------------------
// Задача 2
// Напишите программу, которая выведет в консоль все значения элементов объекта someObj, 
// игнорируя строки.
​
// Пример занчения переменной:
// let someObj = {
// 	char1: 1,
// 	char2: '2',
// 	char3: 3,
// 	char4: '4',
// 	char5: '5',
// 	char6: 6,
// }
​
// Пример результата:
​
// 1
// 3
// 6
​
// Решение
​
// let someObj = {
// 	char1: 1,
// 	char2: '2',
// 	char3: 3,
// 	char4: '4',
// 	char5: '5',
// 	char6: true,
// }
​
// for (let i in someObj){
//   if (typeof someObj[i] == 'number'){
//     console.log(someObj[i])
//   }
// }
// ------------------------------------------------------
// Задание 3 (ДОП ЗАДАНИЕ) PS: Решение можно отправить в лс слака
​
// Доработайте решение 2 задания, изменив условие:
// Выведите значение ключей, цифра в конце которых 
// делится на 2 без остатка.
​
// Пример значений переменной:
// let someObj = {
// 	someChar1: 1,
// 	char2: '2',
// 	char3: 3,
// 	someChar4: '4',
// 	char5: '5',
// 	veryBigShar6: 6,
// }
​
// Пример результата:
​
// char2
// someChar4
// veryBigShar6









