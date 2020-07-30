require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const jwt = require('jsonwebtoken');
const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    console.log('i am working')
    res.send('today is monday')
})

app.use('/main', routes.company);
app.use('/points', routes.points);
app.use('/auth', routes.auth);

const verifyToken = (req, res, next) => {
    let token = req.query.token;
    
    jwt.verify(
      token, process.env.JWT_SECRET,
      (err, decodedUser) => {
        if (err || !decodedUser){
          return res.status(401).json({ error: 'Unauthorized Request'});
        } 
        req.user = decodedUser;
        
        next();
      }
    )
  }
  
  //dont move this app.us!
app.use('/profile', routes.user);



app.listen(process.env.PORT, ()=>{
    console.log("I am listening, Haley");
});


