/*
code challenge #1
// BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
let mark = {
  mass: 78,
  height: 1.69
}
let john = {
  mass: 92,
  height: 1.95
}

let mark = {
  mass: 95,
  height: 1.88
}
let john = {
  mass: 85,
  height: 1.76
}
const markBMI = getBMI(mark.mass, mark.height)
const johnBMI = getBMI(john.mass, john.height)

function getBMI(mass, height) {
  return mass / height ** 2
}

const markHigherBMI = markBMI > john

console.log('markHigherBMI', markHigherBMI)
*/

/*
// code challenge #2
// let mark = {
//   mass: 78,
//   height: 1.69
// }
// let john = {
//   mass: 92,
//   height: 1.95
// }

let mark = {
  mass: 95,
  height: 1.88
}
let john = {
  mass: 85,
  height: 1.76
}
const markBMI = getBMI(mark.mass, mark.height)
const johnBMI = getBMI(john.mass, john.height)

function getBMI(mass, height) {
  return (mass / height ** 2).toFixed(1)
}
if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher that John's (${johnBMI})`)
} else if (markBMI < johnBMI) {
  console.log(`John's BMI(${johnBMI}) is higher that Mark's (${markBMI})`)
} else {
  console.log(`John's BMI(${johnBMI}) equals Mark's (${markBMI})`)
}
// */



