import { createAction, props, Action } from '@ngrx/store';

export enum WeatherActionTypes {
    GetCurrentWeather = '[Weather] GetCurrentWeather'
}

export class WeatherAction implements Action {
    readonly type = WeatherActionTypes.GetCurrentWeather;
    zipCode: string;

    constructor(zipCode: string) {
        this.zipCode = zipCode;
    }
}

export const getWeather = createAction(WeatherActionTypes.GetCurrentWeather, props<{ zipCode: string }>());