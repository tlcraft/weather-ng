import { createReducer, on } from '@ngrx/store';
import { getWeather } from '../actions/weather.actions';
import { Weather } from '../../Models/weather.model';

export const initialState: Weather = null;

const _weatherReducer = createReducer(initialState, 
    on(getWeather, state => state),
);

export function weatherReducer(state, action) {
    return _weatherReducer(state, action);
}