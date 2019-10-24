import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { MainComponent } from "./main/main.component";

import { FormsModule } from "@angular/forms";

import {} from '@angular/router';
import { WeatherComponent } from './weather/weather.component'
import { WeatherService } from './weather/weather.service';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, WeatherComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
