const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp()

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Received a request from: ' + JSON.stringify(request.query));
    let image = admin.storage().bucket().file('image.png').createReadStream();
    image.pipe(response)
});
