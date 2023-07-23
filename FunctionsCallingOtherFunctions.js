let worldPopulation = 7900;
let percentageOfWorld3 = population=> `${(population / worldPopulation *100).toFixed(2)
}`;
let describePopulation = (country,population)=> `${country} has ${population} million people,which is about ${percentageOfWorld3(population)} of the world.`;

console.log(describePopulation('Egypt',105));
console.log(describePopulation('China',1441));
console.log(describePopulation('China',1441));
