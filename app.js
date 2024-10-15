const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorscontroller = require('./controller/error')
const app = express();
app.set('view engine' ,'ejs');
app.set('views','views');

const adminroute = require('./route/admin')
const shop =require('./route/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminroute.routes);
app.use(shop);

app.use(errorscontroller.errors);

app.listen(3000);
