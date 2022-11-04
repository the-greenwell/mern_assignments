const mongoose = require('mongoose');
require('dotenv').config()

const username = encodeURIComponent(process.env.DB_USR)
const password = encodeURIComponent(process.env.DB_PSW)

mongoose.connect(`mongodb+srv://${username}:${password}@we-shook.zsm3w.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connected :)'))
    .catch(err => console.log('DB error: ', err));