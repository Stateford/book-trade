// app/routes.js

// modules
// --------------
var bodyParser = require('body-parser');

// models
// ----------
var User = require('./models/user');
// var Books = require('./models/books');

// routes
module.exports = function(app) {
    // create a new user
    app.post('/newuser', function(req, res) {
        // get relevant POST body requests
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        // check if username already exists in database
        User.find({ username: username }, function(err, data) {
            if(data.length) {
                res.send('username already exists');
            } else {
                // create the user
                var user = new User();

                user.username = username;
                user.email = email;
                user.password = user.generateHash(password);
                // save the user
                user.save(function(err) {
                    if(err)
                        res.send(err);
                    res.send('user created!');
                });
            }
        });
    });
};
