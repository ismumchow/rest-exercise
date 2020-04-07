let express = require('express'); 
let app = express (); 

let personRoute = require('./routes/person'); 
app.use(personRoute); 
app.use((req,res, next) =>{ 
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
})
app.use(express.static('public'));
// handler for 404 error not found
app.use((req,res,next) => {
    res.status(404).send('we think you are lost')
})

const PORT = process.env.port || 3000;
app.listen(PORT, ()=> console.log(`server has started on ${PORT}`));

