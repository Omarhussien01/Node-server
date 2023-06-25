const express = require('express')
const app = express();
const router = require('./routers/index');
const auth = require('./middleware/auth');

app.use(express.json());
app.use('/category',auth)
app.use('/products',auth)
app.use('/',router);
app.listen(5500,()=>{
    console.log("Listening to port 5500....");
})