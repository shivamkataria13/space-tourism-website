// // nav button open and close
// const navbtn = document.querySelector('.navBtn')
// console.log(navbtn)


// navBtn.addEventListener('click', ()=>{
//     const isOpened = buttontwo.getAttribute('aria-expanded');
//     if(isOpened === "false"){
//         buttontwo.setAttribute('aria-expanded', 'true')
//     }
//     else{
//         buttontwo.setAttribute('aria-expanded', 'false')
//     }
// })


const navOpenBtn = document.querySelector('.btn')
const navCloseBtn = document.querySelector('.navCloseBtn')
console.log(navOpenBtn)
console.log(navCloseBtn)
const navbar = document.querySelector('.navbar')

navOpenBtn.addEventListener('click',()=>{
    navCloseBtn.classList.remove('none')
    navbar.classList.add('activeNav')
})

navCloseBtn.addEventListener('click', ()=>{
    navCloseBtn.classList.remove('none')
    navbar.classList.remove('activeNav')
})


// opening navbar
// const navbar = document.querySelector(".navbar")


buttontwo.addEventListener('click', ()=>{
    if(!navbar.classList.contains('active')){
        navbar.classList.add('active')
        
    }else{
        navbar.classList.remove('active')
    }
})