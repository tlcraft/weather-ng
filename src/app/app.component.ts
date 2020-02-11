import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from './Services/weather.service';
import { Weather } from 'src/app/Models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  weather: string;
  iconSource: string = '';
  form: FormGroup;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    });
  }

  getCurrentWeather(): void {
    if(this.zipCode) {
      this.weatherService
      .getCurrentWeather(this.zipCode)
      .subscribe(
        (currentWeather: Weather) => {
          if(currentWeather) {
            const icon = currentWeather.weather && currentWeather.weather[0] && currentWeather.weather[0].icon;
            this.iconSource = `http://openweathermap.org/img/w/${icon}.png`;
            this.weather = `It's ${currentWeather.main.temp} degrees in ${currentWeather.name}!`;
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