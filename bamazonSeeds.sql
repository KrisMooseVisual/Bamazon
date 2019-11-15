DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("Television", "KrisMoose Visual 5k 60in TV", "Electronics", 899.99, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("Blender", "Turbo Crush Blenderizer", "Kitchen_Appliances", 69.99, 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("Game System", "Stoney StayPlaytion 5", Electronics, 499.99, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("Chilly McLounge Chair", Home_Decor, 299.00, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("Scrub-A-Dub Soap", "" 3.10, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("Dungeon & Dragons 24k Gold d20 dice", 99.99, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("vanilla", 2.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("chocolate", 3.10, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("strawberry", 3.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantitiy)
VALUES ("strawberry", 3.25, 75);