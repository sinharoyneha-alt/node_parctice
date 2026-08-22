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
app.get('/', (req, res) => {
    res.send('Welcome to the API');
})

app.post('/', (req, res) => {
    res.send('mongodb+srv://<sinharoyneha_db_user>:<neha2006>@cluster0.vs1liti.mongodb.net/?appName=Cluster0');
})

app.listen(port, () => {
    console.log('Server is running on port', port);
});
