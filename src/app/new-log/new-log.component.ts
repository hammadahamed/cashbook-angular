import { Component, OnInit } from '@angular/core';
import { UserLogsService } from '../services/user-logs.service';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.css']
})

export class NewLogComponent implements OnInit {

  name: string = "";
  amount: any = "";
  date: string = "";
  type: boolean = false;

  showValidationError = false;
  addedMsg: boolean = false;

  constructor(private userLogService: UserLogsService) { }

  validate() {
    if (this.name.length == 0 || this.amount <= 0 || this.date.length == 0) {
      this.showValidationError = true;
      setTimeout(() => {
        this.showValidationError = false;
      }, 5000);
      return false;
    }
    return true;
  }

  showAddedMsg() {
    this.addedMsg = true;
    setTimeout(() => {
      this.addedMsg = false;
    }, 5000);
  }

  resetFields() {
    this.name = "";
    this.amount = "";
    this.date = "";
  }

  addLog() {
    if (!this.validate()) {
      return;
    }

    let recordFound = false;
    for (var log of this.userLogService.logs) {
      /* ------------------------- ADDING TO EXISTING LOG ------------------------- */
      if (log.name.toLowerCase().trim() === this.name.toLowerCase().trim()) {
        recordFound = true;
        // Adding the log
        log.logs.push({
          type: this.type,
          amount: this.amount,
          settlementDate: this.date.split("-").reverse().join("-")
        });

        // Recalculating and assigning the total amount
        let totalGave = 0;
        let totalGot = 0;

        log.logs.forEach(e => {
          if (e.type) {
            totalGot += e.amount
          }
          if (!e.type) {
            totalGave += e.amount
          }
        });

        if (totalGot > totalGave) {
          log.amount = totalGot - totalGave;
          log.type = true;
        }
        else if (totalGave > totalGot) {
          log.amount = totalGave - totalGot;
          log.type = false;
        }
        else if (totalGave == totalGot) {
          // should delete the records
          log.amount = 0
          log.type = false
        }
        break;
      }
    }

    // PURE NEW RECORD
    if (!recordFound) {
      let rec = {
        name: this.name,
        amount: this.amount,
        type: this.type,
        logs: [
          {
            type: this.type,
            amount: this.amount,
            settlementDate: this.date.split("-").reverse().join("-")
          }
        ]
      }
      this.userLogService.logs.push(rec)
    }

    let data = JSON.stringify(this.userLogService.logs);
    let key = this.userLogService.userName.trim().toLowerCase();
    localStorage.setItem(key, data)
    console.log(key, data)

    this.resetFields();
    this.showAddedMsg();
  }

  typeSetter(val: boolean) {
    this.type = val;
  }

  print() {
    this.addLog();
    let x = {
      name: "",
      amount: 0,
      date: "",
    }
    x.name = this.name;
    x.amount = this.amount;
    x.date = this.date;
    console.log(x)
  }

  ngOnInit(): void {
  }

}
