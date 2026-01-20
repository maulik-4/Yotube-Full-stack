const express = require('express');
const cookieParser = require('cookie-parser'); 
const cors = require('cors');
require('dotenv').config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 9999;
    this.setupMiddleware();
    this.setupDatabase();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(cors({
      origin: ['http://localhost:5173', "https://yotube-full-stack.vercel.app"],
      credentials: true,
    }));
    
    this.app.use(express.json());
    this.app.use(cookieParser());
  }

  setupDatabase() {
    require('./Connection/conn');
  }

  setupRoutes() {
    const authRoutes = require('./Routes/user');
    const videoRoutes = require('./Routes/video');
    
    this.app.use('/auth', authRoutes);
    this.app.use('/api', videoRoutes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();

module.exports = server;
