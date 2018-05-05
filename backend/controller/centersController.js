const express = require('express');
const request = require('request');

const firebase = require('firebase');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

const host = 'http://10.212.32.104:5000';

router.get('/nearestCenter', function (req, res) {
  // get nearest center with address
  console.log(req.query.address);
  let address = req.query.address;
  let url = host + "/nearestCenter/" + address;
  console.log(url);
  request(url, (error, result, body) => {
    console.log(body);
    res.status(200).send({"nearestCenter": body});

  });
});

// get when trash coming by address
router.get('/trashDay', function (req, res) {
  console.log(req.query.address);
  let address = req.query.address;
  let url = host + "/trashDay/" + address;
  console.log(url);
  request(url, (error, result, body) => {
    console.log(body);
    res.status(200).send({"trashDay": body});

  });
});


module.exports = router;
