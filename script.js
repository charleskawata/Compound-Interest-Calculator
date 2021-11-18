const principalBox = document.querySelector("#principal")
const interestBox = document.querySelector("#interest")
const compoundingPeriodsBox = document.querySelector("#compoundingperiods")
const yearsBox = document.querySelector("#years")
const compoundinterestSpan = document.querySelector("#compoundinterest")
const interestearnedSpan = document.querySelector("#interestedearned")


function computeInterest() {
  const principal = principalBox.value 
  const interest = interestBox.value 
  const compoundPeriods = compoundingPeriodsBox.value 
  const years = yearsBox.value
  const interestCalculation = (principal * (1+(interest/compoundPeriods))**(years * compoundPeriods)).toFixed(2)
  const interestEarnedCalculation = (interestCalculation - principal).toFixed(2)
  /*field that interacts with the interest calculation total, subtracts the principal from that and spits out the total amount of interest earned)*/
  
  compoundinterestSpan.textContent = interestCalculation
  interestearnedSpan.textContent = interestEarnedCalculation
}

principalBox.addEventListener('input', computeInterest)
interestBox.addEventListener('input', computeInterest)
compoundingPeriodsBox.addEventListener('input', computeInterest)
yearsBox.addEventListener('input', computeInterest)