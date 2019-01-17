module.exports = {
    responseObj : {
        status:500,
        message: 'Internal Server Error',
        body:{}
    },  
    databaseStatus :{
       ENTITY_CREATED : 'entity created' ,
       ENTITY_MODIFIED : 'entity modified' ,
       ENTITY_FETCHED : 'entity fetched' ,
       ENTITY_DELETED : 'entity deleted' ,
       DATABASE_CONNECTED : 'database connected' ,
       DATABASE_ERROR: 'database error' 
    },
    controllerStatus : {
        BAD_REQUEST : 'required fields missing'
    },
    serviceStatus : {
        USER_CREATED_SUCCESSFULLY : 'user created successfully'
    }
}