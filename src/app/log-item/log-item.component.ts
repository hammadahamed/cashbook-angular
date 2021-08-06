import { Component, OnInit, Input } from '@angular/core';
import { TransactionLog } from '../classes/transaction-log';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserLogsService } from '../services/user-logs.service';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.css']
})
export class LogItemComponent implements OnInit {

  @Input() log: TransactionLog = new TransactionLog();
  showOptions = false;
  currency: string = "";

  optionToggle() {
    this.showOptions = !this.showOptions;
  }

  constructor(private _userLogsService: UserLogsService) {
    this.currency = _userLogsService.currency;
  }

  ngOnInit(): void {
  }

}
