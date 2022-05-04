import { MVOLA_MERCHANT_API_URL } from ".";
import { TransactionDetails, TransactionRequest, TransactionResponse, TransactionStatus } from "./Types";
import { API } from "./API";

export class Transaction extends API {

    
    async getDetails(transactionId: string): Promise<TransactionDetails> {
        const { data } = await this.api.get<TransactionDetails>(`${MVOLA_MERCHANT_API_URL}/${transactionId}`);
        return data;
    }

    async getStatus(serverCorrelationId: string): Promise<TransactionStatus> {
        const { data } = await this.api.get<TransactionStatus>(`${MVOLA_MERCHANT_API_URL}/status/${serverCorrelationId}`);
        return data;
    }

    async initiateTranscation(params: TransactionRequest): Promise<TransactionResponse> {
        const { data } = await this.api.post<TransactionResponse>(`${MVOLA_MERCHANT_API_URL}/`,
            { 
               ...params, 
               amount: params.amount.toString() 
            }
        );
        return data;
    }

   
}