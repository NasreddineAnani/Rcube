const express = require('express');
const firebase = require('firebase');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

router.get('/centers/:id', function (req, res) {
  let id = req.params.id;
  // appeler bd postgre
});

router.get('/centers', function (req, res) {
  // get nearest center wit adress
});

// get when thash coming by address
router.get('/trashDay', function (req, res) {
  // get nearest center wit adress
});



module.exports = router;
