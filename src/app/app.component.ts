import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Weather } from 'src/app/Models/weather.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  weather: string;
  iconSource: string;
  form: FormGroup;
  currentWeather$: Observable<Weather> = this.store.select(state => state);

  constructor(private store: Store<Weather>) {}

  ngOnInit() {
    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    });
  }

  getCurrentWeather(): void {
    if(this.zipCode) {
      this.store.dispatch( { type: '[Weather] GetCurrentWeather', prop: this.zipCode } );
      this.currentWeather$.subscribe(
        currentWeather => {
          if(currentWeather && currentWeather.weather) {
            const icon = currentWeather.weather[0] && currentWeather.weather[0].icon;
            this.iconSource = icon ? `http://openweathermap.org/img/w/${icon}.png` : '';
            this.weather = `It's ${currentWeather.main && currentWeather.main.temp} degrees in ${currentWeather.name}!`;
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