
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Access');     // コンソール出力
  res.send('Hello World!');  // ブラウザ
});

app.get('/stock/v1/crm', (req, res) => {
  res.json({
    "name"   : "CRM",
    "price"  : 146.98
  });
});
app.get('/stock/v1/mule', (req, res) => {
  res.json({
    "name"   : "MULESOFT",
    "price"  : 44.57
  });
});
app.get('/stock/v1/ms', (req, res) => {
  res.json({
    "name"   : "MICROSOFT",
    "price"  : 100
  });
});

// サーバ起動
const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});

//参考　http://neos21.hatenablog.com/entry/2018/12/05/080000
//参考  with Routing https://qiita.com/leafia78/items/73cc7160d002a4989416　
//参考　with MongoDB https://qiita.com/itagakishintaro/items/a1519998a91061cbfb1e
