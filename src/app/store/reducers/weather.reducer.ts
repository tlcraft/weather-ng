import { WeatherActionTypes, WeatherAction } from '../actions/weather.actions';
import { WeatherState, getInitialState } from '../state/weather.state';

export function weatherReducer(state: WeatherState = getInitialState(), action: WeatherAction): WeatherState {
    switch(action.type) {
        case WeatherActionTypes.GET_CURRENT_WEATHER:
        {
            const newState = { 
                ...state, 
                loading: true 
            };

            return newState;
        }
        case WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS:
        {    
            const newState = { 
                ...state, 
                currentWeather: action.payload.currentWeather, 
                loading: false 
            };

            return newState;
        }
        case WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE:
        {        
            const newState = {
                ...state,
                error: action.payload.error,
                loading: false
            };

            return newState;
        }
        default:
            return state;
    }
}