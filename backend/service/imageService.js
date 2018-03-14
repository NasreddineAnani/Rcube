const req = require('request');
const firebase = require('firebase');
const admin = require('firebase-admin');
const db = admin.firestore();

const shutterstock = require('shutterstock');
const shutterstockapi = shutterstock.v2({
  clientId: '24071-63515-4c20b-15bf5-6c38b-4184a',
  clientSecret: 'd2686-d52d9-f2f9b-98b46-8f1f3-5389f',
});

const PixabayApi = require('node-pixabayclient');
const PixabayPhotos = new PixabayApi({ apiUrl: "https://pixabay.com/api/" });

var params = {
  key: "8332018-35ddb371f35967e63a3b19f45",
  q: "yellow flowers", // automatically URL-encoded
  image_type: "photo",
};

const imageService = {
  getImages: function getImages() {
    return new Promise(function (resolve, reject) {
      shutterstockapi.image.search('cars', function(err, data) {
        if (err) {
          throw reject(err);
        }
        console.log(data);

        PixabayPhotos.query(params, function(errors, res, req) {
          if (errors) {
            console.log('One or more errors were encountered:');
            console.log('- ' + errors.join('\n- '));
            return;
          }

          console.log('Photos request:');
          console.log(req);

          console.log('Photos API response:');
          console.log(res);

          resolve(res);
        });



      });
    });
  }
}

module.exports = {
  imageService: imageService
};
