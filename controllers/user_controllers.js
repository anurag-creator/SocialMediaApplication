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
    //TO DO
}
//sign in create the session of the user
module.exports.createSession=function(req,res){
    //TO DO
}