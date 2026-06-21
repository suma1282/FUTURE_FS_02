import {Routes,Route} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


import Dashboard from "./pages/Dashboard";
import AddLead from "./pages/AddLead";
import LeadList from "./pages/LeadList";
import Login from "./pages/Login";



function App(){


return(

<Routes>


<Route path="/" element={<Login/>}/>



<Route path="/*" element={


<div className="app-container">


<Sidebar/>


<div className="main">

<Navbar/>

<div className="content">


<Routes>


<Route 
path="/dashboard"
element={<Dashboard/>}
/>


<Route
path="/add-lead"
element={<AddLead/>}
/>


<Route
path="/leads"
element={<LeadList/>}
/>


</Routes>


</div>

</div>

</div>


}/>


</Routes>

)

}

export default App;