import { WeatherActionTypes, WeatherActions } from '../actions/weather.actions';
import { WeatherState, getInitialState } from '../state/weather.state';

export function weatherReducer(state: WeatherState = getInitialState(), action: WeatherActions): WeatherState {
    switch(action.type) {
        case WeatherActionTypes.GET_CURRENT_WEATHER:
        {
            const newState = Object.assign({}, state, { error: null });
            return newState;
        }
        case WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS:
        {    
            const newState = Object.assign({}, state, { currentWeather: action.payload.currentWeather, error: null });
            return newState;
        }
        case WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE:
        {        
            const newState = Object.assign({}, state, { currentWeather: null, error: action.payload.error });
            return newState;
        }
        default:
            return state;
    }
}