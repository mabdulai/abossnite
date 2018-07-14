var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var uri = 'https://api.fortnitetracker.com/v1/profile/pc/mabdulai';
  request.get(uri ,{
    headers : { 'TRN-Api-Key': '8d06d9a4-2e55-45ac-a3aa-dc49e7797ee6'}
  }, (error,response,body) => {
        res.json(body);
    });
});

module.exports = router;
