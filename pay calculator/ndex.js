class Calculator {
    constructor(previousOperandTextlement, currentOperandTextElement){
        this.previousOperandTextlement =previousOperandTextlement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {
        this.currentOperand =' '
        this.previousOperand =' '
        this.operation  = undefined
    }
    delete() {
        this.currentOperand = this.currentOperand.tostring().slice(0, -1)
    }
    appendNumber(number){
        if (number = '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.tostring() + number.tostring()
    }

    chooseOperation(operation){
        if (this.currentOperand === ' ') return
        if(this.previousOperand !== ' '){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ' '
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNAN(current)) return
        switch (this.oeration){
            case '+':
            this.computation = prev + current
            break
            case '-':
            this.computation = prev - current
            break
            case '*':
            this.computation = prev * current
            break
            case '/':
            this.computation = prev / current
            break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ' '
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const intergerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = (stringNumber.split('.')[1])
        let intergerDisplay
        if (isNaN(intergerDigits)){
            intergerDisplay = ''
        } else {
            intergerDisplay = intergerDigits.toLocaleString('en', {
                maximumFractionDigits:0})
        }
        if (decimalDigits != null) {
            return `${intergerDisplay}.${decimalDigits}`
        } else {
            return intergerDisplay
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber
        (this.currentOperands)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
    }
}
const numberButtons = document.querySelectorAll(['data-number'])
const ooerationButtons = document.querySelectorAll(['data-operation'])
const equalsButton = document.querySelector(['data-equals'])
const deleteButton = decument.querySelector(['data-delete'])
const previousOperandTextlement = decument.querySelector(['data-previous-operand'])
const currentOperandTextElement = decument.querySelector(['data-current-operand'])

const calculator = new Calculator(previousOperandTextlement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})









 


