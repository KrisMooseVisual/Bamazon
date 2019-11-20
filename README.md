# Bamazon

This assignment was to make an Amazon like app. Making it into an online store combining node.js and MySQL.

## App Demo
* Click link below to view demo video

- [!Demo Vid](https://drive.google.com/file/d/1WoJufe9vMqJphjr1USPFcbzARFM4QuO9/view)

## About The App
* This is like an Amazon online store. Creating a database using MySQL, you'll be able to see a list of items that are for sale, how many are in stock, and the product name. When you place your order and the quantity of the item, the store's inventory should drop minus the quantity purchased.

## How The App Works

- From the customers perspective, you'll see upon entering and running the command 'node bamazonCustomer.js', you'll see the Bamazon shopping list showing:
    - An item ID
    - Product name
    - Department name
    - Price
    - Stock Quantity

- You'll see a list of the items for purchase and you'll be prompted with two questions, what would you like to buy and how many units of the item you'd like to buy.

 - After choosing item and your quantity, the database created should, when refreshed, reflect a drop in the quantity of inventory.

 - If the item doesn't have enough in stock, you'll be prompted with a "not enough stock, try again" and it will force you to make another decision.

