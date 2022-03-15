const Mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGODB;

const connectDatabase = () => {

  const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  Mongoose.connect(URL, options);
};

exports.connectDatabase = connectDatabase;