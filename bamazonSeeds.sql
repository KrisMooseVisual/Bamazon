DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (Id)
);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("KrisMoose Visual 5k 60in TV", "Television", 899.99, 150);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Turbo Crush Blenderizer", "Kitchen Appliances", 69.99, 250);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Stoney StayPlaytion 5", "Game System", 499.99, 30);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Chilly McLounge Chair", "Home Decor", 299.00, 50);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Scrub-A-Dub Soap 6pack", "Soaps", 12.99, 120);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Dungeon & Dragons 24k Gold d20 dice", "Gaming", 99.99, 15);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Moovado Watch", "Mens Fashion", 259.99, 150);

INSERT INTO product  (product_name, department_name, price, stock_quantity)
VALUES ("Turkish Towels", "Bath and Decor", 49.99, 350);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Fuzzy Wuzzy Bearz", "Toys", 89.99, 400);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Ultra Sonic Toothbrush", "Dental Care", 199.99, 90);