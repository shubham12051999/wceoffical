const express = require('express'),  
    path = require('path');
    bodyParser = require('body-parser');

   const productRoute = require('./routes/product.route');  
    const app = express();  
    app.use(bodyParser.json());  
    app.use('/', productRoute);  
    const port = process.env.PORT ||4000;  
    const server = app.listen(port, function(){  
     console.log('Listening on port ' + port);  
    });  