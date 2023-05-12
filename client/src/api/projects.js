import axios from "axios";

export function getProjects() {
  return axios.get("http://localhost:3000/projects").then((res) => res.data);
}
