var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const response = await axios.get('http://dog.ceo/api/breeds/image/random');
    const imageUrl = response.data.message;

    console.log('imageUrl', imageUrl);
    res.render('index', { imageUrl, title: 'Dog Image' });
  } catch (err) {
    console.error('Error: ' + err.message);
    res.render('index', { imageUrl: null, title: 'Dog Image' });
  }
});

module.exports = router;
