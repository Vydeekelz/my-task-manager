const logger = ((req, res, next) => {
    const {name} = req.query;
    
    if(name) {
        // req.name = name;
        // return res.status(200).send({name : req.name})
        next()

    }
    else {
       return res.status(401).send("Not authorized")

    }

})

module.exports = {logger}