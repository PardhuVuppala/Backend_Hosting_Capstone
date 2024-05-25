const express = require('express');
var cors = require('cors')
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())

//app.use(express.urlencoded({ extended: false }));
app.use(cors(
    {
        origin : ["https://container-management-website.vercel.app"],
        methods:["POST","GET"],
        credentials:true   
    }
))
app.use(express.json());

const my_mongoose = require('./db.js');
const userApi = require('./controllers/user_controller_api')
const contApi = require('./controllers/container_api');
const ownerAPI = require('./controllers/owner_api');
const BookingContainer = require('./controllers/booking_container');
const NotificationApi = require('./controllers/notification_api');
const PaymentApi = require('./controllers/Payment_Controller');
app.use('/con',contApi);
app.use('/user',userApi);
app.use('/owner',ownerAPI);
app.use('/Booking',BookingContainer)
app.use('/Notification',NotificationApi)
app.use('/payment',PaymentApi)

app.get("/",(req,res)=>
    {
        res.json("Hello")
    })

app.listen(4500, () => console.log('EXPRESS Server Started at Port No: 4500 '));
