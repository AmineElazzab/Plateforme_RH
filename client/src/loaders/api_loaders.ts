import HttpClient, { KeyValue } from "../stores/http_store";
import { IProjectStore } from '../stores/project_store';


export async function get_project(id : number): Promise<IProjectStore> {
  const url = `${HttpClient.base_url}/project/${id}/`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
    	const project: IProjectStore = response.data
			console.log(url)
			console.log(project)
      return Promise.resolve(project);
    }
    return Promise.reject(null);
  });
}


export async function add_project(){
  
}

export async function update_project(){
  
}

export async function delete_project(){
 
}

export async function get_users(){
  const url = `${HttpClient.base_url}/users`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
      const users = response.data;
      // console.log(url)
      // console.log(users)
      return Promise.resolve(users);
    }
    return Promise.reject(null);
  }
  );
}
