function  validateSchema(schema) {
    return async (req,res,next)=>{
        try {
           const validationBody = await schema.validate(req.body);
            next();
        } catch (err) {
            res.status(400).json({
                error: err
            }) 
        }
    }
}

module.exports = validateSchema;