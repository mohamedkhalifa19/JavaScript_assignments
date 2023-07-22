let neighbours =['palatine','libya','sudan'];
console.log(neighbours);
neighbours.push('Utopia');
neighbours.pop();
if(!neighbours.includes('Germany')){
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('libya')] = 'tunis';
console.log(neighbours);
