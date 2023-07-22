let worldPopulation = 7900;
let percentageOfWorld3 = population=> `${(population / worldPopulation *100).toFixed(2)
}`;


let populations =[1441,105,30];
console.log(populations.length === 3);
console.log(populations);
let percentages =[percentageOfWorld3(populations[0]),percentageOfWorld3(populations[1]),percentageOfWorld3(populations[2])];
console.log(percentages);
