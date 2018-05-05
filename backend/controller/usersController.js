var express = require('express');
var firebase = require('firebase');
const admin = require('firebase-admin');

var router = express.Router();

var db = admin.firestore();

router.post('/users', function (req, res) {
    console.log(req.body);
    db.collection("users").add(req.body).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        res.status(200).send({"id": docRef.id});
    }).catch(function (error) {
        console.error("Error adding document: ", error);
        res.status(500).send(error);
    });
});

router.get('/users', function (req, res) {
    var email = req.query.email;
    var username = req.query.username;

    var researchBy = 'email';
    var researchTerm = req.query.email;

    if(username) {
        var researchBy = 'displayName';
        var researchTerm = req.query.username;
    }

    var users = [];
    db.collection("users").where(researchBy, "==", researchTerm)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(doc => {
                var data = doc.data();
                data.id = doc.id
                users.push(data);
            });
            res.status(200).send({users : users});
        }).catch(function (error) {
            console.error("Error adding document: ", error);
            res.status(500).send(error);
        });
});

router.get('/users/:id', function (req, res) {
    var id = req.params.id;
    db.collection('users').doc(id)
        .get()
        .then(doc => {
            if (!doc.exists) {
                res.status(404).send('Not found');
            } else {
                var data = doc.data();
                data.id = doc.id
                res.status(200).send(data);
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
})

router.put('/users/:id', function (req, res) {
    var id = req.params.id;
    db.collection('users').doc(id)
        .update(req.body)
        .then(doc => {
            console.log(doc)
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
})

router.delete('/users/:id', function (req, res) {
    var id = req.params.id;
    db.collection('users').doc(id)
        .delete()
        .then(doc => {
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
})


module.exports = router;
