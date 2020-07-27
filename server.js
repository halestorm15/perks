const express = require('express')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const routes = require('./routes');


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
//Questions: cors. 
//What isha included in the wayfarer backend

app.get('/hello', (req, res) => {
    console.log('i am working')
    res.send('today is monday')
})

app.use('/main', routes.company);
app.use('/profile', routes.user);
app.use('/main', routes.points);

app.listen(3000, ()=>{
    console.log("I am listening, Haley");
});


//is the process.env.PORT needed instead?