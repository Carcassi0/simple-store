
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const uri = process.env.MONGODB_URI; // MongoDB Atlas URI, 환경 변수로 설정
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// Middleware
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.get('/', (req, res) => {
  res.send('API is working');
});


const beansRoutes = require('./routes/beans'); 
const coldbrewRoutes = require('./routes/coldbrew'); 
const dripbagRoutes = require('./routes/dripbag'); 
const goodsRoutes = require('./routes/goods'); 

app.use('/api/beans', beansRoutes);
app.use('/api/coldbrew', coldbrewRoutes);
app.use('/api/dripbag', dripbagRoutes);
app.use('/api/goods', goodsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;