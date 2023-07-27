const path = require('path');
const Sequelize=require('sequelize');
const sequelize=require('./util/database');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//to create table
 sequelize.sync()
 .then(result=>{
    app.listen(3000,()=>{
        console.log("3000 port started...")
    });
 })
 .catch(err=>{
    console.log(err);
 })

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

 
