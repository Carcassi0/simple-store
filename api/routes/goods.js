const express = require('express');
const router = express.Router();
const {Goods} = require('../models/Product'); 

router.get('/', async (req, res) => {
  try {
    const goods = await Goods.find(); 
    res.json(goods);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
