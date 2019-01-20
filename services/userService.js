const constants = require('../constants/constants')
const User = require('../models/db/userModel')
const crudRespository = require('../database/crudRespository')

module.exports.createUser = async(serviceData) =>{
    let responseObj = {}
    try{
        const user = new User({
            name:serviceData.name,
            password:serviceData.password,
            phone:serviceData.phone,
            role:serviceData.role
        })

    let data = {
        model: user
    }

    let responseFromDatabase = await crudRespository.insertData(data)
    switch(responseFromDatabase.status)  {
        case constants.databaseStatus.ENTITY_CREATED:
             responseObj.body = responseFromDatabase.result
             responseObj.status = constants.serviceStatus.USER_CREATED_SUCCESSFULLY
             break
        default:
             responseObj = constants.responseObj
             break
    }
    return responseObj

    }catch(err){

        console.log('Something went wrong: Service: Create User:',err)
        return responseObj = constants.responseObj
    }
}

module.exports.getUserList = async(serviceData) =>{
    let responseObj = {}
    try{
    
    let data = {
        query:{},
        model: User,
        excludeFields:'-password',
        pagination:{}
    }

    let responseFromDatabase = await crudRespository.find(data)
    switch(responseFromDatabase.status)  {
        case constants.databaseStatus.ENTITY_FETCHED:
             responseObj.body = responseFromDatabase.result
             responseObj.status = constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY
             break
        default:
             responseObj = constants.responseObj
             break
    }
    return responseObj

    }catch(err){

        console.log('Something went wrong: Service: Create User:',err)
        return responseObj = constants.responseObj
    }
}