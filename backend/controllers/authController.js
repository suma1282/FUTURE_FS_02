const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// REGISTER ADMIN


exports.register = async(req,res)=>{


try{


const {username,password}=req.body;

const hashedPassword = await bcrypt.hash(password,10);



const user = await User.create({

username,

password:hashedPassword

});



res.json({

success:true,

user

});



}

catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};




// LOGIN ADMIN


exports.login = async(req,res)=>{


try{


const {username,password}=req.body;

const user = await User.findOne({username});

if(!user){

return res.status(404).json({

message:"User not found"

});

}

const match = await bcrypt.compare(

password,

user.password

);

if(!match){


return res.status(401).json({

message:"Wrong password"

});

}

const token = jwt.sign(

{id:user._id},

"crmsecret",

{expiresIn:"1d"}

);

res.json({

success:true,

token

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};