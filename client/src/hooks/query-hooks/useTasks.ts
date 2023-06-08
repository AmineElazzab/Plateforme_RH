import { useQuery } from '@tanstack/react-query';
import { COMMON_STALE_TIME } from '~lib/globals';
import { PERMISSIONS } from '~lib/static-data/permissions';
import HttpClient from '../../stores/http_store';

export async function getTasks(ctx?: any) {
  const url = `${HttpClient.base_url}tasks`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
      const tasks = response.data;
      // console.log(url)
      // console.log(tasks);
      return Promise.resolve(tasks);
    }
    return Promise.reject(null);
  });
}

export function useTasks(ctx?: any) {
  //   // TODO: 🚩 check all critical arguments
  return useQuery(['tasks'], () => getTasks(ctx), {
    staleTime: COMMON_STALE_TIME,
    enabled: PERMISSIONS['GET_TASKS'],
  });
}