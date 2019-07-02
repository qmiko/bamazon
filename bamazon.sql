DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(20) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Polaroid OneStep", "Camera & Photos", 99.95, 20),
("bubly Sparkling Water", "Grocery", 10.99, 100),
("PopSocket", "Cell Phones & Accessories", 9.18, 30),
("Reusable Stainless Steel Straws", "Kitchen & Dining", 21.87, 70),
("Towels", "Bath Towels", 18.99, 50),
("Echo", "Electronics", 99.99, 170),
("Oil Diffuser", "Beauty & Personal Care", 19.99, 100),
("Umbrella", "Luggage & Travel Gear", 22.95, 140),
("USB A Cable", "Cell Phone Chargers & Power Adapters", 12.78, 200),
("Sunglasses", "Men's Fashion", 14.95, 60),
("Power Rangers Super Ninja", "Toys & Games", 17.30, 53),
("Coleman Dome Tent", "Outdoor Recreation", 85.49, 70),

