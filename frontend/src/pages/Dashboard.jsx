import {useEffect,useState} from "react";

import API from "../api/axios";


function Dashboard(){


const [stats,setStats]=useState({

total:0,

newLeads:0,

contacted:0,

converted:0

});




useEffect(()=>{


const getStats=async()=>{


const res=await API.get("/leads");


const leads=res.data.leads;



setStats({


total:leads.length,


newLeads:

leads.filter(

l=>l.status==="New Lead"

).length,



contacted:

leads.filter(

l=>l.status==="Contacted"

).length,



converted:

leads.filter(

l=>l.status==="Converted"

).length


});


};


getStats();


},[]);




return(

<div>


<h1>Dashboard Overview</h1>



<div className="cards">



<div className="card">

<h3>Total Leads</h3>

<h1>{stats.total}</h1>

</div>




<div className="card">

<h3>New Leads</h3>

<h1>{stats.newLeads}</h1>

</div>





<div className="card">

<h3>Contacted</h3>

<h1>{stats.contacted}</h1>

</div>





<div className="card">

<h3>Converted</h3>

<h1>{stats.converted}</h1>

</div>




</div>


</div>


)


}


export default Dashboard;