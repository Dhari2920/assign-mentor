const mongoose = require('mongoose')
const uri ='mongodb+srv://dharika29:Knight2920@cluster0.pkez5lo.mongodb.net/'

try{
    mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
    console.log("Database Connected Sucessfully")
    }
catch (error) {
    console.log(error)
}

module.exports=mongoose