import qs from "qs";
import { AuthResponse } from "./Types";
import { Buffer } from 'buffer';
import { API } from "./API";

export class Auth extends API  {

    async generateToken( consumerKey: string, consumerSecret: string ): Promise<AuthResponse> {
        const params = qs.stringify({
          grant_type: "client_credentials",
          scope: "EXT_INT_MVOLA_SCOPE",
        });
        const { data } = await this.api.post<AuthResponse>(`/token`, params, {
          headers: {
            Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
            ContentType : 'application/x-www-form-urlencoded',
            CacheControl : 'no-cache'
          },
        });
        return data;
      }
}