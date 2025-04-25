// Logical "AND"
console.log(true && true) // all values have to be TRUE for expression to be TRUE

// Logical "OR"
//console.log(true || false) // any vlaue should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for a Driving License: ' + eligibilityForDriversLicense)

// Logical "NOT"
//console.log(!true)
console.log(6 !== 10)
