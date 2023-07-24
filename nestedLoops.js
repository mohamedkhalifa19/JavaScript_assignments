
let listOfNeighbours =[
    ['Canada', 'Mexico'],
    ['Spain'], 
    ['Norway', 'Sweden','Russia']
];


for(let i = 0 ;i<listOfNeighbours.length;i++){
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        const element = listOfNeighbours[i][j];
        console.log(`Neighbour: ${element}`);
        
    }
}
