var request = require('request');

exports.handler = (event, context, callback) => {
  var options = {
    url: process.env.SERVER_URL + '/jobs/' + process.env.JOB_NAME,
    method: 'POST',
    headers: {
      'X-Parse-Application-Id': process.env.APP_ID,
      'X-Parse-Master-Key': process.env.MASTER_KEY
    },
    json: true,
    body: {}
  };

  request(options, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      callback();
    }
  });
};
