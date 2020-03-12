import { createAction, props, Action } from '@ngrx/store';

export enum WeatherActionTypes {
    GET_CURRENT_WEATHER = '[Weather] GetCurrentWeather',
    GET_CURRENT_WEATHER_SUCCESS = '[Weather] GetCurrentWeatherSuccess',
    GET_CURRENT_WEATHER_FAILURE = '[Weather] GetCurrentWeatherFailure'
}

export class WeatherAction implements Action {
    readonly type = WeatherActionTypes.GET_CURRENT_WEATHER;

    constructor(public payload: string) {
        this.payload = payload;
    }
}

export const getWeather = createAction(WeatherActionTypes.GET_CURRENT_WEATHER, props<{ zipCode: string }>());
export const getWeatherSuccess = createAction(WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS);