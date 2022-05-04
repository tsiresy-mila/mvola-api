export type HashedMap = {
    key: string;
    value: string;
}

export type Options = {
    version: string;
    correlationId: string;
    userLanguage?: string;
    userAccountIdentifier: string;
    partnerName?: string;
    callbackUrl?: string;
};
  
  export type AuthResponse = {
    access_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
  };
  
  export type TransactionRequest = {
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
  
  export type TransactionResponse = {
    status: string;
    serverCorrelationId: string;
    notificationMethod: string;
  };
  
  export type TransactionDetails = {
    amount: number;
    currency: string;
    transactionReference: string;
    transactionStatus: string;
    createDate: string;
    debitParty: HashedMap[];
    creditParty: HashedMap[];
    metadata:HashedMap[];
    fee: {
      feeAmount: number;
    };
  };
  
  export type TransactionStatus = {
    status: string;
    serverCorrelationId: string;
    notificationMethod: string;
    objectReference: string;
  };