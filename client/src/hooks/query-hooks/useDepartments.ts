import { useQuery } from '@tanstack/react-query';
import { COMMON_STALE_TIME } from '~lib/globals';
import { PERMISSIONS } from '~lib/static-data/permissions';
import HttpClient from '../../stores/http_store';

export async function getDepartments(ctx?: any) {
  const url = `${HttpClient.base_url}departments`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
      const departements = response.data;
      // console.log(url)
      // console.log(departements);
      return Promise.resolve(departements);
    }
    return Promise.reject(null);
  });
}

export function useDepartments(ctx?: any) {
  //   // TODO: 🚩 check all critical arguments
  return useQuery(['departements'], () => getDepartments(ctx), {
    staleTime: COMMON_STALE_TIME,
    enabled: PERMISSIONS['GET_DEPARTMENTS'],
  });
}
