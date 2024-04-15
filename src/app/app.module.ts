import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairDashboardComponent } from './components/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './components/fair-card/fair-card.component';
import { FairDetailsComponent } from './components/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
