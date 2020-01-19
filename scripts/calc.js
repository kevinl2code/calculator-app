let storedValue = [0,'']
let currentValue = '0'


renderOutput()

//Numerical buttons
document.querySelector('#input-1').addEventListener('click', (e) => {
    const number = '1'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-2').addEventListener('click', (e) => {
    const number = '2'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-3').addEventListener('click', (e) => {
    const number = '3'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-4').addEventListener('click', (e) => {
    const number = '4'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-5').addEventListener('click', (e) => {
    const number = '5'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-6').addEventListener('click', (e) => {
    const number = '6'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-7').addEventListener('click', (e) => {
    const number = '7'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-8').addEventListener('click', (e) => {
    const number = '8'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-9').addEventListener('click', (e) => {
    const number = '9'
    enterNumber(number)
    renderOutput()
})
document.querySelector('#input-0').addEventListener('click', (e) => {
    const number = '0'
    enterNumber(number)
    renderOutput()
})

// OPERATOR BUTTONS
document.querySelector('#addition').addEventListener('click', (e) => {
    processCalc()
    storedValue[1] = '+'
    currentValue = '0'
    renderOutput()
})

document.querySelector('#subtraction').addEventListener('click', (e) => {
    processCalc()
    storedValue[1] = '-'
    currentValue = '0'
    renderOutput()
})

document.querySelector('#multiplication').addEventListener('click', (e) => {
    processCalc()
    storedValue[1] = '*'
    currentValue = '0'
    renderOutput()
})

document.querySelector('#division').addEventListener('click', (e) => {
    processCalc()
    storedValue[1] = '/'
    currentValue = '0'
    renderOutput()
})

document.querySelector('#plus-minus').addEventListener('click', (e) => {
    if (currentValue.includes('-')) {
        currentValue = currentValue.slice(1)
    } else {
        currentValue = '-' + currentValue
    }
    renderOutput()
})

document.querySelector('#decimal').addEventListener('click', (e) => {
    if (!currentValue.includes('.')) {
        currentValue = currentValue + '.'
    }
    renderOutput()
})

document.querySelector('#equals').addEventListener('click', (e) => {
    processEquals()
    renderOutput()    
})


// CLEAR AND DELETE BUTTONS
document.querySelector('#clr').addEventListener('click', (e) => {
    storedValue = [0, '']
    currentValue = '0'
    renderOutput()
})

document.querySelector('#ce').addEventListener('click', (e) => {
    currentValue = '0'
    renderOutput()
})

document.querySelector('#back').addEventListener('click', (e) => {
    currentValue = currentValue.slice(0, -1)
    if (currentValue === '') {
        currentValue = '0'
    }
    renderOutput()
})


// KEYBOARD INPUTS

document.addEventListener('keydown', (e) => {
    const input = e.key
    if (input.match(/\d/)) {
        enterNumber(input)
    } else if (input.match(/[\+\-\*\/]/)) {
        processCalc()
        storedValue[1] = input
        currentValue = '0'
    } else if (input === 'Enter') {
        processEquals()
    } else if (input === 'Backspace') {
        currentValue = currentValue.slice(0, -1)
        if (currentValue === '') {
            currentValue = '0'
        }
    } else if (input === 'Escape') {
        storedValue = [0, '']
        currentValue = '0'
    } else if (input === 'Delete') {
        currentValue = '0'
    } else if (input.toLocaleLowerCase() === 't') {
        if (currentValue.includes('-')) {
            currentValue = currentValue.slice(1)
        } else {
            currentValue = '-' + currentValue
        }
    } else if (input.match(/\./)) {
        if (!currentValue.includes('.')) {
            currentValue = currentValue + '.'
        }
    }
    renderOutput()
})



