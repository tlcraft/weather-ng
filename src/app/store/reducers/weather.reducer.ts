import { WeatherActionTypes, WeatherActions } from '../actions/weather.actions';
import { Weather } from '../../Models/weather.model';
import { WeatherState } from '../state/weather.state';

export const initialState: Weather = null;

export function weatherReducer(state: WeatherState, action: WeatherActions) {
    switch(action.type) {
        case WeatherActionTypes.GET_CURRENT_WEATHER:
            return { 
                ...state, 
                error: null 
            };
        case WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS:
            return { 
                ...state,
                weather: action.payload.weather,
                error: null
            };
        case WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE:
            return { 
                ...state,
                weather: null,
                error: action.payload.error
            };
        default:
            return state;
    }
}