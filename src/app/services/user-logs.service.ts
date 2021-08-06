import { Injectable } from '@angular/core';
import { TransactionLog } from '../classes/transaction-log';

@Injectable({
  providedIn: 'root'
})

export class UserLogsService {

  userName = "";
  // currency: string = "$";
  currency: string = "";
  currencyList = [
    { name: "Dollar", symbol: "$", },
    { name: "Rupee", symbol: "₹", },
    { name: "Euro", symbol: "€" },
    { name: "Yuan", symbol: "¥" },
    { name: "SGD", symbol: "S$" },
    { name: "UAE", symbol: "AED" },
  ]

  constructor() {
    this.currency = this.currencyList[0].symbol;
  }

  // logs = [
  //   {
  //     name: "Gokul", amount: 250, type: false, logs: [
  //       {
  //         type: false,
  //         amount: 100,
  //         settlementDate: "18-02-2000"
  //       },
  //       {
  //         type: false,
  //         amount: 150,
  //         settlementDate: "18-02-2000"
  //       },
  //     ]
  //   },
  //   { name: "Fayaz", amount: 300, type: false, logs: [] },
  //   { name: "Thamo", amount: 700, type: false, logs: [] },
  //   { name: "Vicky", amount: 10500, type: true, logs: [] },
  //   { name: "Riz", amount: 1000, type: false, logs: [] },
  // ]

  logs: TransactionLog[] = []
}
