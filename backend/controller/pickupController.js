const express = require('express');
const firebase = require('firebase');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

router.get('/pickup/:id', function (req, res) {
  let id = req.params.id;

});

router.post('/pickup', function (req, res) {
  db.collection("pickup").add(req.body).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
    res.status(200).send({"id": docRef.id});
  }).catch(function (error) {
    console.error("Error adding document: ", error);
    res.status(500).send(error);
  });
});



module.exports = router;
