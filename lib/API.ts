import axios, { AxiosInstance } from "axios";
import { Options } from "./Types";

export  class API {
    
    api: AxiosInstance
    
    constructor(baseURL : string) {
        this.api = axios.create({baseURL});
    }
    config(options: Options): void {
        this.api.defaults.headers.common["Version"] = options.version;
        this.api.defaults.headers.common["X-CorrelationID"] = options.correlationId;
        if (options.userLanguage) {
          this.api.defaults.headers.common["UserLanguage"] = options.userLanguage;
        }
        this.api.defaults.headers.common["UserAccountIdentifier"] =  options.userAccountIdentifier;
        if (options.partnerName) {
          this.api.defaults.headers.common["PartnerName"] = options.partnerName;
        }
        if (options.callbackUrl) {
          this.api.defaults.headers.common["X-Callback-URL"] = options.callbackUrl;
        }
        this.api.defaults.headers.common["Cache-Control"] = "no-cache";
    }
      
}