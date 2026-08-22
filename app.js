require('dotenv').config();
const express = require('express');
const cors=require('cors');
const app = express();
const mongoDB = require('./db/mongo.config');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
mongoDB();
app.use(cors());
app.use('/api/auth', userRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Server is running on port', port);
});
console.log("hello world");
console.log("ma ka ladle");
