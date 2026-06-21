import {Link} from "react-router-dom";


function Sidebar(){

return(

<div className="sidebar">

<h2>Mini CRM</h2>


<Link to="/dashboard">
Dashboard
</Link>


<Link to="/leads">
Leads
</Link>


<Link to="/add-lead">
Add Lead
</Link>


<Link to="/">
Logout
</Link>


</div>

)

}


export default Sidebar;