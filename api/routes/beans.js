const express = require('express');
const router = express.Router();
const {Beans} = require('../models/Product'); 

router.get('/', async (req, res) => {
  try {
    const beans = await Beans.find(); 
    res.json(beans);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
