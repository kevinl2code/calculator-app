const renderOutput = () => {
    const domOutputCurrent = document.querySelector('#output-span')
    domOutputCurrent.textContent = currentValue

    const domOutputStored = document.querySelector('#output-span1')
    domOutputStored.textContent = storedValue[0].toString()
}

const processCalc = () => {
    if (storedValue[0] === 0) {
        storedValue[0] = storedValue[0] + parseFloat(currentValue)
    } else if (storedValue[1] === '+') {
        storedValue[0] = storedValue[0] + parseFloat(currentValue)
    } else if (storedValue[1] === '-') {
        storedValue[0] = storedValue[0] - parseFloat(currentValue)
    } else if (storedValue[1] === '*') {
        storedValue[0] = storedValue[0] * parseFloat(currentValue)
    } else if (storedValue[1] === '/') {
        storedValue[0] = storedValue[0] / parseFloat(currentValue)
    }
}

const enterNumber = (number) => {
    if (currentValue === '0') {
        currentValue = ''
    }
    currentValue = currentValue + number
}

const processEquals = () => {
    if (storedValue[1] === '+') {
        storedValue[0] = storedValue[0] + parseFloat(currentValue)
        storedValue[1] = ''
    } else if (storedValue[1] === '-') {
        storedValue[0] = storedValue[0] - parseFloat(currentValue)
        storedValue[1] = ''
    } else if (storedValue[1] === '*') {
        storedValue[0] = storedValue[0] * parseFloat(currentValue)
        storedValue[1] = ''
    } else if (storedValue[1] === '/') {
        storedValue[0] = storedValue[0] / parseFloat(currentValue)
        storedValue[1] = ''
    }
    currentValue = '0'
}