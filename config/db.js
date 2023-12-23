const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Server is connecting on Mongodb');
  } catch (error) {
    console.error('Connexion on DB error :', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
