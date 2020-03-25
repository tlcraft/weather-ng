import { WeatherActionTypes, WeatherAction } from '../actions/weather.actions';
import { WeatherState, getInitialState } from '../state/weather.state';

export function weatherReducer(state: WeatherState = getInitialState(), action: WeatherAction): WeatherState {
    switch(action.type) {
        case WeatherActionTypes.GET_CURRENT_WEATHER:
        {
            const newState = Object.assign({}, state, { loading: true });
            return newState;
        }
        case WeatherActionTypes.GET_CURRENT_WEATHER_SUCCESS:
        {    
            const newState = Object.assign({}, state, { currentWeather: action.payload.currentWeather, loading: false });
            return newState;
        }
        case WeatherActionTypes.GET_CURRENT_WEATHER_FAILURE:
        {        
            const newState = Object.assign({}, state, { loading: false, error: action.payload.error });
            return newState;
        }
        default:
            return state;
    }
}