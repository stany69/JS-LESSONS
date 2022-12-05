
// Задана ссылкa: 
// let url = "https://jsonplaceholder.typicode.com/users"
// Напишите fetch запрос, который последовательно определит для каждого пользователя div элемент внутри 
// body и будет содержать информацию сотрудника:
// Имя и фамилия 
// Номер телефона
// Почта
// Имя компании, где работает пользователь

// Для каждого DIV элемента предусмотрите 4 параграфа.
// Пример стилизации DIV элемента: 


// Можно учесть стилизацию на ваш выбор (grid). 
// Главное условие выполнения: описать весь процесс внутри функции (async function….)
// Для демонстрации необходимо будет ее вызвать и отправить архив (гит) на проверку. 
// Если остались вопросы - обязательно пишите в слак чат

// Дедлайн: до 2 декабря 

let timesleep = (ms) => new Promise(res => setTimeout( ()=> res(), ms))

let url = "https://jsonplaceholder.typicode.com/users"


async function userData(){
    await timesleep(2000)
    let res = await fetch(url)
    let data = await res.json()

        let div_wrapper = document.createElement('div')
        document.body.prepend(div_wrapper)
        div_wrapper.className = 'wrapper'

        for(let elem of data){
        
            let div_user = document.createElement('div')
            let p_name = document.createElement('p')
            let p_telephone = document.createElement('p')
            let p_mail = document.createElement('p')
            let p_company = document.createElement('p')


            div_user.className = 'user'
            p_name.innerText = 'Имя и фамилия :  ' + elem.name
            p_telephone.innerText = 'Телефон: ' + elem.phone
            p_mail.innerText = 'Почта: ' + elem.email
            p_company = 'Компания: ' + elem.company.name


            div_user.append(p_name,p_telephone,p_mail,p_company)
            div_wrapper.append(div_user)

        }





    
 }
 
 userData()