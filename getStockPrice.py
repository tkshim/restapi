#!/usr/env/env python
#coding: utf-8

import requests

print '予想したい株価の会社は？'
stockName = raw_input('>> ')
url = 'https://restapi20191004.herokuapp.com/stock/v1' + stockName
r = requests.get(url)

n = r.json()
print 'Stock Name  is: ', n['name']
print 'Stock Price is: ', n['price']

#https://teratail.com/questions/100920
