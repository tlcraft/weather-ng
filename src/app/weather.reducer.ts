import { createReducer, on } from '@ngrx/store';
import { getWeather } from './weather.actions';
import { Weather } from './Models/weather.model';

export const initialState: Weather = {
    main: { temp: 0 },
    name: ''
} as Weather;

const _weatherReducer = createReducer(initialState, 
    on(getWeather, state => state),
);

export function weatherReducer(state, action) {
    return _weatherReducer(state, action);
}