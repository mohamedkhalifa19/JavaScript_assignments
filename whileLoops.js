let worldPopulation = 7900;
let percentages3 =[];
let populations =[1441,105,30];
let percentageOfWorld3 = population=> (population / worldPopulation *100).toFixed(2);

let i = 0 ;
while(i<populations.length){
    percentages3.push(percentageOfWorld3(populations[i]));
    i++;
}
let j =0;
while(j<populations.length){
    console.log(percentages3[j]);
    j++;
}
