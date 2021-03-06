if(process.env.NOE_ENV !== 'production'){
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const express = require('express');
const app = express()
const fs = require('fs')



app.set('view engine','ejs')
app.use(express.json())
app.use(express.static('public'))



app.get("/store", function (req, res) {
  fs.readFile("items.json", function (error, data) {
    if (error) {
      res.status(500).end();
    } else {
      res.render("store.ejs", {
        
        items: JSON.parse(data)
      });
    }
  });
});

app.listen(8080)