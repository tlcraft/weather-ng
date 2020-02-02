import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  weather: string;
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
        (currentWeather: any) => {
          if(currentWeather) {
            const clearSkyReport = currentWeather.weather && currentWeather.weather[0] &&  `Skies are ${currentWeather.weather[0].main}.`;
            this.weather = `It's ${currentWeather.main.temp} degrees in ${currentWeather.name}! ${clearSkyReport}`;
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