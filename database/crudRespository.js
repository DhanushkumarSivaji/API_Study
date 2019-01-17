const mongoose = require('mongoose')
const constants = require('../constants/constants')



module.exports.createConnection = () => {
  return new Promise((resolve,reject) =>{
      let responseObj = {}
      mongoose.connect("mongodb://Dhanush1995:S*dk1995@ds113046.mlab.com:13046/myapidb" ,{useNewUrlParser:true},(err)=>{
          if(err) {
             responseObj.status = constants.databaseStatus.DATABASE_ERROR
             console.log(responseObj)
             return reject(responseObj)
          }else{
              responseObj.status = constants.databaseStatus.DATABASE_CONNECTED
              console.log(responseObj)
              return resolve(responseObj)
          }
      })
  })
}

module.exports.insertData = (data) => {
    return new Promise ((resolve,reject)=>{

        try{
            data.model.save().then(docs =>{
                //success
                resolve({
                    result:docs,
                    status:constants.databaseStatus.ENTITY_CREATED
                })
            }).catch(err=>{
                reject({
                    error:err.message,
                    status:constants.databaseStatus.DATABASE_ERROR
                })
            })

        }catch(err){
            console.log("Something went wrong Crud Repository; Insert Data",err)
        }
    })
}