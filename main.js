const trilho = document.querySelector('.btnDarkLight')
const body = document.querySelector('body')
const link = document.querySelector('.link')
const leftText = document.querySelector('.leftText')
const aboutMeText = document.querySelector('.aboutMeText')
const myHabilities = document.querySelector('.myHabilities')
const projectsText = document.querySelector('.projectsText')


trilho.addEventListener('click', () => {
trilho.classList.toggle('dark')
body.classList.toggle('dark')
link.classList.toggle('dark')
leftText.classList.toggle('dark')
aboutMeText.classList.toggle('dark')
myHabilities.classList.toggle('dark')
projectsText.classList.toggle('dark')
})