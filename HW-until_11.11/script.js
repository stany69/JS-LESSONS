
// Внутри body заданы следующие элементы: 

// <div></div>
// <div></div>
// <div></div>
// <div></div>

// Необходимо выполнить ряд заданий:
// Используя JS, сформируйте внутри первого div элемента новый тег <h1>.  
// Задайте для него текстовое сво-во “Заголовок” и присвойте атрибут class с значением first_h1.

// Используя JS, сформируйте внутри второго div элемента два дочерних тега <h2> и <p>, 
// присвоив текстовые значения “Новый блог” и “Текст нового блока”. 
// Для параграфа предусмотрите атрибут hight с значением “low”

// Используя JS, сформируйте вокруг третьего div элемента (сверху и снизу) по 1 элементу 
// кликабельного текста <a>, определив ссылку на google.com и github.com соответственно

// Сформируйте внутри 4 div элемента, используя цикл, список заголовков от h1 до h6, задав 
// текстовое сво-во “Заголовок 1”, где n - это порядковый номер заголовка

// В качестве результата необходимо прислать только js файл с выполненными 4 задачами. 

// Примечание: не забудьте в body указать тег script с подключением js файла

// Крайний срок дедлайна - 11.11.22


// for(i = 1;i<=4;i++){
//     let div[i] = document.createElement('div')
//     document.body.prepend(div)
   
// }


let div_1 = document.createElement('div')
let div_2 = document.createElement('div')
let div_3 = document.createElement('div')
let div_4 = document.createElement('div')

document.body.prepend(div_1,div_2,div_3,div_4)

let first_title = document.createElement('h1')
first_title.innerText = 'Заголовок'
first_title.className = 'first_h1'
div_1.prepend(first_title)

let second_title = document.createElement('h2')
second_title.innerText = 'Новый блог'
let par_1 = document.createElement('p')
par_1.innerText = 'Текст нового блока'
par_1.setAttribute('height','low')
div_2.prepend(second_title,par_1)

let link_1 = document.createElement('a')
link_1.innerText = 'google.com'
link_1.setAttribute('href','google.com ')
div_3.before(link_1)

let link_2 = document.createElement('a')
link_2.innerText = 'github.com'
link_2.setAttribute('href','github.com')
div_3.after(link_2)

for(i = 1; i <= 6; i++){
    let titles = document.createElement('h'+[i])
    titles.innerText = 'Заголовок'+[i]
    div_4.append(titles)
}