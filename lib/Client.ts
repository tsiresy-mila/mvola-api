
import {  Transaction } from "./Transaction";
import { Auth } from './Auth';
import { SANDBOX_URL } from './constants';

export class Client  extends Transaction {

    private baseURL : string

    constructor(baseURL: string = SANDBOX_URL) {
        super(baseURL)
        this.baseURL = baseURL
    }

    async generateToken(consumerKey: string, consumerSecret: string) {
        return await new Auth(this.baseURL).generateToken(consumerKey,consumerSecret)
    }

    setAccessToken(accessToken: string): void {
        this.api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }


}