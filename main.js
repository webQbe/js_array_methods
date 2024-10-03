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




 