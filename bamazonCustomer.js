var mysql = require("mysql");
//var inquirer = require("inquirer");
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


//BAMAZON PSEUDO CODE!

// Connect to MySQL database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // run the start function after the connection is made to prompt the user
  //start();
});

// test if connection works, if it does, run promptUser function

//IN promptUser function
  // step 1 - display available products with their ID #s
  // step 2 - Use inquirer to ask the user for the ID # of the product they want
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


