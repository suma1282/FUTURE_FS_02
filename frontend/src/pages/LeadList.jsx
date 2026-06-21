function LeadList(){


return(


<div>


<h1>Client Leads</h1>


<div className="table-box">


<input 
placeholder="Search leads..."
/>


<table>


<thead>

<tr>

<th>Name</th>
<th>Email</th>
<th>Source</th>
<th>Status</th>
<th>Action</th>

</tr>

</thead>


<tbody>


<tr>

<td>Rahul Sharma</td>

<td>rahul@gmail.com</td>

<td>Website</td>


<td>

<span className="status new">

New Lead

</span>

</td>


<td>

<button className="edit">
Edit
</button>


<button className="delete">
Delete
</button>


</td>


</tr>





<tr>

<td>Ananya Rao</td>

<td>ananya@gmail.com</td>

<td>Referral</td>


<td>

<span className="status converted">

Converted

</span>

</td>


<td>

<button className="edit">
Edit
</button>


<button className="delete">
Delete
</button>


</td>


</tr>


</tbody>


</table>


</div>


</div>


)


}


export default LeadList;