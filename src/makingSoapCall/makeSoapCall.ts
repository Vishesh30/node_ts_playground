export function PriceCalcSoap() {
  let soap = require("soap");
  const wsdl = "/Users/i061910/Git/x4-sample/src/wsdl/calcPrice.wsdl";
  const args = {
    CalculatePricesRequest: {
      Application: 1,
      CurrencyCode: "USD",
      GrossPricingIndicator: false,
      PricingDate: "2019-09-20",
      Item: {
        ID: 10,
        ProductID: "MCF-0001",
        ProductTypeCode: 1,
        Quantity: 1,
        QuantityTypeCode: "EA",
        SupplierID: "MC2000",
      },
    },
  };
  // tslint:disable-next-line: only-arrow-functions
  let start = new Date().getTime();
  soap.createClient(wsdl, function (err, client) {
    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: no-console
    let end = new Date().getTime();
    // tslint:disable-next-line: no-console
    console.log("Time to create soapClient from WSDL" + (end - start));
    // tslint:disable-next-line: no-console
    if (err) {
      console.log(err);
    } else {
      client.setSecurity(
        new soap.BasicAuthSecurity("_PRICECALC", "Welcome@123")
      );
      let startsoap = new Date().getTime();
      client.CalculatePrice(args, function (err, result) {
        let endsoap = new Date().getTime();
        // tslint:disable-next-line: no-console
        console.log(
          "From Local -----------------------------------" +
            JSON.stringify(result)
        );
        // tslint:disable-next-line: no-console
        console.log(
          "Time to get the response from BYD system" + (endsoap - startsoap)
        );
        return JSON.stringify(result);
      });
    }
  });
}

export async function PriceCalcSoapAsync(): Promise<any> {
  let soap = require("soap");

  let client = await createSoapClient(soap);
  let result = await makeSOAPCall(client, soap);
  console.log(JSON.stringify(result));
  return JSON.stringify(result);
}

async function createSoapClient(soap): Promise<any> {
  return new Promise((resolve, reject) => {
    const wsdl = "/Users/i061910/Git/x4-sample/src/wsdl/calcPrice.wsdl";
    let start = new Date().getTime();
    soap.createClient(wsdl, function (err, client) {
      resolve(client);
    });
  });
}

async function makeSOAPCall(client, soap): Promise<any> {
  return new Promise((resolve, reject) => {
    const args = {
      CalculatePricesRequest: {
        Application: 1,
        CurrencyCode: "USD",
        GrossPricingIndicator: false,
        PricingDate: "2019-09-20",
        Item: {
          ID: 10,
          ProductID: "MCF-0001",
          ProductTypeCode: 1,
          Quantity: 1,
          QuantityTypeCode: "EA",
          SupplierID: "MC2000",
        },
      },
    };
    client.setSecurity(new soap.BasicAuthSecurity("_PRICECALC", "Welcome@123"));
    client.CalculatePrice(args, function (err, result) {
      resolve(result);
    });
  });
}
