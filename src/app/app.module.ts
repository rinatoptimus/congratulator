import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PersonModule } from './persons/person.module';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
//


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    //
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    //
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    PersonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
