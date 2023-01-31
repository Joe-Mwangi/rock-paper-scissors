const picks = document.querySelectorAll('.picks')
const pickWrapper =  document.querySelector('.pick-wrapper')
const pickContainer = document.querySelector('.pick-container')
const resultWrapper = document.querySelector('.results-wrapper')
const housePick = document.querySelector('.house')
const myPick = document.querySelector('.mypick')
const score = document.querySelector('.score')

//initial
let scoreValue = +score.textContent
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
        } else {
            pick = 'paper'
        }
        myPickFunc(pickContainer, pickWrapper, resultWrapper, myPickClasses)
    })
})

//add clicked class to mypick div
function myPickFunc(pickContainer, pickWrapper, resultWrapper, myPickClasses) {
    //remove pick container
    pickContainer.classList.add('hide')

    //show results container
    pickWrapper.classList.add('grid')
    resultWrapper.classList.add('show')

    myPickClasses.add(pick)

    setTimeout(() => {
        housePickFunc(['scissors', 'rock', 'paper'])
        setTimeout(() => {
            displayResults()
            playAgain(pick, random, housePickClass)
        }, 500)
    }, 1000)
}

//determine randocm pick from the house
export function housePickFunc(options) {
    random = options[Math.floor(Math.random() * options.length)]
    console.log(random)
    housePickClass.add(random)
}


//evaluating results
export function displayResults() {
    let results = document.querySelector('.result')
    resultWrapper.classList.add('show-results')
    const houseClass = housePick.classList

    if(myPickClasses.contains('scissors') && houseClass.contains('scissors')
        || myPickClasses.contains('rock') && houseClass.contains('rock')
        || myPickClasses.contains('paper') && houseClass.contains('paper')
        || myPickClasses.contains('spoke') && houseClass.contains('spoke')
        || myPickClasses.contains('lizard') && houseClass.contains('lizard')
    )  {
        results.textContent = 'draw'
        scoreValue += 2
    }

    else if(myPickClasses.contains('scissors') && houseClass.contains('paper')
    || myPickClasses.contains('rock') && houseClass.contains('scissors')
    || myPickClasses.contains('paper') && houseClass.contains('rock')
    || myPickClasses.contains('rock') && houseClass.contains('lizard')
    || myPickClasses.contains('paper') && houseClass.contains('spoke')
    || myPickClasses.contains('scissors') && houseClass.contains('lizard')
    || myPickClasses.contains('spoke') && houseClass.contains('rock')
    || myPickClasses.contains('spoke') && houseClass.contains('scissors')
    || myPickClasses.contains('lizard') && houseClass.contains('spoke')
    || myPickClasses.contains('lizard') && houseClass.contains('paper')
    ) {
        results.textContent = 'you win'
        scoreValue += 3
    }

    else {
        results.textContent = 'you lose'
        scoreValue -= 5
    }
    score.textContent = scoreValue
}

//setting to default
export function playAgain(pick, random, housePickClass) {
    document.querySelector('.play-again').addEventListener('click', () => {
        myPickClasses.remove(pick)
        housePickClass.remove(random)
        pickContainer.classList.remove('hide')
        pickWrapper.classList.remove('grid')
        resultWrapper.classList.remove('show')
        resultWrapper.classList.remove('show-results')
    })
}
