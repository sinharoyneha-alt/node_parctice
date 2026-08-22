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

app.post('/', async(req, res) => {

        try{
            const {name,email,password}=req.body;
            if(!name || !email || !password){
                return res.status(400).json({
                    message:"All fields are required"
                });
            }
            res.status(200).json({
                message:"Data received successfully",
                data:req.body
            });
        }catch(err){
            res.status(500).json({
                message:"Internal server error",
                error:err.message
            });
        }
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});
