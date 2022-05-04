import { TransactionDetails, TransactionRequest, TransactionResponse, TransactionStatus } from "./Types";
import { API } from "./API";
export declare class Transaction extends API {
    getDetails(transactionId: string): Promise<TransactionDetails>;
    getStatus(serverCorrelationId: string): Promise<TransactionStatus>;
    initiateTranscation(params: TransactionRequest): Promise<TransactionResponse>;
}
