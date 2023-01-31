const rules = document.querySelector('.rules')
const container = document.querySelector('.container')
const rulesContainer = document.querySelector('.rules-wrapper')
const cancel = document.querySelector('.cancel')




//show rules
rules.addEventListener('click', () => {
    container.classList.add('index')
    rulesContainer.classList.add('grid')
})
//cancel rules
cancel.addEventListener('click', () => {
    container.classList.remove('index')
    rulesContainer.classList.remove('grid')  
})
