const express = require('express')
const cors = require('cors');
const request = require('request');


const PORT = 3000
const app = express()

const mongoose = require('mongoose');




app.use(cors());

app.get('/proxy', (req, res) => {
  const url = 'https://www.thehindu.com/news/national/feeder/default.rss';
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(body);
    }
  });
});

app.get('/proxyforTOI', (req, res) => {
  const url = 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms';
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(body);
    }
  });
});


app.get('/proxyforECT', (req, res) => {
  const url = 'https://cfo.economictimes.indiatimes.com/rss/topstories';
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(body);
    }
  });
});


app.get('/proxyforHT', (req, res) => {
  const url = 'https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml';
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(body);
    }
  });
});
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});