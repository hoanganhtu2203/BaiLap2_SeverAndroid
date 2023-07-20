var express = require('express');
var app = express();
const bodyParser = require("body-parser");
var tinhtoan = require('./tinhtoan')
var expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    defaultLayout: 'main'
}))
app.set('view engine', '.hbs');


app.use(express.static(__dirname));
app.use(express.static('public'));
// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))



app.get("/tinhtoan", (req, res) => {
    console.log(req.body);
    var num1 = Number(req.query.num1);
    var num2 = Number(req.query.num2);
    var operator = req.query.operator;
    let result;
    let op;
    switch (operator) {
        case 'tong':
            result = tinhtoan.tinhTong(num1, num2);
            op = '+';
            break;
        case 'hieu':
            result = tinhtoan.tinhHieu(num1, num2);
            op = '-';
            break;
        case 'tich':
            result = tinhtoan.tinhTich(num1, num2);
            op = 'x';
            break;
        case 'thuong':
            result = tinhtoan.tinhThuong(num1, num2);
            op = '/';
            break;
    }
    res.render("home", {
        layout: 'main',
        a: num1,
        b: num2,
        opera: op,
        kq: result,
        showResult: true
    });
    app.get("/", (req, res) => {
        res.render("home", {
            showResult: false
        });
    });
});

app.listen('8500');