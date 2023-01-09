const path = require('path');
const https = require('https');
require('dotenv').config()
const redis = require('redis');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const api_key =require('./config/config');
const authRoutes = require('./routes/auth');
const teacherRoutes=require('./routes/teacher')
const homeRoutes= require('./routes/homepage')
const courseRoutes=require('./routes/coursepage')
const userRoutes=require('./routes/user')
// const {addRoom,getUser} = require('./chat');
const MONGODB_URI =api_key.mongo;
const app = express();
const options = {
  key: fs.readFileSync('../../ssl/privateKey.pem'),
  cert: fs.readFileSync('../../ssl/anthonygunardi_com_cert.pem'),
};
const server = https.createServer(options, app);
const PORT = 5001;

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use('/videos',express.static(path.join(__dirname, 'videos')));
app.use((req, res, next) =>{  // To remove CROS (cross-resource-origin-platform) problem 
  res.setHeader('Access-Control-Allow-Origin',"*"); // to allow all client we use *
  res.setHeader('Access-Control-Allow-Methods',"OPTIONS,GET,POST,PUT,PATCH,DELETE"); //these are the allowed methods 
  res.setHeader('Access-Control-Allow-Headers', "*"); // allowed headers (Auth for extra data related to authoriaztiom)
  next();
})
app.use(authRoutes);
app.use(teacherRoutes);
app.use(homeRoutes);
app.use(courseRoutes);
app.use(userRoutes);
app.get('/', (req,res) => {
  res.send('Welcome to No Limit Learning API')
});

if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(MONGODB_URI,{ useUnifiedTopology: true,useNewUrlParser: true })
    .then(()=> {
          server.listen(PORT);
          console.log(`Server Started at port ${PORT}!`)
      })
    .catch(err => {
      console.log(err);
    });
}
module.exports = app;