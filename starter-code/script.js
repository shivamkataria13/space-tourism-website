
// opening navbar
const navOpenBtn = document.querySelector('.btn')
const navCloseBtn = document.querySelector('.navCloseBtn')

const navbar = document.querySelector('.navbar')

navOpenBtn.addEventListener('click',()=>{
    navCloseBtn.classList.remove('none')
    navbar.classList.add('activeNav')
})

navCloseBtn.addEventListener('click', ()=>{
    navCloseBtn.classList.remove('none')
    navbar.classList.remove('activeNav')
})









// -----------DATA FETCH -------------
// const destinationTravelInfo = document.querySelector('.destinationTravelInfo')
// const destinationInfo = document.querySelector('.destinationInfo')
// console.log(destinationInfo)

// import myJson from '/data.json' assert {type: 'json'}
// console.log(myJson)








