const points = require ('../models').points;


const editPoints = (req, res) => {
    points.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
}



module.exports = {
    editPoints,
}


