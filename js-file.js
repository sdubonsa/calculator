// JS-VARS
let FIRST_NUM_END = true;
let EVAL_SELECTION = ''
let FIRST_NUM = ''
let SECOND_NUM = ''

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
    let result = FIRST_NUM + SECOND_NUM
    FIRST_NUM = result;
    SECOND_NUM = ''

    return result
}

function subtract() {
    let result = FIRST_NUM - SECOND_NUM
    FIRST_NUM = result;
    SECOND_NUM = ''

    return result
}

function divide() {
    let result = FIRST_NUM / SECOND_NUM
    FIRST_NUM = result;
    SECOND_NUM = ''

    return result
}

function multiply() {
    let result = FIRST_NUM * SECOND_NUM
    FIRST_NUM = result;
    SECOND_NUM = ''

    return result
}

function setNums(number) {
    let currNum

    if(FIRST_NUM_END) {
        currNum = '' + FIRST_NUM + number
        FIRST_NUM = parseInt(currNum)
    } else {
        currNum = '' + SECOND_NUM + number
        SECOND_NUM = parseInt(currNum)
    }

    display.innerHTML = currNum
}

function evalSecelection(selection) {
    FIRST_NUM_END = false;

    switch(selection) {
        case 'add':
            EVAL_SELECTION = 'add'
            break
        case 'subtract':
            EVAL_SELECTION = 'subtract'
            break
        case 'divide':
            EVAL_SELECTION = 'divide'
            break
        case 'multiply':
            EVAL_SELECTION ='multiply'
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
            break
        case 'subtract':
            display.innerHTML = subtract()
            break
        case 'divide':
            display.innerHTML = divide()
            break
        case 'multiply':
            display.innerHTML = multiply()
            break
    }
}