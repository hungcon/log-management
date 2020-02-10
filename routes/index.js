var express = require('express');
var router = express.Router();
var elasticsearch = require('elasticsearch');
var client = elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '7.2', 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/store_log', function(req, res){
  console.log('a')
  client.index({
    index: 'all_log',
    type: 'system_log',
    body: req.body
  }, function(err, resp, status){
    console.log(resp);
  });
  res.end();
})

module.exports = router;
