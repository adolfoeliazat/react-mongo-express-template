var mongoose = require('mongoose');
// create a connection:
mongoose.connect('mongodb://localhost/movie');
// to access movies in the terminal: mongo movie (whatever is after localhost/)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('MongoDB connected!');
});

var movieSchema = mongoose.Schema({
  title: String
});

var Movie = mongoose.model('Movie', movieSchema);

// Movie.create({ title: 'Mean Girls' }, function (err, small) {
//   if (err) {
//     console.error(err);
//   }
// })

module.exports = Movie;
