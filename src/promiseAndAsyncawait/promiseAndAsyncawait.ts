export function promiseTest() : any {
    let myPromise = new Promise(function(resolve, reject) {
        let savings = 20000;
        let priceOfPhone = 60000;
        if (savings > priceOfPhone) {
          resolve({
            brand: "iphone",
            model: "11"
          });
        } else {
          reject("We donot have enough savings. Let us save some more money.");
        }
      });myPromise.then(function(value) {
        return "Hurray I got this phone as a gift " + JSON.stringify(value);
      });myPromise.catch(function(reason) {
        return "I coudn't buy the phone because " +  reason;
      });
  }



export async function PriceCalcSoapAsync() : Promise<any> {
    let soap = require('soap');

    let client = await createSoapClient(soap);
    let result = await makeSOAPCall(client,soap);
    console.log(JSON.stringify(result));
    return JSON.stringify(result);
}

function createSoapClient(soap) : Promise<any> {
   return new Promise((resolve,reject)=>{
        const wsdl = '/Users/i061910/Git/x4-sample/src/wsdl/calcPrice.wsdl';
        let start = (new Date()).getTime();
        soap.createClient(wsdl, function(err, client) { 
            resolve(client);
        });
    })
}

function makeSOAPCall(client,soap): Promise<any> {
    return new Promise((resolve,reject)=>{
        const args = {CalculatePricesRequest:{Application:1,CurrencyCode:"USD",GrossPricingIndicator:false,PricingDate:"2019-09-20",Item:{ID:10,ProductID:"MCF-0001",ProductTypeCode:1,Quantity:1,QuantityTypeCode:"EA",SupplierID:"MC2000"}}};
        client.setSecurity(new soap.BasicAuthSecurity('_PRICECALC', 'Welcome@123'));
        client.CalculatePrice(args, function(err, result) { 
            resolve(result);
        });

    });
}