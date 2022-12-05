

// Метод sort

// let array = ['Лопата','Велоспиед','Арбуз','Ягода']

// let query = array.sort()             по возрастанию
// let query = array.sort().reverse()   по убыванию

// ----------------
// let array = [3,4,5,2,1,8,7,6,10,9]
                                                            
// let query = array.sort((currentElem, secondElem)=> currentElem - secondElem )    по возрастанию
// let query = array.sort((currentElem, secondElem)=> secondElem - currentElem )    по убыванию

// let query = array.sort(()=> Math.random()-Math.random())      рандомная сортировка

// ------------------------------------
// Метод every и some
// every проверяет заданнове условие в колбек-функции. Если все элементы удовлетворяют условию - 
// метод сформироует ответ true, в противном случае false

// let hours = [40,42,38,41,44]
// let complitedPlan = hours.every((elem)=> elem >= 40)
// console.log(complitedPlan)

// some проверяет существует ли минимум один элемент, 
// который удовлетворяет условию колбек-функции

// let costs = [1100,960,800,400,150]
// let lowerCost = costs.some((elem) => elem < 200)

// console.log(lowerCost)

// ------------------------------------
// Метод map()
// Метод позволяет изменить каждый элемент массива по правилу, указанному в колбек-функции.

// let prices = [2000,500,80,100,150]
// let newPrices = prices.map(elem => elem * 0.75)
// console.log(newPrices)

// --------------------------
// Задача 1
// В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются 
// объектами с ключами title и completed. Сформируйте новый массив titles, 
// который в качестве значений может хранить свойства title из всех значений массива tasks. 
// Результат выведите в консоль.
// Пример значений переменных:

// let tasks = [
//     {title: "Умыться" , completed: true},
//     {title: "Сделать зарядку" , completed: true},
//     {title: "Приготовить завтрак" , completed: false}
// ]
// Пример результата:

// ["Умыться", "Сделать зарядку", "Приготовить завтрак"]
//  let tasksProp = tasks.map((elem) => elem.title)
//  console.log(tasksProp)

//------------------------------------
// Метод forEach()

// Метод позволяет заменить конструкцию for и for of (метод ничего не возвращает!)

// let toys = ['Лопата','Велоспиед','Арбуз','Ягода']
// toys.forEach((value, index, array) => console.log(value, index, array))

//--------------------------------------
// Метод slice 
// Метод slice копирует элементы в новый массив, указывая в качестве аргумента от n индекса до m индекса (не включительно!)

// let fruits = ['Яблоко','Банан','Апельсин','Груша','Киви']
// let newFruits = fruits.slice(-2)
// console.log(newFruits)

// ---------------------------------------
// Reduce

let array = [3,7,9,10,98]

let sum 

let result = array.reduce((sum,elem)=> sum + elem + '')

console.log(result)