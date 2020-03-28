import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(zipCode: string): Observable<Weather> {
    if(zipCode) {
      const params = new HttpParams().set('zipCode', zipCode);
      const currentWeather = this.http.get<Weather>(environment.apiUrl + '/currentWeather', { params: params });
      return currentWeather;
    }
  }
}