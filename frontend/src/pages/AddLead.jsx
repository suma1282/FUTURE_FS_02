import { useState } from "react";

import API from "../api/axios";


function AddLead(){


const [loading,setLoading]=useState(false);


const [lead,setLead]=useState({

name:"",
email:"",
phone:"",
source:"",
status:"New Lead",
notes:""

});



const handleChange=(e)=>{


setLead({

...lead,

[e.target.name]:e.target.value

});


};





const handleSubmit=async(e)=>{


e.preventDefault();


// validation

if(!lead.name || !lead.email){


alert("Name and Email are required");


return;


}



try{


setLoading(true);


await API.post("/leads",lead);


alert("Lead Added Successfully");



setLead({

name:"",
email:"",
phone:"",
source:"",
status:"New Lead",
notes:""

});


}


catch(error){


alert("Something went wrong");


}


finally{


setLoading(false);


}


};





return(


<div>


<h1>Add New Client Lead</h1>



<form className="form" onSubmit={handleSubmit}>


<input

name="name"

placeholder="Client Name *"

value={lead.name}

onChange={handleChange}

/>




<input

name="email"

placeholder="Email *"

value={lead.email}

onChange={handleChange}

/>




<input

name="phone"

placeholder="Phone"

value={lead.phone}

onChange={handleChange}

/>




<input

name="source"

placeholder="Lead Source"

value={lead.source}

onChange={handleChange}

/>



<select

name="status"

value={lead.status}

onChange={handleChange}

>


<option>New Lead</option>

<option>Contacted</option>

<option>Converted</option>


</select>




<textarea

name="notes"

placeholder="Notes"

value={lead.notes}

onChange={handleChange}

/>




<button disabled={loading}>


{loading ? "Saving..." : "Save Lead"}


</button>




</form>


</div>


)


}


export default AddLead;