// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

const express= require('express')
const router=express.Router()
 const departes= require('../controllers/depatements')
 const users=require('../controllers/user')

 router.get('/departs',departes.getDepart)

 router.post('/departs',departes.postDepart)

 router.post('/users/signup', users.signup);
 router.post('/users/login', users.login);

 router.put('/departs/:id',departes.updateDepart)

 router.delete('/departs/:id',departes.deleteDepart)


 module.exports = router;
