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
import { ItemsService } from './services/items.service';
import { UsersService } from './services/users.service';
import { CentersService } from './services/centers.service';
import { CategoriesService } from './services/categories.service';
import { SearchCategoriesService } from './services/search-categories.service';


import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';


import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SearchComponent } from './search/search.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { AgmCoreModule } from '@agm/core';

export const firebaseConfig = {
  apiKey: "AIzaSyCq5K8mLvTVakYFXLBGiPVaEafA0W5tIJc",
  authDomain: "rcube-7b19f.firebaseapp.com",
  databaseURL: "https://rcube-7b19f.firebaseio.com",
  projectId: "rcube-7b19f",
  storageBucket: "rcube-7b19f.appspot.com",
  messagingSenderId: "930082734432"
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searchItems', component: SearchItemsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UcWidgetComponent,
    SignupComponent,
    HeaderComponent,
    RegisterComponent,
    SearchComponent,
    SearchItemsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4uSW7IkXhjEAM9JrO1MaEoAw2US1ExPM'
    })
  ],
  providers: [
    AuthGuard,
    AuthService,
    ItemsService,
    UsersService,
    CentersService,
    CategoriesService,
    SearchCategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
