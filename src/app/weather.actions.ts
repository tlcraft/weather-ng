import { createAction, props } from '@ngrx/store';

export enum WeatherActionTypes {
    GetCurrentWeather = '[Weather] GetCurrentWeather'
}

export const getWeather = createAction(WeatherActionTypes.GetCurrentWeather, props<{ zipCode: string }>());