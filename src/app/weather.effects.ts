import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from './Services/weather.service';
import { getWeather, WeatherActionTypes } from './weather.actions';

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherService) {}

    getCurrentWeather$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getWeather),
            mergeMap(action => this.weatherService.getCurrentWeather(action.zipCode)
                .pipe(
                    map(weather => ({ type: WeatherActionTypes.GetCurrentWeather, zipCode: weather })),
                    catchError(() => of({ type: WeatherActionTypes.GetCurrentWeather, zipCode: null }))
                )
            )
        )
    );
}