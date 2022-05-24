const express = require('express');
const debug = require('debug')('app')
const morgan = require('morgan');
const path = require('path');


const app = express();
/*const PORT = 4000; */
const PORT = process.env.PORT || 4000 ;  /* link port page packet.json, second port 4000*/

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public")));

app.get("/", (req,res) => {
    res.send('Hello 11111');
    
})

app.listen(PORT, ()=>{
    debug("Listening on port " + PORT);
})


