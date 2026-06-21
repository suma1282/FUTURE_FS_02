import { Link, useNavigate } from "react-router-dom";


function Sidebar(){


const navigate = useNavigate();


// Logout Function

const handleLogout = ()=>{


localStorage.removeItem("token");


alert("Logout Successful");


navigate("/");


};




return(

<div className="sidebar">


<h2>Mini CRM</h2>



<Link to="/dashboard">

Dashboard

</Link>



<Link to="/leads">

Client Leads

</Link>



<Link to="/add-lead">

Add Lead

</Link>





<button

className="logout-btn"

onClick={handleLogout}

>

Logout

</button>




</div>


);


}


export default Sidebar;
