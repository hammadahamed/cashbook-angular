import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from '../classes/log';
import { TransactionLog } from '../classes/transaction-log';
import { UserLogsService } from '../services/user-logs.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  index: number = 0;
  log: TransactionLog = new TransactionLog();
  logHistory: Log[] = [];
  currency: string = "";
  showDeleteModal = false;

  constructor(private _userLogService: UserLogsService, private route: ActivatedRoute) {
    console.log(this.log)
    this.log = _userLogService.logs[0];
    this.currency = this._userLogService.currency;
  }

  deleteRecord() {
    this._userLogService.logs.splice(this.index, 1);
  }
  getColor(type: boolean) {
    return type ? 'text-green-400' : 'text-red-500';
  }


  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe((p) => {
      this.index = p.index;
      this.log = this._userLogService.logs[this.index];
      this.logHistory = this.log.logs;
    });

  }


}
