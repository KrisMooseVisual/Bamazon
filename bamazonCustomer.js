var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();
var columnify = require('columnify');
// const Font = require('ascii-art-font');



// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.MY_SQL_PASS,
  database: "bamazon_DB"
});
console.log("-------------------------------------------------------------------------")
console.log("------------------BAMAZON STORE SHOPPING LIST-------------------");
console.log("-------------------------------------------------------------------------")
// Font.fontPath = 'Fonts';
// Font.create('my text', 'Doom', function(rendered){
//   //do stuff here
// });

var columns = columnify([{
  item_id: 135,
  product_name: "Pony 5k 60in TV",
  department_name: "Electronics",
  price: 899.99,
  stock_quantity: 150,
},
{
  item_id: 208,
  product_name: "Turbo Crush Blenderizer",
  department_name: "Electronics",
  price: 69.99,
  stock_quantity: 250,
},
{
  item_id: 13,
  product_name: "Pony StayPlaytion 5",
  department_name: "Electronics",
  price: 499.00,
  stock_quantity: 30,
},
{
  item_id: 34,
  product_name: "Chilly McLounge Chair",
  department_name: "Home Decor",
  price: 299.00,
  stock_quantity: 50,
},
{
  item_id: 51,
  product_name: "Scrub-A-Dub Soap 6pack",
  department_name: "Hygene",
  price: 12.99,
  stock_quantity: 120,
},
{
  item_id: 6,
  product_name: "Dungeon & Dragons 24k Gold d20 dice",
  department_name: "Gaming & Toys",
  price: 99.99,
  stock_quantity: 3,
},
{
  item_id: 47,
  product_name: "Crapple Watch: Series 6",
  department_name: "Electronics",
  price: 249.99,
  stock_quantity: 450,
},
{
  item_id: 13,
  product_name: "Turkish Towels",
  department_name: "Home Decor",
  price: 49.99,
  stock_quantity: 350,
},
{
  item_id: 98,
  product_name: "Fuzzy Wuzzy Bearz",
  department_name: "Gaming & Toys",
  price: 89.99,
  stock_quantity: 400,
},
{
  item_id: 191,
  product_name: "Ultra Sonic Toothbrush",
  department_name: "Hygene",
  price: 199.99,
  stock_quantity: 90,
},
{
  item_id: 5,
  product_name: "Brushy Tooth Tooth Paste",
  department_name: "Hygene",
  price: 9.99,
  stock_quantity: 650,
},
{
  item_id: 19,
  product_name: "Street Brawler II",
  department_name: "Gaming & Toys",
  price: 59.99,
  stock_quantity: 150,
},
{
  item_id: 12,
  product_name: "Plush Jello Kitty Throw Pillow",
  department_name: "Home Decor",
  price: 29.99,
  stock_quantity: 350,
}],
  {
    minWidth: 20,
    config: {
      description: { maxWidth: 30 }
    }
  })
console.log(columns)


// Connect to MySQL database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // run the start function after the connection is made to prompt the user

  // test if connection works, if it does, run promptUser function
  //CONNECTION A SUCCESS!
  startInventory();
});
console.log("----------------------------------------------------------------------------------------")
console.log("-----LOOK ABOVE AT ALL THE AWESOME THINGS BAMAZON HAS FOR SALE!!!-----")
console.log("----------------------------------------------------------------------------------------")

//IN promptUser function
//display available products with their ID #s
function startInventory() {
  inquirer
    .prompt({
      name: "chooseId",
      type: "list",
      message: "Would you like to PURCHASE, or EXIT STORE?",
      choices: ["PURCHASE", "EXIT STORE"]
    })

    .then(function (answer) {
      // Depending on whats was chosen, either enter department list, or show all available items
      if (answer.chooseId === "PURCHASE") {
        console.log("-------------------------------------------------------------------------")
        console.log("----------WELCOME TO THE BAMAZON STORE!----------")
        console.log("-------------------------------------------------------------------------")
        enterStore();
      }
      else if (answer.chooseId === "EXIT STORE") {
        console.log("-------------------------------------------------------------------------")
        console.log("---------------------BYE FELICIA!---------------------")
        console.log("-------------------------------------------------------------------------")
        connection.end();
      }
    });
}
// function for ad
function enterStore() {
  // querying the database for all items sold
  connection.query("SELECT * FROM product", function (err, results) {
    if (err) throw err;

    //   // Setting inquire prompt for choice of product.
    inquirer.prompt([
      {
        name: "product_name",
        type: "rawlist",
        message: "What would you like to buy? I hear 'Street Brawler II' is a pretty good game.",
        choices: function () {
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].product_name);
          }
          return choiceArray;
        },
      },
      {
        name: "product_name",
        type: "input",
        message: "Great choice! How many would you like to buy?",
      },
    ])
      .then(function (answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product === answer.choice) {
            chosenItem = results[i];
          }
        }        
        // determine if quantity is good.
        if (chosenItem.stock_quantity < parseInt(answer.product_name)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE product SET ? WHERE ?",
            [
              {
                stock_quantity: answer.product_name
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("You've successfully purchased an item at Bamazon!! Would you like to continue shopping?");
              start();
            }
          );
        }
        
        else {
          // Not enough in stock start again
          console.log("We're sorry, we don't have enough stock for the quantity your asking for. Try again...");
          start();
        }

      })
  })
}
// step 3 - Query the database to check if the ID # corresponds to an existing ID # in the products table
// connection.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM product", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

      // if their response is "Q" or "q", connection.end();

    // select * from products where id - userResponse
// Once we get response from database, check if the length of the response is greater than 0
    // make sure to console.log to check that it's working
    // if its not, tell the user the items doesn't exist and call the promptUser function again

  // Use inquirer again to ask the user for how many they want.
  // Check quantity from the database query response, see if it's greater than or equal to the under that the user wants (if statement)
    // If user;s request is greater than the available quantity, tell the user its not in stock and call promptUser fucntion again 

  // If there are enough in stock, calculate what the new quantitiy will be by subtracting the users's purchase quantitify from the current quantity. (store this value in a variable)

  // Query the databased to update the new quantity using UPDATE quantitify to new quantitiy where ID is the ID that the user chose
    // Tell the user their purchase was successful, and tell them how much they paid 
    // multiply the quantity by the price of the product

    // call promptUser again


