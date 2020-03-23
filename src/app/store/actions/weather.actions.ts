import { Action } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.model';

export enum WeatherActionTypes {
    GET_CURRENT_WEATHER = '[Weather] GetCurrentWeather',
    GET_CURRENT_WEATHER_SUCCESS = '[Weather] GetCurrentWeatherSuccess',
    GET_CURRENT_WEATHER_FAILURE = '[Weather] GetCurrentWeatherFailure'
}

export class WeatherAction implements Action {
    readonly type = WeatherActionTypes.GET_CURRENT_WEATHER;

    constructor(public payload: { zipCode: string }) {}
}

export class WeatherActionSuccess implements Action {
    readonly type = WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS;

    constructor(public payload: { currentWeather: Weather }) {}
}

export class WeatherActionFailure implements Action {
    readonly type = WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE;

    constructor(public payload: { error: any }) {}
}

export type WeatherActions = 
    WeatherAction 
    | WeatherActionSuccess
    | WeatherActionFailure;