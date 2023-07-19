

let numNeighbours =Number( prompt("How many neighbour countries does your country have?"));
/*
Tests
1
0
5
*/
if(numNeighbours ===1){
    console.log('Only 1 border!');
}else if(numNeighbours>1){
    console.log("More than 1 border' in case");
}
else{
console.log("No borders");
}

// when use === with test 1 print no borders becuse '1' is string and not convert

// when use type conversion convert string into number and now 1 is === 1 because they have same value and datatype
