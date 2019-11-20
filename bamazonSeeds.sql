USE bamazon_DB;

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES 
("Pony 5k 60in TV", "Electronics", 899.99, 150),
("Turbo Crush Blenderizer", "Electronics", 69.99, 250), 
("Pony StayPlaytion 5", "Electronics", 499.99, 30),
("Chilly McLounge Chair", "Home Decor", 299.00, 50),
("Scrub-A-Dub Soap 6pack", "Hygene", 12.99, 120),
("Dungeon & Dragons 24k Gold d20 dice", "Gaming & Toys", 99.99, 3),
("Crapple Watch: Series 6", "Electronics", 249.99, 450),
("Turkish Towels", "Home Decor", 49.99, 350),
("Fuzzy Wuzzy Bearz", "Gaming & Toys", 89.99, 400),
("Ultra Sonic Toothbrush", "Hygene", 199.99, 90),
("Brushy Tooth Tooth Paste", "Hygene", 9.99, 650),
("Street Brawler II", "Gaming & Toys", 59.99, 150),
("Plush Jello Kitty Throw Pillow", "Home Decor", 29.99, 350);


SELECT * FROM product;