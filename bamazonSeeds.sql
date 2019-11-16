DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE overview (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

-- INSERT INTO Electronic (product_name, department_name, price, stock_quantitiy)
-- VALUES ("KrisMoose Visual 5k 60in TV", "Television", 899.99, 150);

-- INSERT INTO Kitchen (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Turbo Crush Blenderizer", "Kitchen Appliances", 69.99, 250);

-- INSERT INTO Gaming (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Stoney StayPlaytion 5", "Game System", 499.99, 30);

-- INSERT INTO Furniture (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Chilly McLounge Chair", "Home Decor", 299.00, 50);

-- INSERT INTO Bath (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Scrub-A-Dub Soap 6pack", "Soaps", 12.99, 120);

-- INSERT INTO Entertainment (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Dungeon & Dragons 24k Gold d20 dice", "Gaming", 99.99, 15);

-- INSERT INTO Fashion (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Moovado Watch", "Mens Fashion", 259.99, 150);

-- INSERT INTO Bedroom  (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Turkish Towels", "Bath and Decor", 49.99, 350);

-- INSERT INTO Toys (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Fuzzy Wuzzy Bearz", "Toys", 89.99, 400);

-- INSERT INTO Dental (product_name, department_name, price, stock_quantitiy)
-- VALUES ("Ultra Sonic Toothbrush", "Dental Care", 199.99, 90);