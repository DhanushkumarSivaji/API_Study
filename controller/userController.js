const constants = require('../constants/constants')
const userService = require('../services/userService')


module.exports.createUser = async (req,res,next) => {
  
    let responseObj = {}

    try{
      
      let data = req.body
         console.log("data***",data)

      let responseFromService = await userService.createUser(data)

      switch(responseFromService.status){
            case constants.serviceStatus.USER_CREATED_SUCCESSFULLY:
                responseObj.status = 200
                responseObj.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY
                responseObj.body = responseFromService.body
                break

            default:
                responseObj = constants.responseObj 
                break
           
      }

      return res.status(responseObj.status).send(responseObj)
  }catch(err){
      console.log('Something went wrong : Controller : Create User',err)
      responseObj = constants.responseObj 
      return res.status(responseObj.status).send(responseObj)

  }
}