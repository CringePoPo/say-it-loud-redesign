const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')

const myTimeouts = setTimeout(function myModal(){
    modal.classList.add('active')
}, 3000)

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('active')
})