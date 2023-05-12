import "./App.css";
import Login from "./pages/auth/login";
import Collaborator from "./pages/collaborator/Collaborator";
import ProjectLeader from "./pages/project-leader/projectLeader";
import ProjectManager from "./pages/project-manager/projectManager";
import Admin from "./pages/administrator/Admin";
import Projects from "./pages/administrator/Projects";
import Users from "./pages/administrator/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/users" element={<Users />} />
				<Route path="/collaborator" element={<Collaborator />} />
				<Route path="/project-leader" element={<ProjectLeader />} />
				<Route path="/project-manager" element={<ProjectManager />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
