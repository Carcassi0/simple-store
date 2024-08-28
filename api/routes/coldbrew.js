const express = require('express');
const router = express.Router();
const {Coldbrew} = require('../models/Product'); 

router.get('/', async (req, res) => {
  try {
    const coldbrew = await Coldbrew.find(); 
    res.json(coldbrew);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
