/// <reference path="jquery.js" />



// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

const formatCur = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

$(document).ready(readyNow);

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  let newObj = {};
  //pushing exmployee bonus info into new object
  newObj.name = employee.name;
  newObj.bonusPercentage = bonusPercent(employee);
  newObj.totalCompensation = totalCompensation(employee);
  newObj.totalBonus = calcBonusDollar(employee);
  // return new object with bonus results
  return newObj;
}

function fourDigit(employee) {
  //checking if employee has a four digit employee code to qualify for 5% bonus
  if (employee.employeeNumber.length === 4) {
    return 0.05;
  }
  return 0;
}

function checkAnnual(employee) {
  //checking if employee exceeds 65000 salary cap and qualifies for 1% bonus reduction
  if(employee.annualSalary > 65000) {
    return -0.01
  }
  return 0;
}

function annualPercent(employee) {
  //switch to check if qualified for annual bonus percentage
  let percentBonus = 0;
  switch (employee.reviewRating) {
    case 3: 
      percentBonus = .04;
      break;
    case 4:
      percentBonus = .06;
      break;
    case 5:
      percentBonus = .10;
      break;
    default:
      percentBonus = 0;
  }
  return percentBonus;
}

function bonusPercent(employee) {
  //calculating total bonus percentage and checking for 13% or 0% minimum
  let sum = annualPercent(employee) + fourDigit(employee) + checkAnnual(employee);
  if(sum < 0) {
    sum = 0;
  } else if (sum > 0.13) {
    sum = 0.13
  }

  return sum;
}

function calcBonusDollar(employee) {
  //calculate total bonus dollar amount and round to nearest dollar
  return Math.round(bonusPercent(employee) * Number(employee.annualSalary));
}

function totalCompensation(employee) {
  //calculate total compensation
  return calcBonusDollar(employee) + Number(employee.annualSalary);
}

function displayNewInfo(array) {
  let newArray = [];
  //loop through given array and log newEmployee Object and store in new array
  for (let employee of array) {
    let newInfo = calculateIndividualEmployeeBonus(employee);
    newArray.push(newInfo);
    console.log(newInfo);
    let el = $('#bonusList');
    el.append(`<li>Name: ${newInfo.name} Bonus Percentage: ${newInfo.bonusPercentage * 100}% Total Bonus: ${formatCur.format(newInfo.totalBonus)} Total Compensation: ${formatCur.format(newInfo.totalCompensation)}</li>`)
  }
  return newArray;
}

function test () {
  displayNewInfo(employees);
}

function readyNow() {
  $('#calcBtn').on('click', test);
}

// console.log(displayNewInfo(employees));