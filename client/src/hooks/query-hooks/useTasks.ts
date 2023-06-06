import { useQuery } from '@tanstack/react-query';
import client from '~lib/client';
import { COMMON_STALE_TIME } from '~lib/globals';
import { PERMISSIONS } from '~lib/static-data/permissions';
import JWTToken from '~lib/token';

export function getTasks(ctx: any = null) {
  return async () => {
    const token = JWTToken.getToken(ctx);
    const { data } = await client.get('/tasks', {
      headers: {
        Authorization: token,
      },
      params: {},
    });
    return data;
  };
}

export function useTasks(ctx?: any) {
  // TODO: 🚩 check all critical arguments
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks(ctx),
    staleTime: COMMON_STALE_TIME,
    enabled: PERMISSIONS['GET_TASKS'],
  });
}