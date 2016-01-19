var store1 = {
  '2015-01-06': [
    ['Dark Chocolate Crunchies', '4.39', 1],
    ['Mint Wafers', '1.19', 3],
    ['Peppermint Poppers', '2.48', 2],
    ['Peanut Butter Buttered Peanuts', '1.89', 6]
  ],
  '2015-01-07': [
    ['Dark Chocolate Crunchies', '4.39', 4],
    ['Berry Bites', '7.99', 3],
    ['Peppermint Poppers', '2.48', 1],
    ['Caramel Twists', '.60', 7]
  ],
  '2015-01-08': [
    ['Banana Bunches', '4.63', 1],
    ['Peppermint Poppers', '2.48', 3],
    ['Mint Wafers', '1.19', 7],
    ['Dark Chocolate Crunchies', '4.39', 2],
    ['Caramel Twists', '.60', 1]
  ],
  '2015-01-09': [
    ['Caramel Twists', '.60', 3],
    ['Peanut Butter Buttered Peanuts', '1.89', 2]
  ],
  '2015-01-10': [
    ['Peanut Butter Buttered Peanuts', '1.89', 7],
    ['Caramel Twists', '.60', 2],
    ['Berry Bites', '7.99', 3],
    ['Dark Chocolate Crunchies', '4.39', 8],
    ['Mint Wafers', '1.19', 2]
  ]
}

var store2 = {
  'inventory prices': {
      'Dark Chocolate Crunchies': 4.29,
      'Mint Wafers': 1.09,
      'Peppermint Poppers': 2.38,
      'Peanut Butter Buttered Peanuts': 1.79,
      'Berry Bites': 7.89,
      'Caramel Twists': .50,
      'Banana Bunches': 4.53
  },
  'sale dates': {
      'Dark Chocolate Crunchies': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-08'],
      'Mint Wafers': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-09'],
      'Peppermint Poppers': ['2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Peanut Butter Buttered Peanuts': ['2015-01-07', '2015-01-07'],
      'Berry Bites': ['2015-01-06', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10'],
      'Caramel Twists': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Banana Bunches': ['2015-01-10', '2015-01-10']
  }
}

var store3 = [
  {
    'date':'2015-01-06',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':0
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':3
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-07',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':2
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':1
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':3
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-08',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':2
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':0
      }
    }
  },
  {
    'date':'2015-01-09',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':3
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':2
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':1
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-10',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':2
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':5
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':2
      }
    }
  }
]

var store4 = {
      'Dark Chocolate Crunchies': {
        'cost': 4.34,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08']
      },
      'Mint Wafers': {
        'cost': 1.14,
        'sold on': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09']
      },
      'Peppermint Poppers': {
        'cost': 2.43,
        'sold on': ['2015-01-07', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10', '2015-01-10']
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.84,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-08']
      },
      'Berry Bites': {
        'cost': 7.94,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10', '2015-01-10']
      },
      'Caramel Twists': {
        'cost': .55,
        'sold on': ['2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10']
      },
      'Banana Bunches': {
        'cost': 4.58,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-10']
      }
}


// How would I access the value '4.63' from store1?
//console.log(store1['2015-01-08'][0][1]);

// What about the cost of 'Dark Chocolate Crunchies' from store4?
//console.log(store4['Dark Chocolate Crunchies']['cost']);

// Now get the sale dates for 'Banana Bunches' from store2.
//console.log(store2['sale dates']['Banana Bunches']);

// What built-in array property would I use to determine how many sale dates there for store2's 'Banana Bunches'?
//.length

// Use the same property to count the total number of 'Berry Bites' sold by store4.
//console.log(store4['Berry Bites']['sold on'].length);

// Create a variable to store the name of a candy (such as var candy = 'Caramel Twists'). Use this variable to access the sale dates for that candy in store 2.
//var candy = 'Caramel Twists';
//console.log(store2['sale dates'][candy]);

// Update the previous candy name variable to a different candy. How did that change the sale date data ouput?
// var candy = 'Mint Wafers';
// console.log(store2['sale dates'][candy]);

//Now let's try updating some values:
//Set a variable to equal the prices of the 'Mint Wafers' in store2. 
//(Spoiler warning... var mintWafersCost = store2['inventory prices']['Mint Wafers'])
//var mintWaferCost = store2['inventory prices']['Mint Wafers'];

//When you update your new variable, does the price in the store2 data change? Why?
// Nope. the variable's value is stored sepreately from the value in store2

//Now set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. (Spoiler... var pbbpSaleDates = store2['sale dates'])
//var pbbpSaleDates = store2['sale dates']['Peanut Butter Buttered Peanuts'];

//Use the Array.push() method to add two sale dates to the pbbpSaleDates variable. Does the original store 2 data change? Why?
//pbbpSaleDates.push('2016-01-01', '2016-01-02');

//Use Array.pop() to remove one of the sale dates for store2's Caramel Twists.
//pbbpSaleDates.pop();

//Set a variable equal to Berry Bites data for store3 on January 7. (Spoiler... `var berryBitesData = store3[1]['inventory sold']['Berry Bites'])
//var berryBitesData = store3[1]['inventory sold']['Berry Bites'];

//Use your new variable to modify the quantity sold. Do you expect the store3 variable to have changed? Why?
//console.log(berryBitesData['cost']);
//berryBitesData['cost'] = 100;
//console.log(berryBitesData['cost']);

// Now let's loop over some of the data:
// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
// var janEightSales = store1['2015-01-08'];
// var arrJanEightSales = [];
// 
// 
// for ( var i = 0; i < janEightSales.length; i++) {
//   console.log(janEightSales[i][0]);
//   arrJanEightSales.push(janEightSales[i][0]);
// }
// 
// console.log(arrJanEightSales);


//With your previous loop, use it to count the total number of candies sold that day at store1. Where do you have to initialize the counter variable? Why?
/*
var counter = 0
for ( var i = 0; i < janEightSales.length; i++) {
  counter = counter + janEightSales[i][2];
  console.log(janEightSales[i][2]);
}
console.log("total sales: " + counter);
*/


//Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.
// var arrStore3SaleDates = [];
// 
// for ( var i = 0; i < store3.length; i++) {
//   arrStore3SaleDates.push(store3[i].date);
// }
// 
// console.log(arrStore3SaleDates);

//Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.

// var arrOfDates = store2['sale dates']['Caramel Twists'];
// console.log(arrOfDates);
// 
// var objCaramelTwists = {};
// for ( var i = 0; i < arrOfDates.length; i++) {
//   if (objCaramelTwists[arrOfDates[i]]) {
//     ++objCaramelTwists[arrOfDates[i]];
//   }
//   else {objCaramelTwists[arrOfDates[i]] = 1}
// }
// 
// console.log(objCaramelTwists);


//What problems did you have with the previous task? Were you able to easily increment the quantity sold data? Why?
// It was easy once Garan talked me through it

//Use Object.keys() to get an array of the dates that candies were sold at store1.
/* var arrStore = Object.keys(store1); */
/* console.log(arrStore); */


//Objects don't have a built-in length property, but we can use the array of keys to determine the "length" of the object.
/* console.log(arrStore.length); */

//Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
/*
for ( var i = 0; i < arrStore.length; i++) {
  console.log(store1[arrStore[i]]);
}
*/

//Now, use the previous loop to calculate the total number of candies sold at store1. Where do you have to initialize the counter variable? Why?
/*
var totalCandiesSold = 0;

for (var i = 0; i < arrStore.length; i++) {
  var index = arrStore[i];
  var subIndex = store1[index];
  for (var j = 0; j < subIndex.length; j++) {
    totalCandiesSold = totalCandiesSold + subIndex[j][2];
}
}
*/

/* console.log(totalCandiesSold); */
//Use the current loop to build an object with each candy as the key and the price as the value.

/*
var objStore1CandiesAndPrices = {};
var objStore1CandiesAndQuantities = {};
for (var i = 0; i < arrStore.length; i++) {
  var index = arrStore[i];
  var subIndex = store1[index];
  for (var j = 0; j < subIndex.length; j++) {
      objStore1CandiesAndPrices[subIndex[j][0]] = subIndex[j][1];
      objStore1Candies:subIndex[j][0] = subIndex[j][1];
    }
}

/* console.log(objStore1CandiesAndPrices); */


//Within the same loop, create an object similar to {'Mint Wafers': 12, 'Banana Bunches': 1} where each candy is a key and the value is the quantity sold.

/*
var objStore1CandiesAndPrices = {};
var objStore1CandiesAndQuantities = {};
for (var i = 0; i < arrStore.length; i++) {
  var index = arrStore[i];
  var subIndex = store1[index];
  for (var j = 0; j < subIndex.length; j++) {
      objStore1CandiesAndPrices[subIndex[j][0]] = subIndex[j][1];
      objStore1CandiesAndQuantities[subIndex[j][0]] = subIndex[j][2];
      objStore1Candies:subIndex[j][0] = subIndex[j][1];
    }
}

console.log(objStore1CandiesAndPrices);
console.log(objStore1CandiesAndQuantities);
*/

//Did you have any trouble adding the quantities sold for each candy? Why? How did you work around this?

//Now create a similar object as before, but with each date as the key and the total number of candies sold that day as the value.
// var arrStore = Object.keys(store1);
// var objStore1DatesAndQuantities = {};
// 
// for (var i = 0; i < arrStore.length; i++) {
//   var totalCandiesSold = 0;
//   var index = arrStore[i];
//   var subIndex = store1[index];
//   for (var j = 0; j < subIndex.length; j++) {
//     totalCandiesSold = totalCandiesSold + subIndex[j][2];
//     }
//   objStore1DatesAndQuantities[index] = totalCandiesSold;
// }
// 
// console.log(objStore1DatesAndQuantities);


//Use Object.keys() to loop over the inventory sold for a specific day in store3. While iterating over the data, create an object containg each candy's name and price.
// // Declare an empty object that will hold candy names paired with prices
// var objStore3Day1Candies = new Object();
// 
// // Declare var short. Short will be used as an abbreviation for the specific day of sales I chose.
// var short = store3[1]['inventory sold']
// // Use Object.keys to store all the candy names in an array
// var keys = Object.keys(short);
// 
// for (var i = 0; i < keys.length; i++) {
//   var hold = keys[i];
//   objStore3Day1Candies[hold] = short[keys[i]]['cost'];
// }
// 
// console.log(objStore3Day1Candies);

//Using the same technique, iterate over store2's sale dates data. Which day had the most total number of sales? How did you calculate this?
// var keys = Object.keys(store2['sale dates']);
// 
// var objSalesByDate = {};
// 
// for (var i = 0; i < keys.length ; i++) {
//   arrOfDates = store2['sale dates'][keys[i]];
//   for (var j = 0; j < arrOfDates.length; j++){
//     if (objSalesByDate[arrOfDates[j]]) {
//       ++objSalesByDate[arrOfDates[j]];
//     }
//     else {objSalesByDate[arrOfDates[j]] = 1;
//     }
//   }
// }
// 
// console.log(objSalesByDate);


//After doing all of the above, see if you can do the following tasks:
//Create an array of the candies sold by store1 on January 10th.


//Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)


//Can you do the following inside of another loop to determine the total amount that store4 made?


//Determine how much money did store3 make on January 9th.


//Calculate how much they made from selling Dark Chocolate Crunchies across all the days.


//Create an object containing the amounts that store2 made by selling each type of candy.


//Questions to consider:
//Which store had the easiest data to access? Why? Did it depend on the task?


//How can the order of keys in a nested object make a specific task easier or harder?


//Can you think of a better way to store the data in order to keep track of the inventory sold?


//Stretch Goals: (these are hard!)
//For each store, create two objects. The first one will use the candy names as the keys and the value will be another object containing the sale price and the quantities sold. The second object will use the dates as the main key and each value will be an object with key-value pairs of each candy name and the money made selling that candy.


//Using the ideal data structure that you laid out before as a pattern, create functions to create new store data arrays from the existing data. This is called 'normalizing' the data - you are making it all consistent to ease future tasks.


//Build onto the previous functions by combining the data from the four separate stores so that you have a single set of data. Make sure that you don't lose any details from the initial data.


//After creating a function to combine the data, create two additional functions, getInventoryCountSold() and getGrossProfit() which respectively get the total numbers of items sold and the total dollars from sales. Each item can optionally take a type of candy to return the numbers about that candy. If there's no argument passed, it should return the total numbers for all candy types. For example, getInventoryCountSold('Banana Bunches') should return 12.


module.exports = {
  store1: store1,
  store2: store2,
  store3: store3,
  store4: store4
};