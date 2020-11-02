var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards" : [
      { imageName:'offer1',title: '10% off on your next menu!', cols: 2, rows: 1 },
      { imageName:'offer2',title: 'Get 3 aditional laps per person!', cols: 2, rows: 1 },
      { imageName:'offer3',title: '25% off on personal cares', cols: 2, rows: 1 },
      { imageName:'offer4',title: 'Flash sales in Footwear', cols: 2, rows: 1 }
    ],
    "webCards" : [
      { imageName:'offer1',title: '10% off on personal cares', cols: 2, rows: 1 },
      { imageName:'offer2',title: 'Get 3 aditional laps per person!', cols: 1, rows: 1 },
      { imageName:'offer3',title: '25% discount on personal cares', cols: 1, rows: 2 },
      { imageName:'offer4',title: 'Flash sales in Footwear', cols: 1, rows: 1 }
    ]
  };
  res.json(jsonResponse);
});

module.exports = router;
