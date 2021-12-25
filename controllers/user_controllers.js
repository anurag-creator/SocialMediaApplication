const User=require('../models/user');

module.exports.profile=function(req,res){
    //return res.end('<h1>user profile</h1>');
    return res.render('user_profile',{
        title:"User Profile"
     });
}

//create Another Action for render signUp Pages

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"codeial | signUP"
    });
}

//Create Another Action for Sign in

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"codeial | signIn"
    });
}

//get the signUp data 
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in Finding user in signing up');return
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while signing');return
                }
            return res.redirect('/user/sign-in');
        })
    }else{
        return res.redirect('back');
    }
});
    
}
//sign in create the session of the user
module.exports.createSession=function(req,res){
    //TO DO
}