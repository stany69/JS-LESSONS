
// -------------------------------------------
// Вставка элемента в DOM - дерево (в html)
// appendChild(title)             -- вставить элемент внтри указанного тега как последний элемент
// append(title, div, p, a)       -- вставить в начало родителя
// before()                       -- вставить до указанного элемента 
// prepend()                      -- вставить в конец родителя
// after()                        -- вставить после указанного элемента

//document.body.prepend(title)
// document.body.before(title)
// document.body.append(title)
// document.body.after(title)


// -------------------------------------------
// Удаление элемента в разметке
// title.remove()                       --  удаляет элемент
// document.body.removeChild(title)     -- удаляет указанный дочерний элемент родителя
// console.log(title)

// Задание 2. 
// 1. Создайте ul список внутри body и поместите туда 3 li элемента с значениями (1,2,3)

// let ul = document.createElement('ul')
// let li_1 = document.createElement(li)
// li_1.innerText = '1'
// let li_2 = document.createElement(li)
// li_2.innerText = '2'
// let li_3 = document.createElement(li)
// li_3.innerText = '3'
// document.body.prepend(ul)
// ul.append(li_1,li_2,li_3)

let title = document.createElement('h1')

title.className = 'title_text'
title.id = 'title_1'
title.setAttribute('for','123')
title.innerText = 'Самый первый заголовок'
document.body.appendChild(title)

let div = document.createElement('div')
div.className = 'block'
let p = document.createElement('p')
p.innerText = 'Hello world'
document.body.prepend(div)
div.prepend(p)
console.log(title)

let ul = document.createElement('ul')
document.body.prepend(ul)

for(i = 1;i <= 3;i++){
let li = document.createElement('li')
li.innerText = i + 'stroka'
ul.append(li)
}
// let li_1 = document.createElement('li')
// let li_2 = document.createElement('li')
// let li_3 = document.createElement('li')
// li_1.innerText = '1'
// li_2.innerText ='2'
// li_3.innerText ='3'

// ul.append(li_1,li_2,li_3)