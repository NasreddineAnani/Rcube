import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UcWidgetComponent } from 'ngx-uploadcare-widget';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './services/authGuard.service';
import { AuthService } from './services/auth.service';
import { ImageService } from './services/image.service';

import { DashboardComponent } from './dashboard/dashboard.component';


export const firebaseConfig = {
  "apiKey": "AIzaSyBaQlmeBsMYHQfV8pwdicDmmKug-T0wE14",
  "authDomain": "s2tw-dev.firebaseapp.com",
  "databaseURL": "https://s2tw-dev.firebaseio.com",
  "projectId": "s2tw-dev",
  "storageBucket": "s2tw-dev.appspot.com",
  "messagingSenderId": "424462100210"
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UcWidgetComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
