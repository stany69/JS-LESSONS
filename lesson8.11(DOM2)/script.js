
// --------------------------------------
// document.querySelectorAll() - поиск элементов по 1 CSS-селектору

// let h_elems = document.querySelectorAll('.h_text')

// Цикл по всем найденыым элементам css селектора .h_text
// for (let elem of h_elems){
//     Формирование аттрибута style для каждого элемента
//     elem.setAttribute('style', 'color: brown')
//     console.log(elem)
// }

// Пример вывода кокнретного элемента в полученном списке h_elems
// console.log(h_elems[3])

//--------------------------------
// Поиск элементов внутри HTML разметки
// document.querySelector() - поиск элемента по CSS-селектору

// div     - css селектор тега
// .div    - css селектор класса
// #div    - css селектор id

// let li2 = document.querySelector('#li2') -- Поиск по id li2

 let h1 = document.querySelector('h1')   
 h1.setAttribute('style', 'color: brown;')
// -- Поиск по классу h_text (первый попавшийся тег)

 console.log(h1)
// console.log(li2)

// Задача 1 
// Задан массив words со строковыми элементами. Создайте для каждого элемента 
// массива новый тег <p> и поместите занчение элемента в текстовое сво-во внутри <body>

// Пример: 
// let word = [
//     'Text1'
//     'Text2'
//     'Text3'
//     'Text4'
//     'Text5'
//     'Text6'
// ]

// Результат:
// ...
// <body>
//     <p>Text1</p>
//     <p>Text2</p>
//     <p>Text3</p>
//     <p>Text4</p>
//     <p>Text5</p>
//     <p>Text6</p>
// <script...
// </body>
// ...
// moe reshenie
for(i = 1; i <= 6; i++){
    let par = document.createElement('p')
    par.innerText = 'Text'+[i]
    document.body.append(par)
}

//tigran reshenie
for (let elem of word){
    let title = document.createElement('p')
    title.innerText = elem
    document.body.appendChild(title)
}


// Задача 2
// 1) Определить первый li элемент и изменить текстовое сво-во на First element
// 2) Добавить третий li элемент и сформировать текстовое свойство Third element
let li_1 = document.querySelector('li')
let res = document.querySelector('li')
res.innerText='First element'
let li_3 = document.createElement('li')
li_3.innerText = 'Third element'
let ul = li_1.parentElement
ul.append(li_3)

// Решение 2
let li_2 = document.querySelector('#li_elem2')
li_2.previousElementSibling.innerText = 'First element'
let li_3 = document.createElement('li')
li_3.innerText = 'Third element'
li_2.append(li_3)