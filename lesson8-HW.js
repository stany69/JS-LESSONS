// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), 
// которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys()
//  согласно примеру:
// Пример:

let someObj = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}

function getKeys(someObj){
     let result = Object.keys(someObj)
     return result
}
console.log(getKeys(someObj))

// Результат: ['key1','key2','key3','key4']

// Создайте функцию getAvg(), которая получает в качестве аргумента массив 
// и возвращает среднее значение среди всех элементов. Примечание: гарантируется, 
// что все элементы передают числовое значение
// Пример: [1,2,3,4,5]
// Результат: 3

let array =[1,2,3,4,5]

function getAvg(array){
let sum = 0;
for(let i = 0; i < array.length;i++){
    sum += array[i]
    
}
   return sum / array.length
}
    console.log(getAvg(array))

   
   



// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает количество элементов, чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']
// Результат: 3

let someArray = [1,true,'3','value1',9,'key']

function countString(someArray){
    let score = 0;
    for(let i = 0; i < array.length;i++){
    if(typeof someArray[i] == 'string'){
       
        score = score + someArray[i]
   
    }
}
    return score
}

console.log(countString(someArray))


// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), 
// которая в качестве аргумента получает объект и возвращает результат работы метода 
// Object.entries() согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// Результат: [['key1': 'value1'],['key2': 'value2'],['key3': 'value3'],['key4': 'value4']]

 let someObj2= {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    }
  function getEntries(someObj2){
    let result = Object.entries(someObj2)
    return result
  }
  console.log(getEntries(someObj2))




// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять 
//строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

	
// Пример: [1,true,'3','value1',9,'key']


// Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }

// let anotherArray = [1,true,'3','value1',9,'key']

// let lastObjct = Object.assign({},anotherArray)
// for (i in lastObjct){
   
// }

// console.log(lastObjct)

// Задача
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:
let array3 = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]

// Результат:
// [true,false,true]

let abc = array3.filter((elem)=>typeof elem == 'boolean' )

console.log(abc)

// Задача
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:
 let array4 = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']

// Результат:
// ['Арбуз','Антена','Арбуз']

let dpf = array4.filter((elem) => elem[0] == 'А')

console.log(dpf)

// отфильтровать массив по следующему правилу:
// 1) значения должны быть четными
// 2) индекс должен быть четным

let array5 = [1,2,3,4,6,6,9,8]
let qwr = array5.filter((elem,index) => elem % 2 == 0 && index % 2 == 0)
console.log(qwr)