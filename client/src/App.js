import React, { useState } from "react";
import "./App.css";
import Login from "./pages/auth/login";
import Collaborator from "./pages/collaborator/Collaborator";
import ProjectLeader from "./pages/project-leader/projectLeader";
import ProjectManager from "./pages/project-manager/projectManager";
import Admin from "./pages/administrator/Admin";
import Projects from "./pages/administrator/Projects";
import Utilisateurs from "./pages/administrator/Utilisateurs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Protected from "../src/components/protected";
import NotFound from "./pages/Notfound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/projects"
          element={
            <Protected>
              <Projects />
            </Protected>
          }
        />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
        <Route path="/collaborator" element={<Collaborator />} />
        <Route path="/project-leader" element={<ProjectLeader />} />
        <Route path="/project-manager" element={<ProjectManager />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
