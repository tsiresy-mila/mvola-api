import { Transaction } from "./Transaction";
export declare class Client extends Transaction {
    private baseURL;
    constructor(baseURL?: string);
    generateToken(consumerKey: string, consumerSecret: string): Promise<import("./Types").AuthResponse>;
    setAccessToken(accessToken: string): void;
}
