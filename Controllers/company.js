const Company = require ('../models').Company;
const points = require ('../models').points;


const showCompany = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
            {
                model: Company,
                attributes: ['id', 'name', 'image']
            },
            {
                model: points,
                attributes: ['id', 'userId', 'companyId', 'points']
            }
        ],
    })
    //is a ".then" piece needed?
}

const deleteCompany = (req, res) => {
    //is destroy the correct command?
    Company.destroy({
        where: {
            userId: req.params.index
        }
    })
    .then(() => {
        //redirect back to the user's profile
        res.redirect('/profile');
    })
}


module.exports = {
    showCompany,
    deleteCompany,
}