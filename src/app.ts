import express from 'express';
import { PriceCalcSoap, PriceCalcSoapAsync } from "./makingSoapCall/makeSoapCall";
import { promiseTest } from './promiseAndAsyncawait/promiseAndAsyncawait';
import { getboNamespaceMappingData, getboNamespaceMappingDataNew } from './readingDatafromJsonFile/readDataUsingImport';
import { getBranches } from './githubIntegration/githubint';
import * as cal from './Number Calculation/NumberCal';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is a Playground Project for Node and TS!");
});

app.get("/boMapper", (req, res) => {
    res.send(getboNamespaceMappingDataNew("",""));
});

app.get("/priceCalcSoap", (req, res) => {
    res.send(PriceCalcSoap());
});

app.get("/priceCalcSoapAsync", (req, res) => {
  res.send(PriceCalcSoapAsync());
});

app.get("/promiseTest", (req, res) => {
  res.send(promiseTest());
});

app.get("/github", (req, res) => {
  res.send(getBranches());
});

app.get("/calc", (req, res) => {
  res.send(cal.NumberNormalCalculation());
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});