const User = require ('../models').User;
const points = require ('../models').points;
const Company = require ('../models').Company;

const getUserProfile = (req, res) => {
    User.findByPk(req.user.id, {
        attributes: ['id', 'name', 'username', 'profileurl', 'createdAt'],
    })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updateUser => {
        console.log(updateUser);
        res.redirect(`/user/profile/${req.params.index}`);
    })
}

const addCompany = (req, res) => {
    req.body.UserId = req.params.index;
    Company.findByPk(req.params.companyIndex)
    .then(company => {
      company.update({UserId: req.params.index})
      .then(addCompany => {
          //is this redirect needed here or handle in react?
          res.redirect(`/user/profile/${req.params.index}`);
      })
    })
}
const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/welcome');
    })
}

module.exports = {
    getUserProfile,
    editProfile,
    addCompany,
    deleteUser
}