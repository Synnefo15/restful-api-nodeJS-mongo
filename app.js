// &---- Express Import ----
const express = require('express');
const app = express()

// &---- Mongoose ----
const mongoose = require('mongoose');

// &---- Body parser ----
const bodyParser = require('body-parser');

const cors = require('cors');
// &---- req env ----
require('dotenv/config');

app.use(cors())
app.use(bodyParser.json())

// &---- Import route ----
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/users');
// % Memasukkan dari routes 
app.use('/posts',postsRoute)
app.use('/users',userRoute)

// &---- Route ----
app.get('/',(req,res) => {
    res.send(/*html*/ ` <h2>Home Page</h2> `)
})


// &---- Connect DB ----
mongoose.connect(process.env.DB_CONNECTION, () => {
	console.log(`Connect to DB`);
});

// &---- Listening port ----
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server Runnning at http://localhost:${PORT}`);
})