# Paypay OPA SDK - Node
[![License](https://img.shields.io/:license-apache2.0-red.svg)](https://opensource.org/licenses/Apache-2.0)
[![Coverage Status](https://coveralls.io/repos/github/paypay/paypayopa-sdk-node/badge.svg?branch=master)](https://coveralls.io/github/paypay/paypayopa-sdk-node?branch=master)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/paypay/paypayopa-sdk-node.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/paypay/paypayopa-sdk-node/context:javascript)
[![Maintainability](https://api.codeclimate.com/v1/badges/e3cf7a7e9153531b0f48/maintainability)](https://codeclimate.com/github/paypay/paypayopa-sdk-node/maintainability)

So you are a developer and want to start accepting payments using PayPay. PayPay's Payment SDK is the simplest way to achieve the integration. With PayPay's Payment SDK, you can build a custom Payment checkout process to suit your unique business needs and branding guidelines.

# When to use QR Code Payments
QR Code flow is recommended normally in the following scenarios
- Payment to happen on a Tablet
- Payments on Vending Machines
- Payment to happen on a TV Screen
- Printing a QR Code for Bill Payment

## Understanding the Payment Flow
Following diagram defines the flow for Dynamic QR Code.
![](https://www.paypay.ne.jp/opa/doc/v1.0/imgs/dynamicqrcode-sequence.png)

We recommend that the merchant implements a Polling of the Get payment Details API with a 4-5 second interval in order to know the status of the transaction.

## Lets get Started
Once you have understood the payment flow, before we start the integration make sure you have:

- [Registered](https://developer.paypay.ne.jp/) for a PayPay developer/merchant Account
- Get the API key and secret from the Developer Panel.
- Use the sandbox API Keys to test out the integration

### Install npm package
```sh
$ npm i @paypayopa/paypayopa-sdk-node
```
