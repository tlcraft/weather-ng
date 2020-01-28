import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor() { }

  getCurrentWeather(zipCode: string): number {
      return 75;
  }

}