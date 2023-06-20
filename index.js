const express = require('express');
const logError = require('./logger')(__filename);
const app = express();
const cors = require('cors');
app.use(cors());
const getCurrentLineNumber = require('./getCurrentLineNumber');


app.use(express.json()); 
app.get("/log/:message",(req,res)=>{
    const message = req.params.message;
    logError({line:getCurrentLineNumber(),info : message,ip:req.socket.localAddress});
res.send('Ok');
});


let PORT = process.env.LISTEN_PORT || 80;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});