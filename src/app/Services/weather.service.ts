import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(zipCode: string): Observable<any> {
    const params = new HttpParams().set('zipCode', zipCode);
    const currentWeather = this.http.get<any>(environment.apiUrl + '/currentWeather', { params: params });
    return currentWeather;
  }

}