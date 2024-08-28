const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// 환경 변수 설정
dotenv.config();

const app = express();

// MongoDB URI 설정 (환경 변수에서 가져오기)
const uri = process.env.MONGODB_URI;

// Middleware 설정
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB 연결 성공 및 실패 핸들링
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// 기본 API 엔드포인트
app.get('/', (req, res) => {
  res.send('API is working');
});

// 라우터 파일 로드 및 사용
const beansRoutes = require('./routes/beans'); 
const coldbrewRoutes = require('./routes/coldbrew'); 
const dripbagRoutes = require('./routes/dripbag'); 
const goodsRoutes = require('./routes/goods'); 

app.use('/api/beans', beansRoutes);
app.use('/api/coldbrew', coldbrewRoutes);
app.use('/api/dripbag', dripbagRoutes);
app.use('/api/goods', goodsRoutes);

// 포트 설정 (Vercel에서는 자동으로 설정됨)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
