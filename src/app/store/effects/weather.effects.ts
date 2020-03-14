import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError,  switchMap } from 'rxjs/operators';
import { WeatherService } from '../../Services/weather.service';
import { WeatherActionTypes, WeatherAction } from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherService) {}

    @Effect()
    getCurrentWeather$ = this.actions$.pipe(
        ofType<WeatherAction>(WeatherActionTypes.GET_CURRENT_WEATHER),
        switchMap(action => this.weatherService.getCurrentWeather(action.payload.zipCode)
            .pipe(
                map(weather => ({ type: WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS, payload: weather })),
                catchError(() => of({ type: WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE, payload: null }))
            )
        )
    );
}