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


const imageService = {
  getImages: function getImages(q) {
    var params = {
      key: "8332018-35ddb371f35967e63a3b19f45",
      q: q, // automatically URL-encoded
      image_type: "photo",
    };

    return new Promise(function (resolve, reject) {
      PixabayPhotos.query(params, function(errors, res, req) {
        if (errors) {
          console.log('One or more errors were encountered:');
          console.log('- ' + errors.join('\n- '));
          return;
        }
        let images = { images : [] };

        for (let image of res.hits) {
          images.images.push({
            previewUrl : image.previewURL,
            url : image.webformatURL,
            id: image.id
          })
        }

        resolve(images);
      });
    });
  }
}

module.exports = {
  imageService: imageService
};
