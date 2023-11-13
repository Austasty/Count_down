const characterAmountNumberEl = document.getElementById("characterAmountNumber")
const characterAmountRangeEl = document.getElementById("characterAmountRange")
const formEL = document.getElementById("passwordGeneratorForm")
const includeUpperCaseEL = document.getElementById("includeNumbers")
const includeSymbolsEL = document.getElementById("includeSymbols")
const includeNumbers = document.getElementById("includeNumbers

")



characterAmountNumberEl.addEventListener("input",syncCharacterAmount)
characterAmountRangeEl.addEventListener("input", syncCharacterAmount)

formEL.addEventListener("submit", e =>{
e.preventDefault()
const includeUpperCase = includeUpperCaseEL.Checked
const includeNumbers = includeNumbers.Checked
const includeSymbols = includeSymbols.Checked


const characterAmount = characterAmountNumberEl.value
const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
})

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumberEl.value = value
    characterAmountRangeEl.value = value
}