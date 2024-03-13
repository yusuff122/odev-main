

const express = require("express")
const app = express()
const path = require("path")
const tasarimYolu = path.join(__dirname,'../tasarim')


app.listen(process.env.PORT || 3000, () => {
  console.log('uygulama başarılı bir şekilde açılıyor ');
});


app.engine('html', require('ejs').renderFile);
app.use(express.json())
app.set("view engine","ejs")
app.set("views",tasarimYolu)

app.use(express.urlencoded({
  extended:false
}))





app.get("/", (req, res) => {
  
  res.render(path.join(__dirname, '..', 'tasarim', 'urunler.ejs')); 
});














