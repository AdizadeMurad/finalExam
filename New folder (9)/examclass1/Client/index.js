import mongoose from "mongoose";
import cors from "cors";
import express from "express";

const app = express()
app.use(cors())
app.use(express.json())



const blogSchema = new mongoose.Schema({
  name: String, 
  surname: String,
  age:Number
});

const productModel= mongoose.model('products', blogSchema)

app.get('/products', async (req, res) => {
    const product = await productModel.find()
    res.send(product)
  })




  app.put('/products/:id', async (req, res) => {
    const body = req.body
    const {id} = req.params
    const product = await productModel.findByIdAndUpdate(id,body)
    res.send(product)
  })


  app.post('/products', async (req, res) => {
    const body = req.body
    const product = new productModel(body)
    await product.save()
    res.send(product)
   })
 

  app.delete('/products/:id', async  (req, res) => {
  const {id} = req.params
  const product = await productModel.findByIdAndDelete(id)
  res.send(product)
  })



  app.get('/products/:id', async (req, res) => {
   const {id} = req.params
   const product = await productModel.findById(id)
   res.send(product)
  })




mongoose.connect('mongodb+srv://bd7xw445u:bd7xw445u@cluster0.98bgcim.mongodb.net/')
.then(()=>{
    console.log('Connected...!');
})

const port = 3000
 app.listen (port , 
    console.log(`Example ${port}`)
 )