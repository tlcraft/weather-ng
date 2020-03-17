import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherAction } from './store/actions/weather.actions';
import { WeatherState } from './store/state/weather.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  weather: string;
  iconSource: string;
  form: FormGroup;
  currentWeather$: Observable<WeatherState> = this.store.select(state => state);

  constructor(private store: Store<WeatherState>) {}

  ngOnInit() {
    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    });
  }

  getCurrentWeather(): void {
    if(this.zipCode) {
      this.store.dispatch( new WeatherAction( { zipCode: this.zipCode } ));
      this.currentWeather$.subscribe(
        currentWeather => {
          if(currentWeather && currentWeather.weather && currentWeather.weather.weather) {
            const icon = currentWeather.weather.weather[0] && currentWeather.weather.weather[0].icon;
            this.iconSource = icon ? `http://openweathermap.org/img/w/${icon}.png` : '';
            this.weather = `It's ${currentWeather.weather.main && currentWeather.weather.main.temp} degrees in ${currentWeather.weather.name}!`;
          }
        },
        error => {
          this.weather = 'An error occured.';
          console.error(error);
        }
      );
    }
  }

  get zipCode() {
    return this.form && this.form.get('zipCode').value;
  }
}