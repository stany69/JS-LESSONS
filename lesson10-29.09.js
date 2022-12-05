// Методы массивов

// filter

// в качестве аргумента указывается колбэк (функция внутри другой функции)
// Где в return определяется условие, по которому сравниваются все элементы массива
// Если элемент подходит по условию (вовзрващает true), то он же поределиться в новом массиве query
// В противном случае он будет проигнорирован

// let array5 = [1,2,3,4,5,6,7,8,9,10]

// let query = array5.filter((elem)=> elem > 5)
// console.log(query)

// -------------------------------------- 


// console.log (query)​
// Задача
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:
// let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]

// Результат:
// [true,false,true]

// Решение
let array3= [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]
let query8= array.filter((elem)=> typeof elem == 'boolean')

console.log(query8)

// Задача
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:
// let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']​
// Результат:
// ['Арбуз','Антена','Арбуз']

// Решение

// let array = ['Арбуз', 'Антена','Бор','арбуз','Сеть','Трон']
// let query = array.filter((g)=> g[0].toLowerCase() == 'а')


// console.log(query)

// -------------------------------------- 

// предложенные аргументы внутри колбека (filter)
// 1-ый аргумент - значение элементов массива
// 2-ой аргумент - индексы элементов массива
// 3-ий аргумент - весь массив целиком

// let array = ['один', 'два','три']

// let query = array.filter((elem, ind, arr)=>{
//     console.log(elem,ind, arr)
//     return elem == 'пять'
// })

// console.log(query)

// -------------------------------------- 

// Задача
// отфильтровать массив по следующему правилу:
// 1) значения должны быть четными
// 2) индекс должен быть четным

// let array = [1,2,3,4,6,6,9,8]
// let query = array.filter((value, index) => value % 2 == 0 && index % 2 == 0)
// console.log(query)

// -------------------------------------- 

// Метод includes
// Проверяет существует ли элемент в массиве (возвращает ответ true. false)
// let array = [1,2,3,4,5]
// let array = ['raz','dva','tri']

// let result = array.includes('ra')

// console.log(result)


















