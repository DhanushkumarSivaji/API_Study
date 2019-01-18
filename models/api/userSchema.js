const joi = require('joi')

const createUserSchema = joi.object().keys({
    name: joi.string().required(),
    phone: joi.number().required(),
    password:joi.string().required(),
    role:joi.number().required()

})

module.exports = {
    'createUserSchema':createUserSchema
}