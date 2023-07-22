'use strict'

function describeCountry(country, population,  capitalCity){
    const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return describe;
}



let Egypt  = describeCountry('Egypt',105,'Cairo');
let England = describeCountry('England',35,'London');
let morocco  = describeCountry('morocco',25,'Rabat');

console.log(Egypt);
console.log(England);
console.log(morocco);
