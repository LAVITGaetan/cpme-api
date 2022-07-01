const axios = require('axios');

exports.index = function (req, res) {
    axios.get('http://localhost:8060/api/users/all')
    .then(function(response) {
    res.render('index', { users: response.data });
        
    })
    .catch(err => {
        res.send(err)
    })
};