// let checked = true
//     let div = document.body.firstElementChild
//     let h1 = document.querySelector('#h_text')


// function handler(){

//     console.log(h1)
//     h1.innerText = 'Теперь я не заголовок!'
//     if (checked){
//         checked = !checked
//         div.setAttribute('style', 'width: 500px; height: 500px; background: red;')
//     } else {
//         checked = !checked
//         div.setAttribute('style', 'width: 500px; height: 500px; background: blue;')
 //          h1.innerText = 'Заголовок 1' 
//     }
    //     console.log(checked)
// }


//function handler2(){
  //  console.log('click')
//}

//let button = document.querySelector('#btn')
// button.onclick = () => (hanlder())
// button.onclick = () => (handler2())

// -----------------------------
// document.addEventListener - метод, который позволяет указать n-ое количество событий 
// (указав данный несколько раз)
// document.addEventListener('click', () => handler())

//button.addEventListener('click', () => handler())

// div.addEventListener("mouseover", ()=> console.log('Навелся на элемент'))
// div.addEventListener("mouseout", ()=> console.log('Вышел из элемента'))





// div.addEventListener('mousedown', () => console.log('mousedown'))
// div.addEventListener('mouseup', () => console.log('mouseup'))
// div.addEventListener('click', () => console.log('click'))
// div.addEventListener('dblclick', () => console.log('dblclick'))

// Задание 1. 
// 1)   При нажатии на кнопку создайте маркированый список,
//      элементы которого будут передавать их числовой порядок (5 штук)
//      от 1 до 5. Маркированный список должен опрделиться под кнопкой.


let btn = document.querySelector('button')

function handler(){
    let ul = document.createElement('ul')
    btn.after(ul)
    for(i = 1; i <= 5; i++){
        let li = document.createElement('li')
        li.innerText= i
        
        ul.append(li)

    }
}

// первий способ
// btn.onclick=handler

// второй способ

//btn.addEventListener('click',handler)

//div.removeEventListener() - метод, который удаляет событие, которые было определено ранее методом addEventListener()
// let logMessage = () => console.log(1)

// div.addEventListener('click', logMessage)

// div.removeEventListener("click", logMessage)

