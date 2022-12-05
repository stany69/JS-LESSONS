


// Задана ссылка на api в переменной url = "https://jsonplaceholder.typicode.com/photos"
// Напишите fetch-запрос, который циклично отрисует каждый элемент полученного массива на HTML разметке. 
// Воспользуйтесь GRID сеткой, чтобы разместить по 4 элемента в ряд, сформировав следующее описание: 

// Картинка с разрешением 200 на 200 пикселей 
// Заголовок h2 с описанием 

// Позиционирование элементов может быть произвольной




let url = 'https://jsonplaceholder.typicode.com/photos'

let fetchData = fetch (url).then(res => res.json())

fetchData.then(data => {

    let div_elem = document.createElement('div')
    document.body.prepend(div_elem)
    div_elem.className = 'wrapper'




    for(let elem of data.filter(elem => elem.albumId == 20)){

        let div_card = document.createElement('div')
        let img_elem = document.createElement('img')
        let h2_elem = document.createElement('h2')


        div_card.className = 'div_card'
        img_elem.width = '200'
        img_elem.height = '200'
        h2_elem.innerText = elem.title
        img_elem.src = elem.url


        div_card.append(img_elem,h2_elem)
        div_elem.append(div_card)
    }
    
})
            
        
