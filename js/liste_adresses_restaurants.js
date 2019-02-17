var michelin = require('./michelin');
var jsonfile = require('jsonfile');

jsonfile.readFile('liste_restaurants.json', function (err, restaurants) {
    //get the address of each restaurant and write a new JSON 'liste_restaurants2.json'
    michelin.getAllAddresses(restaurants);
});