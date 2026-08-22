const mongoose = require('mongoose');
const mongoConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log('MongoDB successfully connected!');
    }
    catch (error) {
    console.error('Database connection error:', error.message);

    }
}

module.exports=mongoConnection;
