
// function handler(e){
//     if (e.altKey && e.key == 'Meta'){
//         console.log('meta + shift')
//     }
//     // console.log(e)
// }


// document.addEventListener('keydown', (event) => handler(event))

// ---------------------------------------
// Верстка

let data = [
    {url: 'https://gcdn.utkonos.ru/resample/500x500q90/images/photo/3364/3364913H.jpg?mtime=62681126' ,id: 1, title: 'Домашний огурец', text: 'Повесть о домашнем огурце'},
    {url: 'https://images.deal.by/202215562_w600_h600_202215562.jpg' ,id: 2, title: 'Любимый дядя', text: 'Любимый дядя вышел погулять'},
    {url: 'https://static.galamart.ru/images_1000/5WJBRAD-1.jpg?t=1534919739' ,id: 3, title: 'Неуютный кот', text: 'Кот съел не тот огурец'},
    {url: 'https://abrakadabra.fun/uploads/posts/2022-01/1643108585_9-abrakadabra-fun-p-avatarka-ks-go-stim-59.jpg' ,id: 4, title: 'Черная куртка', text: 'Клавиатура оказалась лишней'},
    {url: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-flowers-plant-pattern-hand-painted-300-pixel-map-png-image_3805428.jpg' ,id: 5, title: 'Серые наушники', text: 'Как надоели мне кавычки'},
    {url: 'https://fotogora.ru/img/blog/or/2019/9/12/15482.png' ,id: 6, title: 'Классная тряпка', text: 'Как же много этих текстов'},
]
// Starta University 1 to Everyone (20:35)
 let div_wrapper = document.querySelector('.wrapper')

for (let elem of data){
//     // Формирование элементов
    let div_elem = document.createElement('div')
    let h2_elem = document.createElement('h2')
    let p_elem = document.createElement('p')
    let btn = document.createElement('button')

//     // Указание класса
    div_elem.className = 'div_elem'
    h2_elem.className = 'h2_elem'
    p_elem.className = 'p_elem'
    btn.className = 'btn_elem'

//     // Указание текстового сво-ва
    h2_elem.innerText = elem.title
    p_elem.innerText = elem.text
    btn_elem.innerText = 'Podrobnee'

//     //Вставка элементов в разметку
    div_elem.append(h2_elem)
    div_elem.append(p_elem)
    div_wrapper.append(div_elem)
}

// Cобытие для кнопки 
btn.addEventListener('click', () => {addModal(elem.id)})
    
}

function addModal(id){
    let elem = data.find(value => value.id == id)

    // Cоздание компонентов модального окна
    let div_elem = document.createElement('div')
    let h2_elem = document.createElement('h2')
    let p_elem = document.createElement('p')
    let img_elem = document.createElement('img')
    let btn = document.createElement('button')

    // Указание класса
    div_elem.className = 'div_modal_elem'
    h2_elem.className = 'h2_modal_elem'
    p_elem.className = 'p_modal_elem'
    img_elem.className = 'img_elem'
    btn.className = 'btn_modal_elem'

    // Формирование аттрибута для img
    img_elem.width = 300
    img_elem.height = 300
    img_elem.src = elem.url

    // Указание текстового сво-ва
    h2_elem.innerText = elem.title
    p_elem.innerText = elem.text
    btn.innerText = 'Закрыть'

    //Вставка элементов в разметку
    div_elem.append(h2_elem)
    div_elem.append(p_elem)
    div_elem.append(img_elem)
    div_elem.append(btn)
    div_wrapper.after(div_elem)

    // Размытие фона
    div_wrapper.setAttribute('style', 'opacity: 0.4')

    // выключение кнопок
    document.querySelectorAll('.btn_elem').forEach(elem => elem.disabled = true)

    // Событие кнопки для удаление модального окна
    btn.addEventListener('click', () => removeModal())
}

function removeModal(){
    let div_modal = document.querySelector('.div_modal_elem')
    div_wrapper.setAttribute('style', 'opacity: 1')
    div_modal.remove()

    // включение кнопок
    document.querySelectorAll('.btn_elem').forEach(elem => elem.disabled = false)

}