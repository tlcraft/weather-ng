import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetWeatherAction } from './store/actions/weather.actions';
import { Weather } from './models/weather.model';
import { AppState } from './store/state/app.state';

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

  constructor(private store: Store<AppState>) {
    this.currentWeather$ = this.store.pipe(select(state => state.weatherState.currentWeather));
    this.loading$ = this.store.pipe(select(store => store.weatherState.loading));
    this.error$ = this.store.pipe(select(store => store.weatherState.error));
  }

  ngOnInit() {
    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    });
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