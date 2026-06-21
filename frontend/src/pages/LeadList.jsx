import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/axios";



function LeadList(){


const [leads,setLeads] = useState([]);


const [search,setSearch] = useState("");


const [filter,setFilter] = useState("");



const navigate = useNavigate();




// Fetch Leads

const getLeads = async()=>{


try{


const response = await API.get("/leads");


setLeads(response.data.leads);


}


catch(error){


console.log("Failed to fetch leads",error);


}


};




// Load Data

useEffect(()=>{


getLeads();


},[]);





// Delete Lead

const deleteLead = async(id)=>{


const confirmDelete = window.confirm(

"Are you sure you want to delete this lead?"

);



if(!confirmDelete){

return;

}



try{


await API.delete(`/leads/${id}`);



alert("Lead Deleted Successfully");



getLeads();



}



catch(error){


alert("Delete Failed");


}


};





// Search + Filter


const filteredLeads = leads.filter((lead)=>{


return(


(

lead.name.toLowerCase()

.includes(search.toLowerCase())


||


lead.email.toLowerCase()

.includes(search.toLowerCase())


)


&&


(filter === "" || lead.status === filter)


);


});







return(


<div>


<h1>Client Leads</h1>





<div className="filters">



<input

placeholder="Search name or email..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>




<select

value={filter}

onChange={(e)=>setFilter(e.target.value)}

>



<option value="">

All Leads

</option>


<option>

New Lead

</option>


<option>

Contacted

</option>



<option>

Converted

</option>



</select>


</div>







<div className="table-box">



<table>



<thead>



<tr>


<th>Name</th>

<th>Email</th>

<th>Phone</th>

<th>Source</th>

<th>Status</th>

<th>Actions</th>


</tr>


</thead>





<tbody>


{


filteredLeads.length === 0 ?


(

<tr>


<td colSpan="6" style={{textAlign:"center"}}>


No Leads Found


</td>


</tr>


)


:


filteredLeads.map((lead)=>(



<tr key={lead._id}>



<td>

{lead.name}

</td>




<td>

{lead.email}

</td>



<td>

{lead.phone}

</td>



<td>

{lead.source}

</td>




<td>



<span className="status new">


{lead.status}


</span>



</td>





<td>




<button

className="edit"

onClick={()=>navigate(`/edit-lead/${lead._id}`)}

>


Edit


</button>





<button

className="delete"

onClick={()=>deleteLead(lead._id)}

>


Delete


</button>





</td>




</tr>



))


}



</tbody>




</table>



</div>



</div>


)


}



export default LeadList;