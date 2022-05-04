import { AxiosInstance } from "axios";
import { Options } from "./Types";
export declare class API {
    api: AxiosInstance;
    constructor(baseURL: string);
    config(options: Options): void;
}
