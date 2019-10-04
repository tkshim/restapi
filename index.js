
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Access');     // コンソール出力
  res.send('Hello World!');  // ブラウザ
});

app.get('/stock/crm', (req, res) => {
  res.json({
    "name"   : "CRM",
    "price"  : 146.98
  });
});
app.get('/stock/mule', (req, res) => {
  res.json({
    "name"   : "MULESOFT",
    "price"  : 44.57
  });
});

// サーバ起動
const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
