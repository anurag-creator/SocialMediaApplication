const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error connecting to mongoDB"));

db.once('open',function(){
    console.log('connectd to database::mongoDB');
});

module.exports=db;