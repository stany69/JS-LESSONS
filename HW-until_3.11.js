
// Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 
// Результат: ['Home','About','FAQ','Contacts']

let result = elems.map(elem=> elem.substring(elem.indexOf('text')+6,elem.indexOf('</p>')))
console.log(result)



// Напишите функцию initCap(array), которая получает массив с элементами строкового 
// значения и возвращает элементы с заглавной первой буквой по примеру: 
 let words = ['стакан','молоко','табуретка','вода'] 

// Результат: ['Cтакан','Молоко','Табуретка','Вода']

function initCap(array){
    return array.map(elem => elem.replace(elem[0],elem[0].toUpperCase()))
}
console.log(initCap(words))

// Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. 
// Если фамилии не окажется - второй элемент должен хранить undefined 

// Пример: 
let names = [ 
'Steven King', 
'Jonh Snow', 
'Oliver', 
'Neena Stich',
 'Grant Laster', 
'Persius Master', 
'Lest' 
] 

full_names = names.map(elem => (elem.includes(' '))?elem.split(' '):[elem,undefined])
console.log(full_names)
// Результат: [ 
// ['Steven','King'], 
// ['Jonh','Snow'], 
// ['Oliver', undefined], 
// ['Neena','Stich'], 
// ['Grant','Laster'], 
// ['Persius','Master'],
// ['Lest', undefined] ]
// ]

