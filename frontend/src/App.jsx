import { Routes, Route } from "react-router-dom";


import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddLead from "./pages/AddLead";
import LeadList from "./pages/LeadList";
import EditLead from "./pages/EditLead";



function App(){


return(


<Routes>


{/* Login Page */}

<Route

path="/"

element={<Login />}

/>





{/* Protected CRM Pages */}

<Route

path="/*"

element={


<ProtectedRoute>


<div className="app-container">


<Sidebar />



<div className="main">


<Navbar />



<div className="content">


<Routes>



<Route

path="/dashboard"

element={<Dashboard />}

/>




<Route

path="/add-lead"

element={<AddLead />}

/>



<Route

path="/leads"

element={<LeadList />}

/>




<Route

path="/edit-lead/:id"

element={<EditLead />}

/>



</Routes>



</div>


</div>


</div>


</ProtectedRoute>


}


/>



</Routes>


)


}



export default App;