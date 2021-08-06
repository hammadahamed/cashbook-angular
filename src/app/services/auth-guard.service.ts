import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserLogsService } from './user-logs.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _userLog: UserLogsService, private _router: Router) { }

  canActivate(): boolean {
    if (this._userLog.userName.length) {
      return true;
    }
    else {
      this._router.navigate([""])
      return false;
    }
  }
}
