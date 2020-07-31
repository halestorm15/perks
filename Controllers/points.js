const points = require ('../models').points;


const editPoints = (req, res) => {
    points.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedPoints => {
        res.json(updatedPoints)
    })
}

const addProgram = (req, res) => {
    console.log(req.body)
    points.create(req.body)
    .then(addProgram => {
        res.json(addProgram)
    }).catch(err => {
        res.send(`Error: ${err}`);
    })
}

const deleteProgram = (req, res) => {
    points.destroy({
        where: { 
            UserId: req.params.userId,
            CompanyId: req.params.companyId
        }         
    })
    .then(deletedProgram => {
        res.json()
    })
}



module.exports = {
    editPoints,
    deleteProgram,
    addProgram
}


