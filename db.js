const mongoose = require('mongoose');

require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose.connect(url).then(()=>
{
    console.log('NodeJs To MongoDB Connection Enable')
})
.catch(err =>
{
        console.log("Error in DB connection : " +JSON.stringify(err,undefined,2));
})
module.exports = mongoose;