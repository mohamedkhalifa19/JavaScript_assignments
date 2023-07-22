'use strict';
let worldPopulation = 7900;
function percentageOfWorld1 (population){
return `${(population / worldPopulation *100).toFixed(2)} %`;
}

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(105));
console.log(percentageOfWorld1(15));
let percentageOfWorld2 = function(population){
    return `${(population / worldPopulation *100).toFixed(2)} %`;
}

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(105));
console.log(percentageOfWorld2(15));
