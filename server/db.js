var mongoose  = require('mongoose');

var db = function() {
  var DB_NAME = 'tokfox';
  var DB_HOST = process.env.MONGOLAB_URI ||
                process.env.MONGOHQ_URL ||
                'localhost';

  mongoose.connect('mongodb://' + DB_HOST + '/' + DB_NAME)
          .connection.on('error', function(error) {
    console.log('Mongo DB error ' + error);
  });
};

module.exports = db;
