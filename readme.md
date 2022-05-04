### MVOLA API

### JS and TS API Client FOR MVOLA API

**JAVASCRIPT**
```js

require('dotenv').config()
const { Client, SANDBOX_URL } = require("mvola-api");
const {v4} = require('uuid')

const consumerKey = process.env.CONSUMER_KEY || "";
const consumerSecret = process.env.CONSUMER_SECRET || "";
const apiClient = new Client(SANDBOX_URL);

apiClient.generateToken(consumerKey, consumerSecret).then((data) => {

  //set access token for api request
  apiClient.setAccessToken(data.access_token);

  // config for transaction
  apiClient.config({
    version: "1.0",
    correlationId: v4(),
    userLanguage: "MG",
    userAccountIdentifier: "msisdn;034350003",
    partnerName: "Mvola API",
  });

  // transcation reference
  const transRef = v4();

  const trans = {
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
    requestingOrganisationTransactionReference: transRef,
    originalTransactionReference: transRef,
  };
  apiClient.initiateTranscation(trans).then((response) => {
    console.log(response);
  });
});



```

**TYPESCRIPT**

```ts
import { Client,TransactionRequest } from "mvola-api";
import { v4 } from "uuid";
require('dotenv').config()

async function bootstrap() {
    const consumerKey = process.env.CONSUMER_KEY || '';
    const consumerSecret = process.env.CONSUMER_SECRET || '';
    const apiClient = new Client();
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

```