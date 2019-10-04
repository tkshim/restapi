const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Access');     // コンソール出力
  res.send('Hello World!');  // ブラウザ
});
app.get('/g1/', (req, res) => {
  res.json({
"name"   : "John Smith",
  "sku"    : "20223",
  "price"  : 23.95,
  "shipTo" : { "name" : "Jane Smith",
               "address" : "123 Maple Street",
               "city" : "Pretendville",
               "state" : "NY",
               "zip"   : "12345" },
  "billTo" : { "name" : "John Smith",
               "address" : "123 Maple Street",
               "city" : "Pretendville",
               "state" : "NY",
               "zip"   : "12345" }

});
});

app.get('/g2/', (req, res) => {
  res.json({
"brand":"Anypoint","identifier":"eb8c8ca7-3c42-4489-a820-3aa138430b75","identifiers":[{"SKU":"UGG-BB-PUR-06"}],"model":"Smart Slim Micro Stripe Shirt","rating":5,"description":"Shirt by ASOS Tall. Stripe woven fabric. Added stretch for comfort. Spread collar. Button placket. Slim fit - cut close to the body. Machine wash. 98% Cotton, 2% Elastane. Our model wears a size Medium Long and is 193cm/6'4\" tall","pictures":["https://launderkart.com/wp-content/uploads/2016/07/Shirt.jpg","https://cdni.llbean.net/is/image/wim/251423_47_41?wid=428&hei=494"],"price":{"amount":{"currency":"USD","currencyValue":34.90,"name":"Amount"},"salesUnit":{"code":"EA","name":"Each"}}
});

// サーバ起動
const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
