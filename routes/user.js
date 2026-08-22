const express=require('express');
const router=express.Router();
const userController=require('../controllers/user');
const { authMiddleWare,adminMiddleware } = require('../middleware/auth');

router.post('/register',userController.register);
router.post('/login',userController.login)
router.put('/users/:id',authMiddleWare,userController.updateUser)
router.patch('/users/:id',authMiddleWare,userController.updateUserPatch)

router.get("/users",userController.getAllUsers)
router.delete('/users/:id',authMiddleWare,adminMiddleware,userController.deleteUser)


module.exports=router