import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weather-ng';

  zipCode: number;

  weather: string;

  getCurrentWeather(): void {
    const temp = 75;
    this.weather = `${this.zipCode} is currently ${temp} degrees`;
  }
}