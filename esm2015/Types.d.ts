export declare type HashedMap = {
    key: string;
    value: string;
};
export declare type Options = {
    version: string;
    correlationId: string;
    userLanguage?: string;
    userAccountIdentifier: string;
    partnerName?: string;
    callbackUrl?: string;
};
export declare type AuthResponse = {
    access_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
};
export declare type TransactionRequest = {
    amount: number;
    currency: string;
    descriptionText: string;
    requestDate: string;
    debitParty: HashedMap[];
    creditParty: HashedMap[];
    metadata: HashedMap[];
    requestingOrganisationTransactionReference: string;
    originalTransactionReference: string;
};
export declare type TransactionResponse = {
    status: string;
    serverCorrelationId: string;
    notificationMethod: string;
};
export declare type TransactionDetails = {
    amount: number;
    currency: string;
    transactionReference: string;
    transactionStatus: string;
    createDate: string;
    debitParty: HashedMap[];
    creditParty: HashedMap[];
    metadata: HashedMap[];
    fee: {
        feeAmount: number;
    };
};
export declare type TransactionStatus = {
    status: string;
    serverCorrelationId: string;
    notificationMethod: string;
    objectReference: string;
};
