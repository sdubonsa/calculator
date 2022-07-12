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
    a = parseInt(FIRST_NUM)
    b = parseInt(SECOND_NUM)

    SECOND_NUM = ''


    if(FIRST_NUM === null || SECOND_NUM === null) {
        currDisplay.innerHTML = 'N/A'
    }

    switch(EVAL_SELECTION) {
        case 'add':
            currDisplay.innerHTML = add(a, b)
            FIRST_NUM = add(a, b)
            pastDisplay.innerHTML = FIRST_NUM
            break
        case 'subtract':
            currDisplay.innerHTML = subtract(a, b)
            FIRST_NUM = subtract(a, b)
            pastDisplay.innerHTML = FIRST_NUM
            break
        case 'divide':
            currDisplay.innerHTML = divide(a, b)
            FIRST_NUM = divide(a, b)
            pastDisplay.innerHTML = FIRST_NUM
            break
        case 'multiply':
            currDisplay.innerHTML = multiply(a, b)
            FIRST_NUM = multiply(a, b)
            pastDisplay.innerHTML = FIRST_NUM
            break
    }

    EVAL_SELECTION = ''
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
    if(!FIRST_NUM_END) {
        FIRST_NUM = FIRST_NUM.slice(0, -1)
    } else {
        SECOND_NUM = SECOND_NUM.slice(0, -1)
    }
}