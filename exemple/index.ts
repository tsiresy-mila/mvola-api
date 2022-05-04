import { Client, SANDBOX_URL, TransactionRequest } from "../lib";
import { v4 } from "uuid";
require('dotenv').config()

async function bootstrap() {
    const consumerKey = process.env.CONSUMER_KEY || '';
    const consumerSecret = process.env.CONSUMER_SECRET || '';
    const apiClient = new Client(SANDBOX_URL);
    const data = await apiClient.generateToken(consumerKey, consumerSecret);

    apiClient.setAccessToken(data.access_token);

    apiClient.config({
      version: "1.0",
      correlationId: v4(),
      userLanguage: "MG",
      userAccountIdentifier: "msisdn;034350003",
      partnerName: "Mvola API",
    });

  
    const transactionRef = v4();
  
    const tx: TransactionRequest = {
      amount: 1000,
      currency: "Ar",
      descriptionText: "Description",
      requestDate: new Date().toISOString(),
      debitParty: [
        {
          key: "msisdn",
          value: "034350003",
        },
      ],
      creditParty: [
        {
          key: "msisdn",
          value: "034350003",
        },
      ],
      metadata: [
        {
          key: "partnerName",
          value: "Mvola API",
        },
        {
          key: "fc",
          value: "USD",
        },
        {
          key: "amountFc",
          value: "1",
        },
      ],
      requestingOrganisationTransactionReference: transactionRef,
      originalTransactionReference: transactionRef,
    };
    const response = await apiClient.initiateTranscation(tx);
    console.log(response)
  }
  
bootstrap();