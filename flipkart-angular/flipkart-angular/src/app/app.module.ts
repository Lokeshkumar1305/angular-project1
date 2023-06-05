import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SiglePageComponent } from './pages/sigle-page/sigle-page.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';
import { MybuttonsComponent } from './components/mybuttons/mybuttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    
    // HomeComponent,
    // AboutComponent,
    routingComponents,
    //LoginComponent,
    //RegisterComponent,
    //SiglePageComponent,
    TopNavbarComponent,
    LoginFormComponent,
    SliderComponent,
    CardsComponent,
    MybuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
