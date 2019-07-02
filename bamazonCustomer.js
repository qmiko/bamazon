var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    password: '',
    user: 'root',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllProducts();
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("----------------------------------");
        msgPrompt();
    });
};

function msgPrompt(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Enter Item ID",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many items would you like to purchase?",
            filter: Number
        }
    ]).then(function(answers){
        var IDrequest = answers.ID;
        var prodQuantity = answers.Quantity;
        orderInfo(IDrequest, prodQuantity)
    });
};

function orderInfo(ID, stockQuantity){
    connection.query('Select * FROM products WHERE `item_id` = ' + ID, function(err, res){
        if(err){console.log(ERROR)};
        if(res[0] !== undefined){
            if((stockQuantity <= res[0].stock_quantity)){
                var orderCost = res[0].price * stockQuantity;
                console.log("Your total cost for " 
                + stockQuantity + " " 
                + res[0].product_name + " is " 
                + orderCost + " Thank you!");
                connection.query("UPDATE products SET stock_quantity = stock_quantity - " + stockQuantity + " WHERE `item_id` = " + ID);
            }else{
                console.log("Insufficient Quantity!")
            };
        }else{
            console.log("No result for that id!");
        }
        queryAllProducts();
    });
};

// queryAllProducts();