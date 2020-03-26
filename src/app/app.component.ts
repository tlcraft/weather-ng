import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetWeatherAction } from './store/actions/weather.actions';
import { WeatherState } from './store/state/weather.state';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  weatherMessage: string;
  iconSource: string;
  form: FormGroup;
  currentWeather$: Observable<Weather>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<WeatherState>) {}

  ngOnInit() {
    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    });
    this.currentWeather$ = this.store.select(state => state.currentWeather);
    this.loading$ = this.store.select(store => store.loading);
    this.error$ = this.store.select(store => store.error);
  }

  getCurrentWeather(): void {
    if(this.zipCode) {
      this.store.dispatch( new GetWeatherAction( { zipCode: this.zipCode } ));
      this.currentWeather$.subscribe(
        currentWeather => {
          if(currentWeather && currentWeather.weather) {
            const icon = currentWeather.weather[0] && currentWeather.weather[0].icon;
            this.iconSource = icon ? `http://openweathermap.org/img/w/${icon}.png` : '';
            this.weatherMessage = `It's ${currentWeather.main && currentWeather.main.temp} degrees in ${currentWeather.name}!`;
          }
        },
        error => {
          this.weatherMessage = 'An error occured.';
          console.error(error);
        }
      );
    }
  }

  get zipCode() {
    return this.form && this.form.get('zipCode').value;
  }
}