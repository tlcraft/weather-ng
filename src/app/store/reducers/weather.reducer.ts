import { WeatherActionTypes, WeatherActions } from '../actions/weather.actions';
import { WeatherState, getInitialState } from '../state/weather.state';

export function weatherReducer(state: WeatherState = getInitialState(), action: WeatherActions) {
    switch(action.type) {
        case WeatherActionTypes.GET_CURRENT_WEATHER:
            return Object.assign({} as WeatherState, state, { error: null });
        case WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS:
            return Object.assign({} as WeatherState, state, { weather: action.payload.weather, error: null });
        case WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE:
            return Object.assign({} as WeatherState, state, { weather: null, error: action.payload.error });
        default:
            return state;
    }
}