import { WeatherActionTypes, WeatherActions } from '../actions/weather.actions';
import { WeatherState } from '../state/weather.state';

export function weatherReducer(state: WeatherState, action: WeatherActions) {
    switch(action.type) {
        case WeatherActionTypes.GET_CURRENT_WEATHER:
            return Object.assign({}, state, { error: null });
        case WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS:
            return Object.assign({}, state, { weather: action.payload.weather, error: null });
        case WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE:
            return Object.assign({}, state, { weather: null, error: action.payload.error });
        default:
            return state;
    }
}