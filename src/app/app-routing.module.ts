import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NewLogComponent } from './new-log/new-log.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "details", component: DetailsComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "new", component: NewLogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
