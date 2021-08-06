import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogItemComponent } from './log-item/log-item.component';
import { UserLogsService } from './services/user-logs.service';
import { NewLogComponent } from './new-log/new-log.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    OverviewComponent,
    LogItemComponent,
    NewLogComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserLogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
