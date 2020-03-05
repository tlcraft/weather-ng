import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/weather.effects';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './store/reducers/weather.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([WeatherEffects]),
    StoreModule.forRoot( { weather: weatherReducer })
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
