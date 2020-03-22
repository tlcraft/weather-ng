import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError,  switchMap } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
import { WeatherActionTypes, WeatherAction, WeatherActionSuccess, WeatherActionFailure } from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherService) {}

    @Effect()
    getCurrentWeather$ = this.actions$.pipe(
        ofType<WeatherAction>(WeatherActionTypes.GET_CURRENT_WEATHER),
        switchMap(action => {
            return this.weatherService.getCurrentWeather(action.payload.zipCode)
            .pipe(
                map(weather => new WeatherActionSuccess({ weather: weather })),
                catchError(error => of(new WeatherActionFailure({ error: error })))
            )
        })
    );
}