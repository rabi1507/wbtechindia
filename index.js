const express=require("express");
const app=express();
require('dotenv').config();
const config=require('./configure/database');
const endpoint=require('./router/router');
const bodyParser=require('body-parser');

const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', endpoint);
app.get('/', (req, res)=>{
   res.send({
      message:'this is default route'
   })
});
config.database();
app.listen(PORT, ()=>{
   console.log( `app is listing at ${PORT}`);
});
