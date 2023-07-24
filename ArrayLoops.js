let worldPopulation = 7900;
let percentages2 =[];
let populations =[1441,105,30];
let percentageOfWorld3 = population=> (population / worldPopulation *100).toFixed(2);

for(let i = 0 ;i<populations.length;i++){
    percentages2.push(percentageOfWorld3(populations[i]));
}

for(let i = 0 ;i<populations.length;i++){
   console.log(percentages2[i]);
}
