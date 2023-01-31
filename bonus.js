import { housePickFunc, playAgain, displayResults } from "./rps.js";

const picks = document.querySelectorAll('.picks')
const pickWrapper =  document.querySelector('.pick-wrapper')
const pickContainer = document.querySelector('.pick-container')
const resultWrapper = document.querySelector('.results-wrapper')
const myPick = document.querySelector('.mypick')
const housePick = document.querySelector('.house')

//initial
let myPickClasses = myPick.classList
let housePickClass = housePick.classList
let pick = ''
let random = ''

//setting pick
picks.forEach(item => {
    item.addEventListener('click', e => {
        const target = e.currentTarget
        if(target.classList.contains('scissors')) {
            pick = 'scissors'
        } else if(target.classList.contains('rock')) {
            pick = 'rock'
        }  else if(target.classList.contains('lizard')) {
            pick = 'lizard'
        }  else if(target.classList.contains('spoke')) {
            pick = 'spoke'
        } else {
            pick = 'paper'
        }
        myPickFunc(pickContainer, pickWrapper, resultWrapper, myPickClasses)
    })
})

//add clicked class to mypick div
function myPickFunc() {
    //remove pick container
    pickContainer.classList.add('hide')

    //show results container
    pickWrapper.classList.add('grid')
    resultWrapper.classList.add('show')

    myPickClasses.add(pick)

    setTimeout(() => {
        housePickFunc(['scissors', 'rock', 
        'paper', 'lizard',  'spoke'])
        setTimeout(() => {
            displayResults()
            playAgain(pick, random, housePickClass)
        }, 500)
    }, 1000)
}

