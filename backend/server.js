const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB=()=>require('./db');
const userRoutes=require('./userRoutes');
const { notFound, errorHandler } = require('./Middleware');
app.use(express.json());
connectDB();
const port=5000;
app.use(notFound);
app.use(errorHandler);
app.get('/',(req,res)=>{
    res.send("API is running");
})
app.use('/api/users',userRoutes);
app.listen(port ,console.log(`server started on port ${port}`));
