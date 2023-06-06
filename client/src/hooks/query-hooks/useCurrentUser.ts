import { useQuery } from '@tanstack/react-query';
import client from '~lib/client';
import { COMMON_STALE_TIME } from '~lib/globals';
import JWTToken from '~lib/token';

export function getCurrentsUsers(ctx: any = null) {
  return async () => {
    const token = JWTToken.getToken(ctx);
    try {
      const { data } = await client.get('/users/me', {
        headers: {
          Authorization: token,
        },
      });
      return data;
    } catch (error) {
      JWTToken.removeToken();
      return null;
    }
  };
}

export function useCurrentUser(ctx?: any) {
  // TODO: 🚩 check all critical arguments
  let page: any, limit: any, filters: any;

  if (ctx) {
    page = ctx.page ?? 1;
    limit = ctx.limit ?? 500;
    filters = ctx.filters ?? {};
  }

  return useQuery({
    queryKey: ['current-user'],
    queryFn: getCurrentsUsers(ctx),
    staleTime: COMMON_STALE_TIME,
  });
}