const req = require('request');
const firebase = require('firebase');
const admin = require('firebase-admin');
const db = admin.firestore();


const linksService = {
  getItems: function getLink(id) {
    return new Promise(function (resolve, reject) {
      resolve(true);
    });
  }
}

module.exports = {
  linksService: linksService
};
