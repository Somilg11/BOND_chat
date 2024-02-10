import express from 'express';


import Connection from './datbase/db.js'; 
import Route from './routes/route.js';


const app =express();
app.use('/',Route);
Connection();

const PORT =8000;
app.listen(PORT,()=> console.log(`server is running suceesfully on PORT ${PORT}`));