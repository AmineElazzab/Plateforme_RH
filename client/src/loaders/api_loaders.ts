import HttpClient, { KeyValue } from "../stores/http_store";
import { IMyProfile, IOtherDetails, vanillaAccountStore } from '../stores/project_store';


export async function get_me(): Promise<IMyProfile>{
  const url = `${HttpClient.base_url}/me`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
    	const me: IMyProfile = response.data
			console.log(url)
			console.log(me)
      vanillaAccountStore.setState({my_profile: {...me}})
      console.log('set', vanillaAccountStore.getState().my_profile)
    	return Promise.resolve(me);
    }
    return Promise.reject(null);
  });
}


export async function add_friend(id: number){
  const url = `${HttpClient.base_url}/add_friend/`;
  return HttpClient.post({url, data: {id}}).then((response) => {
    if (response && response.status === 200) {
    	const them: IOtherDetails = response.data
			console.log(url)
			console.log(them)
    	return Promise.resolve(them);
    }
    return Promise.reject(null);
  });
}

export async function remove_friend(id: number){
  const url = `${HttpClient.base_url}/remove_friend/`;
  return HttpClient.post({url, data: {id}}).then((response) => {
    if (response && response.status === 200) {
    	const them: IOtherDetails = response.data
			console.log(url)
			console.log(them)
    	return Promise.resolve(them);
    }
    return Promise.reject(null);
  });
}
