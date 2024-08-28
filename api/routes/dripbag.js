const express = require('express');
const router = express.Router();
const {Dripbag} = require('../models/Product'); 

router.get('/', async (req, res) => {
  try {
    const dripbag = await Dripbag.find(); 
    res.json(dripbag);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
