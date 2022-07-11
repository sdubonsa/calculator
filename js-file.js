// JS-VARS
let FIRST_NUM_END = true;
let EVAL_SELECTION = ''
let FIRST_NUM = ''
let SECOND_NUM = ''

// COMPONENTS
const numButtons = document.querySelectorAll('.num-button')
const evalButtons = document.querySelectorAll('.eval-button')
const enterButton = document.querySelector('.enter-button')
const clearButton = document.querySelector('.clear-button')

const currDisplay = document.querySelector('.curr-display')
const pastDisplay = document.querySelector('.past-display')

// EVENT HANDLERS
numButtons.forEach(button => button.addEventListener('click', () => {
    setNums(button.id)
}))

evalButtons.forEach(button => button.addEventListener('click', () => {
    evalSecelection(button.id)
}))

enterButton.addEventListener('click', currDisplayResults)
clearButton.addEventListener('click', clear)

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

    currDisplay.innerHTML = currNum
}

function evalSecelection(selection) {
    FIRST_NUM_END = false;

    switch(selection) {
        case 'add':
            pastDisplay.innerHTML = FIRST_NUM + ' +'
            EVAL_SELECTION = 'add'
            break
        case 'subtract':
            pastDisplay.innerHTML = FIRST_NUM + ' -'
            EVAL_SELECTION = 'subtract'
            break
        case 'divide':
            pastDisplay.innerHTML = FIRST_NUM + ' /'
            EVAL_SELECTION = 'divide'
            break
        case 'multiply':
            pastDisplay.innerHTML = FIRST_NUM + ' *'
            EVAL_SELECTION ='multiply'
            break                
        default:
            break
    }
}

function currDisplayResults() {
    if(FIRST_NUM === null || SECOND_NUM === null) {
        currDisplay.innerHTML = 'N/A'
    }

    switch(EVAL_SELECTION) {
        case 'add':
            currDisplay.innerHTML = add()
            pastDisplay.innerHTML = FIRST_NUM
            break
        case 'subtract':
            currDisplay.innerHTML = subtract()
            pastDisplay.innerHTML = FIRST_NUM
            break
        case 'divide':
            currDisplay.innerHTML = divide()
            pastDisplay.innerHTML = FIRST_NUM
            break
        case 'multiply':
            currDisplay.innerHTML = multiply()
            pastDisplay.innerHTML = FIRST_NUM
            break
    }

    EVAL_SELECTION = ''
}

function clear() {
    FIRST_NUM_END = true
    EVAL_SELECTION = ''
    FIRST_NUM = ''
    SECOND_NUM = ''
    currDisplay.innerHTML = 0
    pastDisplay.innerHTML = ''
}