import { Action } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.model';

export enum WeatherActionTypes {
    GET_CURRENT_WEATHER = '[Weather] GetCurrentWeather',
    GET_CURRENT_WEATHER_SUCCESS = '[Weather] GetCurrentWeatherSuccess',
    GET_CURRENT_WEATHER_FAILURE = '[Weather] GetCurrentWeatherFailure'
}

export class GetWeatherAction implements Action {
    readonly type = WeatherActionTypes.GET_CURRENT_WEATHER;

    constructor(public payload: { zipCode: string }) {}
}

export class GetWeatherActionSuccess implements Action {
    readonly type = WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS;

    constructor(public payload: { currentWeather: Weather }) {}
}

export class GetWeatherActionFailure implements Action {
    readonly type = WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE;

    constructor(public payload: { error: any }) {}
}

export type WeatherActions = 
    GetWeatherAction 
    | GetWeatherActionSuccess
    | GetWeatherActionFailure;