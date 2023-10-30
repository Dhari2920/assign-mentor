const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const route = require("./src/routes");
const app = express();


app.use(express.json());
app.use("/", route);

app.listen(5000,()=>console.log(`Server listening to port ${5000}`)) 