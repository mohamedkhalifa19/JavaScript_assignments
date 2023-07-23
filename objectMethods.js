let myCountry ={
    country :'Egypt' ,
    capital:'Cairo',
    language:'Arabic' ,
    population:105,
    neighbours :['palatine','libya','sudan'],
    isIsland:true,
    describe : function(){
console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland:function(){
        return this.neighbours.length?this.isIsland = true : this.isIsland =false;
    }
}
myCountry['describe']();
console.log(myCountry.checkIsland());
