const router = require('express').Router();
const Config = require('../models/config');

router.get('/config', (req, res) => {
  Config.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

router.post('/config', (req, res) => {
  const body = req.body;
  Config.findOne({ _id: body._id }, (err, data) => {
    if (err)
      throw err;
    if (data) {
      data.updateOne(body, (err) => {
        if (err)
          throw err;
        res.send(body);
      });
    } else {
      const newConfig = new Config(body);
      newConfig.save((err, data) => {
        if (err)
          throw err;
        res.send(data);
      })
    }
  });
});

module.exports = router;