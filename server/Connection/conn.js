const mongoose = require('mongoose');
require('dotenv').config();

class DatabaseConnection {
  constructor() {
    this.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/Youtube-Backend';
    this.isConnected = false;
  }

  async connect() {
    if (this.isConnected) {
      console.log("Already connected to MongoDB");
      return;
    }

    try {
      await mongoose.connect(this.MONGO_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
      });
      this.isConnected = true;
      console.log("Connected to MongoDB successfully");
    } catch (err) {
      console.log("Error connecting to MongoDB", err);
      throw err;
    }
  }

  async disconnect() {
    if (!this.isConnected) {
      return;
    }

    try {
      await mongoose.disconnect();
      this.isConnected = false;
      console.log("Disconnected from MongoDB");
    } catch (err) {
      console.log("Error disconnecting from MongoDB", err);
      throw err;
    }
  }
}

const dbConnection = new DatabaseConnection();
dbConnection.connect();

module.exports = dbConnection;