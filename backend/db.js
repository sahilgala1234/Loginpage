const mongoose=require('mongoose');
const MONGO_URL= "mongodb+srv://sahilgala:galasahil@cluster0.em1oieb.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true, 
        useCreateIndex:true,
        useUnifiedTopology: true 
        
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit();
    }
  };
  
 module.exports=connectDB();
