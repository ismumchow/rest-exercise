let express = require('express'); 
let router = express.Router(); 

//QueryString => query property on a request object
//localhost:3000/person?name=thomas&age=20 -> anything afer ? is qs
router.get('/person', (req,res) => { 
    if(req.query.name) {
        res.send(`you have requested a person ${req.query.name}`);
    }
    else {
        res.send('you have requested a person');
    }
});
//params property on the requst object
router.get("/person/:name", (req, res) => {
        res.send(`you have requested a person ${req.params.name}` );
});


module.exports = router; // will let us import files 