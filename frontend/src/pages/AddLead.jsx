function AddLead(){

return(

<div>

<h1>Add New Client Lead</h1>


<div className="form">


<input placeholder="Client Name"/>


<input placeholder="Email"/>


<input placeholder="Phone"/>


<select>

<option>New Lead</option>

<option>Contacted</option>

<option>Converted</option>

</select>


<textarea placeholder="Notes">
</textarea>


<button>
Save Lead
</button>


</div>


</div>


)

}


export default AddLead;