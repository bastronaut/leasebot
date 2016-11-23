var axios = require('axios');
var url =  'http://vm-ubuntu-jvdg5111.cloudapp.net';

var Promise = require('es6-promise').Promise;

var Api = {
  get: function(GETEndPoint) {
    console.log('performing get call for ', GETEndPoint );
    return new Promise(function (resolve, reject) {
      axios.get(url+GETEndPoint)
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          console.log(error);
          reject(error);
        });
    });
  },
  post: function(POSTEndPoint, payload) {
    console.log(payload);
    return new Promise(function (resolve, reject) {
      axios.post(url+POSTEndPoint, payload)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (response) {
          console.log(response);
          reject(response);
        });
    });
  },
  put: function(PUTEndPoint, payload) {
    return new Promise(function (resolve, reject) {
      axios.put(url+PUTEndPoint, payload)
        .then(function (response) {
          console.log(response);
          resolve(response.data);
        })
        .catch(function (response) {
          console.log(response);
          reject(response);
        });
    });
  },
  delete: function(DELETEEndPoint) {
    return new Promise(function (resolve, reject) {
      axios.delete(url+DELETEEndPoint)
        .then(function (response) {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(function (response) {
          console.log(response);
          reject(response);
        });
    });
  }
};



module.exports = Api;
