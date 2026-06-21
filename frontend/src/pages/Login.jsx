import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/axios";



function Login(){


const navigate = useNavigate();


const [loading,setLoading] = useState(false);


const [user,setUser] = useState({

username:"",

password:""

});




// Handle Input


const handleChange=(e)=>{


setUser({

...user,

[e.target.name]:e.target.value

});


};




// Login Function


const handleLogin=async(e)=>{


e.preventDefault();



if(!user.username || !user.password){


alert("Please enter username and password");


return;


}



try{


setLoading(true);



const response = await API.post(

"/auth/login",

user

);



localStorage.setItem(

"token",

response.data.token

);



alert("Login Successful");



navigate("/dashboard");


}



catch(error){


alert("Invalid Username or Password");


}



finally{


setLoading(false);


}


};





return(

<div className="login-page">


<div className="login-card">


<h1>

Mini CRM

</h1>



<p>

Welcome Back 

</p>




<form

className="login-form"

onSubmit={handleLogin}

>



<input

type="text"

name="username"

placeholder="Enter Username"

value={user.username}

onChange={handleChange}

/>



<input

type="password"

name="password"

placeholder="Enter Password"

value={user.password}

onChange={handleChange}

/>




<button disabled={loading}>


{

loading ? "Checking..." : "Login"

}


</button>




</form>



</div>



</div>


);


}



export default Login;