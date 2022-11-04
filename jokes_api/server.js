
require('dotenv').config();
const express = require("express");
const app = express();
require("./server/config/mongoose.config");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const routes = require('./server/routes/jokes.routes');
routes(app);

app.listen(process.env.PORT, () => console.log("The server is all fired up on port 8000"));
