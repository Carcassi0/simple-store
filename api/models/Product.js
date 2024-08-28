// models/Product.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beanSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

const coldbrewSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

const dripbagSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

const goodsSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

const Beans = mongoose.model('Bean', beanSchema);
const Coldbrew = mongoose.model('Coldbrew', coldbrewSchema);
const Dripbag = mongoose.model('Dripbag', dripbagSchema);
const Goods = mongoose.model('Goods', goodsSchema);

module.exports = { Beans, Coldbrew, Dripbag, Goods };