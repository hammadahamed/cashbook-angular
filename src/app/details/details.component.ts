import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private _userLogService: UserLogsService, private route: ActivatedRoute, private router: Router) {
    console.log(this.log)
    this.log = _userLogService.logs[0];
    this.currency = this._userLogService.currency;
  }

  deleteRecord() {
    this.showDeleteModal = false;
    this.router.navigate(["/"]);
    this._userLogService.logs.splice(this.index, 1);
    this._userLogService.logs = this._userLogService.logs;
    this.log = this._userLogService.logs[this.index--];
    this.logHistory = this.log.logs;
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
