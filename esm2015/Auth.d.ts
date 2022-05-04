import { AuthResponse } from "./Types";
import { API } from "./API";
export declare class Auth extends API {
    generateToken(consumerKey: string, consumerSecret: string): Promise<AuthResponse>;
}
