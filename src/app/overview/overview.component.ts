import { Component, OnInit, Input } from '@angular/core';
import { UserLogsService } from '../services/user-logs.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() give: string = "-";
  @Input() get: string = "-";
  get currency() {
    return this._userLogsService.currency;
  }

  constructor(private _userLogsService: UserLogsService) {
  }

  ngOnInit(): void {
  }

}
