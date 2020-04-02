let express = require('express'); 
let app = express (); 

app.use(express.static('public')); 
const PORT = process.env.port || 3000; 

let personRoute = require('./routes/person'); 
app.use(personRoute); 

app.listen(PORT, ()=> console.log(`server has started on ${PORT}`));

