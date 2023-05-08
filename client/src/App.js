import "./App.css";
import Login from "./pages/auth/login";
import Collaborator from "./pages/collaborator/Collaborator";
import projectLeader from "./pages/project-leader/projectLeader";
import projectManager from "./pages/project-manager/projectManager";
import Admin from "./pages/administrator/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" exact element={<Login />} />
				<Route path="/collaborator" element={<Collaborator />} />
				<Route path="/project-leader" element={<projectLeader />} />
				<Route path="/project-manager" element={<projectManager />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
