// JS-VARS
let FIRST_NUM_END = true;
let EVAL_SELECTION = ''
let FIRST_NUM
let SECOND_NUM

// COMPONENTS
const numButtons = document.querySelectorAll('.num-button')
const evalButtons = document.querySelectorAll('.eval-button')
const enterButton = document.querySelector('.enter-button')
const display = document.querySelector('.calc-display')

// EVENT HANDLERS
numButtons.forEach(button => button.addEventListener('click', () => {
    setNums(button.id)
}))

evalButtons.forEach(button => button.addEventListener('click', () => {
    evalSecelection(button.id)
}))

enterButton.addEventListener('click', displayResults)

// FUNCTIONS
function add() {
    return FIRST_NUM + SECOND_NUM
}

function subtract(a ,b) {
    return a - b
}

function setNums(number) {
    if(FIRST_NUM_END) {
        FIRST_NUM = parseInt(number)
    } else {
        SECOND_NUM = parseInt(number)
    }

    display.innerHTML = number
}

function evalSecelection(selection) {
    FIRST_NUM_END = false;

    switch(selection) {
        case 'add':
            EVAL_SELECTION = 'add'
            break
        default:
            break
    }
}

function displayResults() {
    if(FIRST_NUM === null || SECOND_NUM === null) {
        display.innerHTML = 'N/A'
    }

    switch(EVAL_SELECTION) {
        case 'add':
            display.innerHTML = add()
    }
}