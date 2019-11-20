var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();


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


// Connect to MySQL database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // run the start function after the connection is made to prompt the user 

  //CONNECTION SUCCESS!
  start();
});

//IN promptUser function
//display available products with their IDs
function start() {
  var query = connection.query("SELECT * FROM product", function (err, res) {
    if (err) throw err;

    var table = new table({
      head: ["Product Name", "Department Name", "Price", "Stock Quantity"]
    });

    for (var i = 0; i < res.length; i++) {
      table.push([results[i].product_name, results[i].department_name, "$" + results[i].price, results[i].stock_quantity]);
      console.log(res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity);
      console.log("-----------------------------------");
    }
  });

  // logging query being run
  console.log(query.sql);
};

// Setting inquire prompt for choice of Department, or show all items.
// function start() {
//   inquirer
//     .prompt({
//       name: "itemChoice",
//       type: "list",
//       message: "Which item would you like to purchase?",
//       choices: 
//       ["KrisMoose Visual 5k 60in TV in 'Electronics' $899.99 150units", 
//       "Turbo Crush Blenderizer", "Electronics", 69.99, 250, 
//       "Pony StayPlaytion 5", "Electronics", 499.99, 30, 
//       "Chilly McLounge Chair", "Home Decor", 299.00, 50, 
//       "Scrub-A-Dub Soap 6pack", "Hygene", 12.99, 120, 
//       "Dungeon & Dragons 24k Gold d20 dice", "Gaming & Toys", 99.99, 15, 
//       "Crapple Watch: Series 6", "Electronics", 249.99, 450, 
//       "Turkish Towels", "Home Decor", 49.99, 350, 
//       "Fuzzy Wuzzy Bearz", "Gaming & Toys", 89.99, 400, 
//       "Ultra Sonic Toothbrush", "Hygene", 199.99, 90, 
//       "Brushy Tooth Tooth Paste", "Hygene", 9.99, 650, 
//       "Street Brawler II", "Gaming & Toys", 59.99, 150, 
//       "Plush Kitty Throw Pillow", "Home Decor", 29.99, 350]
//     })
// }

  // step 3 - Query the database to check if the ID # corresponds to an existing ID # in the products table

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


