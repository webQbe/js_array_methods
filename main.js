const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// map()
// create arrays using map()

// create array of square roots of ages multiplied by 2
const ageSqrtDoubled = ages
.map(age => Math.sqrt(age))
.map(age => age * 2)
console.log(ageSqrtDoubled);

// create array of doubled ages
const ageDoubled = ages.map(age => age * 2);
console.log(ageDoubled);

// create array of square roots of ages
const ageSqrt = ages.map(age => Math.sqrt(age));
console.log(ageSqrt);


// create a list of company details
// arrow function
const coMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(coMap);

// es5
const companyMap = companies.map(function(company){

    // output company name, start and end years
    return  `${company.name} [${company.start} - ${company.end}]`;

});

console.log(companyMap);






// filter()
// Get companies lasted at least 10 years
const decadeCompanies = companies.filter(company => (company.end - company.start) >= 10);
console.log(decadeCompanies);

// Get companies started in 1980s
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);


// Get companies in Retail category

// using arrow function
const Retailers = companies.filter(company => company.category === 'Retail');
console.log(Retailers);

// using ES5 function
const retailCompanies = companies.filter(function(company) {

    if(company.category === 'Retail'){

        return true;
    }

});
console.log(retailCompanies);


// filter age 21 and over 


// filter() with arrow function
const drinkAges = ages.filter(age => age >= 21)

console.log(drinkAges);


// using filter()
const can_Drink = ages.filter(function(age){

    if(age >= 21){

        return true;
    }

})

console.log(can_Drink);


// using for loop
let canDrink = [];

for(i = 0; i < ages.length; i++){
    
    // filter ages 
    if(ages[i] >= 21 ){

        // if true add current age to array
        canDrink.push(ages[i]);
        
    }
}

console.log(canDrink);




// forEach()
// loop through companies
// display data from each company


// using forEach()
companies.forEach(function(company){

    // log company name
    console.log(company.name);

});


// using for loop
for(let i = 0; i < companies.length; i++){

    // log current company
    console.log(companies[i]);

}




 