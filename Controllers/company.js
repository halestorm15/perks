const Company = require ('../models').Company;
const points = require ('../models').points;


const showCompany = (req, res) => {
    Company.findByPk(req.params.index, {
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
    //what is res.status?
}

const showAllCompany = (req, res) => {
    Company.findAll({
        attributes: ['id', 'name', 'image']
    })
    .then(allCompany => {
      res.json(allCompany)
    })
}

module.exports = {
    showCompany,
    showAllCompany
}