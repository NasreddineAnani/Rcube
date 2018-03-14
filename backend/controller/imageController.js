const express = require('express');
const firebase = require('firebase');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

const imageService = require('../service/imageService');


router.get('/images', function (req, res) {
  imageService.imageService.getImages(req.query.q).then( images => {
    res.status(200).send(images);
  }).catch( err => {
    res.status(500).send(err);
  });
});


module.exports = router;
