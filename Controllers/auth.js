const User = require ('../models').User;
const bcrypt = require('bcryptjs');
require('dotenv').config()

const jwt = require('jsonwebtoken');


const signup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json(err);
        
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err) return res.status(500).json(err);
            req.body.password = hashedPwd;

    User.create(req.body)
    .then(newUser => {
        const token = jwt.sign(
            {
                username: newUser.username,
                id: newUser.id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "30 days"
            }
        )

        res.json(newUser);
    })
    .catch(err => {
        console.log(err);
        res.send(`err ${err}`);
    })
});
});

}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })

    .then(foundUser => {
        if(foundUser){
            bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
                if (match) {
                    const token = jwt.sign(
                        {
                          username: foundUser.username,
                          id: foundUser.id
                        },
                        process.env.JWT_SECRET,
                        {
                          expiresIn: "30 days"
                        },
                    )
                    res.json(foundUser);
                } else {
                  return res.sendStatus(400);
                }
            })
        }
    })
}

module.exports = {
    signup,
    login
}