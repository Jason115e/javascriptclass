// //Create taco recepies using prototypes first to create what wil be needed for the recepie itself


// function TocoRecepie(meat, seasonings, vegetables, tortilla){

// this.meat = meat;
// this.seasonings = seasonings;
// this.vegetables = vegetables;
// this.tortilla = tortilla;



// }


// TocoRecepie.prototype.pregIngredients = function () {
// console.log(`Get two lbs of ${this.meat} and add to pan in a seperate bowl collect ${this.seasonings} Make to get your ${this.vegetables} and get your fav ${this.tortilla}`);


// }


// //RANDOM NON PROTOTYPE
// const getTypeOfMeat = function(meat){

//     TocoRecepie.call(this.meat);


// }

// console.log(getTypeOfMeat());



// const asadaTaco = new TocoRecepie ('Carne asada', ['Garlic Powder', 'cumin', 'onion', 'salt'], ['lemon', 'tomatoes', 'onion'], 'corn Tortilla' );






// console.log(asadaTaco.pregIngredients());




function CustomerOrders(clientNum, DeliveryTime, QuantityAmount){

this.clientNum = clientNum;
this.DeliveryTime = DeliveryTime;
this.QuantityAmount = QuantityAmount;




}

CustomerOrders.prototype.morningOrders = function () {
    console.log(`Client Number: ${this.clientNum} has selected a delivery time of ${this.DeliveryTime} with a set of amount of ${this.QuantityAmount}`);
    
    
    }



    const orderOne = new CustomerOrders ('2','8am', '3');

    console.log(orderOne.morningOrders());
    

    



