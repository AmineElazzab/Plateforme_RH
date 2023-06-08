import { useQuery } from '@tanstack/react-query';
import { COMMON_STALE_TIME } from '~lib/globals';
import { PERMISSIONS } from '~lib/static-data/permissions';
import HttpClient from '../../stores/http_store';

export async function getProjects(ctx?: any) {
  const url = `${HttpClient.base_url}projects`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
      const projects = response.data;
      // console.log(url);
      // console.log(projects);
      return Promise.resolve(projects);
    }
    return Promise.reject(null);
  });
}

export function useProjects(ctx?: any) {
  //   // TODO: 🚩 check all critical arguments
  return useQuery(['projects'], () => getProjects(ctx), {
    staleTime: COMMON_STALE_TIME,
  });
}
