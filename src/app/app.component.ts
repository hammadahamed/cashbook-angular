import { Component, OnInit } from '@angular/core';
import { TransactionLog } from './classes/transaction-log';
import { UserLogsService } from './services/user-logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'First-Try';
  userName = '';
  tempName = "";
  desc = "This is my Custom String";
  query = "";
  date = new Date();
  currencyList: any = [];
  currency: string = "";

  nameError = false;

  showModal = true;

  get toShowModal() {
    if (sessionStorage.getItem("username") == null)
      return true;
    return false;
  }
  toggleModal(toShow: boolean) {
  }

  onQueryChange() {
    let searchResult: TransactionLog[] = [];
    if (this.query.length > 0) {
      this.logs.forEach((log) => {
        if (log.name.trim().toLowerCase().includes(this.query.trim().toLowerCase())) {
          searchResult.push(log)
        }
      });
      this.logs = searchResult;
      return;

    } else if (this.query.length <= 0) {
      this.logs = this._userLogService.logs;
      return;
    }
  }

  // type FALSE = to get
  // type TRUE = to give
  logs: TransactionLog[] = [];

  tempLog: any = {
    "Gokul": { type: false, log: [200, 300], },
    "riz": { type: false, log: [50.60], },
    "viky": { type: false, log: [10, 20], },
    "thamo": { type: false, log: [11, 12], },
  }

  constructor(private _userLogService: UserLogsService) {
    this.logs = _userLogService.logs;
    this.userName = _userLogService.userName;
    this.currencyList = this._userLogService.currencyList;
    this.currency = this._userLogService.currency;
    console.log("constructed");
  }

  isCurrCurrency(val: string) {
    return this.currency == val ? true : false;
  }

  setCurrCurrency(val: string) {
    this.currency = val;
    this._userLogService.currency = val;
  }

  ngOnInit() {
    console.log("initialized");
  }

  setUserName(name: string) {
    name = name.trim().toLowerCase();
    if (name.length > 3) {
      let data = localStorage.getItem(name);
      if (data != null) {
        console.log("[+] Earlier records found !")
        this._userLogService.logs = JSON.parse(data)
        this.logs = this._userLogService.logs;
      }
      this.showModal = false;
      this._userLogService.userName = name;
      sessionStorage.setItem("username", name)
    }
    else {
      this.nameError = true;
      setTimeout(() => {
        this.nameError = false;
      }, 3000);
    }
  }

  get getUserName() {
    return this.userName.length ? this.userName : "User";
  }

  /* -------------------------------- OVERVIEW -------------------------------- */
  get toGive() {
    var togive = 0;
    for (var log of this.logs) {
      if (log.type) {
        togive += log.amount;
      }
    }
    return togive.toString();
  }

  get toGet() {
    var toget = 0;
    for (var log of this.logs) {
      if (!log.type) {
        toget += log.amount;
      }
    }
    return toget.toString();
  }
  /* -------------------------------------------------------------------------- */

  searching() {
    console.log("searching...");
  }

  get showButtonSearch() {
    return this.query.length ? true : false;
  }
  clearQuery() {
    this.query = "";
    this.onQueryChange();
  }
}
