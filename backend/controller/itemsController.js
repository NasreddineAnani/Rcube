const express = require('express');
const firebase = require('firebase');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

router.get('/items/:id', function (req, res) {
  let id = req.params.id;
  linksService.linksService.getLink(id).then( link => {
    res.status(200).send(link);
  }).catch( err => {
    res.status(500).send(err);
  });
});

router.get('/items', function (req, res) {
  var email = req.query.email;
  var username = req.query.username;
  var categorie = req.query.categorie;


  var researchBy = 'email';
  var researchTerm = req.query.email;

  if(username) {
    var researchBy = 'username';
    var researchTerm = req.query.username;
  }

  if(categorie) {
    var researchBy = 'categorie';
    var researchTerm = req.query.categorie;
  }


  var items = [];
  db.collection("items").where(researchBy, "==", researchTerm)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(doc => {
        var data = doc.data();
        data.id = doc.id
        items.push(data);
      });
      res.status(200).send({items : items});
    }).catch(function (error) {
    console.error("Error adding document: ", error);
    res.status(500).send(error);
  });
});

router.post('/items', function (req, res) {
  db.collection("items").add(req.body).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
    res.status(200).send({"id": docRef.id});
  }).catch(function (error) {
    console.error("Error adding document: ", error);
    res.status(500).send(error);
  });
});

router.put('/items/:id', function (req, res) {
  var id = req.params.id;
  db.collection('items').doc(id)
    .update(req.body)
    .then(doc => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(err);
    });
})

router.delete('/items/:id', function (req, res) {
  var id = req.params.id;
  db.collection('items').doc(id)
    .delete()
    .then(doc => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(err);
    });
})


module.exports = router;
