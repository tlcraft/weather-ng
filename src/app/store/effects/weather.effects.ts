import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { WeatherService } from '../../Services/weather.service';
import { getWeather, WeatherActionTypes } from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherService) {}

    @Effect()
    getCurrentWeather$ = this.actions$.pipe(
            ofType(getWeather),
            exhaustMap(action => this.weatherService.getCurrentWeather(action.zipCode)
            .pipe(
                map(weather => ({ type: WeatherActionTypes.GetCurrentWeather, payload: weather })),
                catchError(() => of({ type: WeatherActionTypes.GetCurrentWeather, payload: null }))
            )
        )
    );
}