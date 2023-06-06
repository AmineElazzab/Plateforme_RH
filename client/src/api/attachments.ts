import client from '~lib/client';
import JWTToken from '~lib/token';



export const downloadAttachment = async (path: string) => {
    const token = JWTToken.getToken();
    try {
      const { data } = await client.get(`/attachments`, {
        responseType: 'blob',
        headers: {
          Authorization: token,
          'Content-Type': 'application/octet-stream',
        },
        params: {
          path:'/attachments'+path,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  