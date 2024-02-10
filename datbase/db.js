import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
  

const Connection=async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-mgueuyb-shard-00-00.ocvhskv.mongodb.net:27017,ac-mgueuyb-shard-00-01.ocvhskv.mongodb.net:27017,ac-mgueuyb-shard-00-02.ocvhskv.mongodb.net:27017/?ssl=true&replicaSet=atlas-jwrg1d-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true})
       console.log('Database connected securely');
    }catch(error){console.log('Error while connecting with databas',error.message);}
}
export default Connection;