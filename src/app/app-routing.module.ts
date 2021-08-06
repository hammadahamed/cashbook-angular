import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { NewLogComponent } from './new-log/new-log.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "details", component: DetailsComponent, canActivate: [AuthGuard] },
  { path: "details/:id", component: DetailsComponent, canActivate: [AuthGuard] },
  { path: "new", component: NewLogComponent, canActivate: [AuthGuard] },
  { path: "**", component: AppComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
