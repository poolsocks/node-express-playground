const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3100;







app.listen(port, () =>{
    console.log(`It's the year ${port}`)
})