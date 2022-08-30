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




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  let newObj = {};
  newObj.name = employee.name;
  newObj.bonusPercentage = bonusPercent(employee);
  newObj.totalCompensation = totalCompensation(employee);
  newObj.totalBonus = calcBonusDollar(employee);
  // return new object with bonus results
  return newObj;
}


function fourDigit(employee) {
  if (employee.employeeNumber.length === 4) {
    return 0.05;
  }
  return 0;
}

function checkAnnual(employee) {
  if(employee.annualSalary > 65000) {
    return -0.01
  }
  return 0;
}

function annualPercent(employee) {
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
  let sum = annualPercent(employee) + fourDigit(employee) + checkAnnual(employee);
  if(sum < 0) {
    sum = 0;
  } else if (sum > 0.13) {
    sum = 0.13
  }

  return sum;
}

function calcBonusDollar(employee) {
  return Math.round(bonusPercent(employee) * Number(employee.annualSalary));
}

function totalCompensation(employee) {
  return calcBonusDollar(employee) + Number(employee.annualSalary);
}

function displayNewInfo(array) {
  let newArray = [];
  for (let employee of array) {
    newArray.push(calculateIndividualEmployeeBonus(employee));
    console.log(calculateIndividualEmployeeBonus(employee));
  }
  return newArray;
}

// console.log("Atticus should have annual percentage of .04:", annualPercent(employees[0]));
// console.log("Atticus should have eeAge of .05:", fourDigit(employees[0]));
// console.log("Atticus should have annual adjustment should be 0:", checkAnnual(employees[0]));

// console.log(`Atticus bonus is:${employees[0].annualSalary * (annualPercent(employees[0]) + fourDigit(employees[0]) + checkAnnual(employees[0]))}`);
// console.log(annualPercent(employees[0]) + fourDigit(employees[0]) + checkAnnual(employees[0]));

console.log(calculateIndividualEmployeeBonus(employees[0]));

console.log(displayNewInfo(employees));