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
const deleteButton = document.querySelector('.delete-button')

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
clearButton.addEventListener('click', clearFunction)
deleteButton.addEventListener('click', deleteFunction)

// FUNCTIONS
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

function setNums(number) {
    if(FIRST_NUM_END) {
        FIRST_NUM = '' + FIRST_NUM + number
        currDisplay.innerHTML = FIRST_NUM
    } else {
        SECOND_NUM = '' + SECOND_NUM + number
        currDisplay.innerHTML = SECOND_NUM
    }
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
    a = parseInt(FIRST_NUM)
    b = parseInt(SECOND_NUM)

    SECOND_NUM = ''

    switch(EVAL_SELECTION) {
        case 'add':
            setDisplay(add(a, b))
            break
        case 'subtract':
            setDisplay(subtract(a, b))
            break
        case 'divide':
            setDisplay(divide(a, b))
            break
        case 'multiply':
            setDisplay(multiply(a, b))
            break
    }

    EVAL_SELECTION = ''
}

function setDisplay(number) {
    currDisplay.innerHTML = number
    FIRST_NUM = number
    pastDisplay.innerHTML = FIRST_NUM
}

function clearFunction() {
    FIRST_NUM_END = true
    EVAL_SELECTION = ''
    FIRST_NUM = ''
    SECOND_NUM = ''
    currDisplay.innerHTML = 0
    pastDisplay.innerHTML = ''
}

function deleteFunction() {
    // CHECK WHICH NUM IT IS CURRENTLY ON
    if(FIRST_NUM_END) {
        FIRST_NUM = FIRST_NUM.slice(0, -1)
        currDisplay.innerHTML = FIRST_NUM
    } else {
        SECOND_NUM = SECOND_NUM.slice(0, -1)
        currDisplay.innerHTML = SECOND_NUM
    }
}