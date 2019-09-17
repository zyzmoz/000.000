const router = require('express').Router();
const adapter = require('../adapters');

router.get('/', (req, res) => {
  res.send('hello')
});

router.post('/dailySales', async(req, res) => {
  const { date } = req.body;
  const data = await adapter.query(`select sum(r.vltotalcupom) as valortotal, count(r.controle) as qtdvendas,
    sum(r.vltotalcupom)/count(r.controle) as ticketmedio from resumocupom r where r.data = ?`, [date]);
  res.json(data[0])
});


//Get Sales Data (Total, Avg, Qtd)
//Get Bills (Paid, unpaid)
//Get Receipts(Received, to receive)
//Performance module (Mo Sales qtd Avg,Mo Sales value Avg) compared with the day selected

module.exports = router;