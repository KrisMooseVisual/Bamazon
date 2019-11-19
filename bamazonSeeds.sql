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
VALUES ("KrisMoose Visual 5k 60in TV", "Electronics", 899.99, 150);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Turbo Crush Blenderizer", "Electronics", 69.99, 250);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Pony StayPlaytion 5", "Electronics", 499.99, 30);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Chilly McLounge Chair", "Home Decor", 299.00, 50);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Scrub-A-Dub Soap 6pack", "Hygene", 12.99, 120);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Dungeon & Dragons 24k Gold d20 dice", "Gaming & Toys", 99.99, 15);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Crapple Watch: Series 6", "Electronics", 249.99, 450);

INSERT INTO product  (product_name, department_name, price, stock_quantity)
VALUES ("Turkish Towels", "Home Decor", 49.99, 350);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Fuzzy Wuzzy Bearz", "Gaming & Toys", 89.99, 400);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Ultra Sonic Toothbrush", "Hygene", 199.99, 90);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Brushy Tooth Tooth Paste", "Hygene", 9.99, 650);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("Street Brawler II", "Gaming & Toys", 59.99, 150);

INSERT INTO product  (product_name, department_name, price, stock_quantity)
VALUES ("Plush Kitty Throw Pillow", "Home Decor", 29.99, 350);

SELECT * FROM products;