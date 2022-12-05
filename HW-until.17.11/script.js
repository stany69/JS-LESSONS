

// let div_elems = document.querySelectorAll('.block')


// for(let elem of div_elems){
//     elem.addEventListener('click', ()=> {
//         elem.setAttribute('style',"height: 100px; width: 100px; background-color: red")
       
//     })

//     elem.addEventListener('dblclick', () => {
//         elem.remove()
//     })
// }

let div_elems = document.querySelectorAll('.block')

let checked = true

function changeColor(elem){
    if(checked){
        elem.setAttribute('style',"height: 100px; width: 100px; background-color: red") 
    } else{
        elem.setAttribute('style',"height: 100px; width: 100px; background-color: gray")
    }
    checked = !checked
}
function delElem{
    elem.remove()
}
