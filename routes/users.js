const express=require('express');
const router=express.Router();

const usersController=require('../controllers/user_controllers');

router.get('/profile',usersController.profile);

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

router.post('/create',usersController.create);

module.exports=router;