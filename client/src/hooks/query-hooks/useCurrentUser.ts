import { useQuery } from '@tanstack/react-query';
// import client from '~lib/client';
// import JWTToken from '~lib/token';
import { COMMON_STALE_TIME } from '~lib/globals';
import HttpClient from '../../stores/http_store';

export async function getCurrentsUsers(ctx?: any) {
  if (window.location.pathname === '/auth/login') {
    return Promise.resolve(null);
  }
  const url = `${HttpClient.base_url}users/me`;
  return HttpClient.get(url).then((response) => {
    if (response && response.status === 200) {
      const user = response.data;
      console.log(url)
      // console.log(user)
      return Promise.resolve(user);
    }
    return Promise.reject(null);
  });
}

// export function getCurrentsUsers(ctx: any = null) {
//   return async () => {
//     const token = JWTToken.getToken(ctx);
//     try {
//       const { data } = await client.get('/users/me', {
//         headers: {
//           Authorization: token,
//         },
//       });
//       return data;
//     } catch (error) {
//       JWTToken.removeToken();
//       return null;
//     }
//   };
// }

export function useCurrentUser(ctx?: any) {
  // TODO: 🚩 check all critical arguments
  let page: any, limit: any, filters: any;

  if (ctx) {
    page = ctx.page ?? 1;
    limit = ctx.limit ?? 500;
    filters = ctx.filters ?? {};
  }

  //   return useQuery({
  //     queryKey: ['current-user'],
  //     queryFn: getCurrentsUsers(ctx),
  //     staleTime: COMMON_STALE_TIME,
  //   });
  // }
  return useQuery({
    queryKey: ['current-user'],
    queryFn: getCurrentsUsers,
    staleTime: COMMON_STALE_TIME,
  });
}
