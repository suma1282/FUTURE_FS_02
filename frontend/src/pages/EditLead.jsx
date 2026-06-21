import {useEffect,useState} from "react";

import {useParams,useNavigate} from "react-router-dom";

import API from "../api/axios";


function EditLead(){


const {id}=useParams();

const navigate=useNavigate();


const [lead,setLead]=useState({

name:"",
email:"",
phone:"",
source:"",
status:"",
notes:""

});



useEffect(()=>{


const getLead=async()=>{


const res=await API.get(`/leads/${id}`);


setLead(res.data.lead);


};


getLead();


},[id]);




const handleChange=(e)=>{


setLead({

...lead,

[e.target.name]:e.target.value

});


};




const updateLead=async(e)=>{


e.preventDefault();


await API.put(`/leads/${id}`,lead);


alert("Lead Updated Successfully");


navigate("/leads");


};





return(

<div>


<h1>Edit Lead</h1>


<form className="form" onSubmit={updateLead}>


<input

name="name"

value={lead.name}

onChange={handleChange}

/>



<input

name="email"

value={lead.email}

onChange={handleChange}

/>


<input

name="phone"

value={lead.phone}

onChange={handleChange}

/>



<input

name="source"

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

value={lead.notes}

onChange={handleChange}

>


</textarea>



<button>

Update Lead

</button>


</form>


</div>


)


}


export default EditLead;