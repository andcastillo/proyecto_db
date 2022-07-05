var express = require('express');
var router = express.Router();

const connect = require('./db_pool_connect');

/* GET execute a give query. */
router.get('/', function (req, res, next) {
  connect(function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }

    //use the client for executing the query
    client.query(req.params("query"), function (err, result) {
      //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
      done(err);

      if (err) {
        return console.error('error running query', err);
      }
      res.send(JSON.stringify(result.rows));
    });
  });
})

module.exports = router;
