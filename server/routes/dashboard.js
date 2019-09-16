const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello Dashboard')
});

//Get Sales Data (Total, Avg, Qtd)
//Get Bills (Paid, unpaid)
//Get Receipts(Received, to receive)
//Performance module (Mo Sales qtd Avg,Mo Sales value Avg) compared with the day selected

module.exports = router;