let population = 106;
let country1 = 155;
let country2= 154;
let country3 = 225;
let populationAvg = (country1+country2+country3)/3;
if(population>33){
    console.log("Egypt's population is above average");
}
else{
    let deference = populationAvg - population;
    console.log(`Egypt's population is ${deference} million below average`);
}
