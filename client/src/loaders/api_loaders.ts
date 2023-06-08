import HttpClient, { KeyValue } from '../stores/http_store';
import { IProject } from '../interfaces/project';

export async function get_project(id: number): Promise<IProject> {
  const url = `${HttpClient.base_url}project/${id}/`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
      const project: IProject = response.data;
      console.log(url);
      console.log(project);
      return Promise.resolve(project);
    }
    return Promise.reject(null);
  });
}

export async function add_project() {}

export async function update_project() {}

export async function delete_project() {}

export async function get_users() {
  const url = `${HttpClient.base_url}users`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
      const users = response.data;
      // console.log(url)
      // console.log(users)
      return Promise.resolve(users);
    }
    return Promise.reject(null);
  });
}
