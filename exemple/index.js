require('dotenv').config()
const { Client, SANDBOX_URL } = require("./../esm2015");
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
