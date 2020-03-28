import { Weather } from 'src/app/models/weather.model';

export interface WeatherState {
    currentWeather: Weather,
    loading: boolean,
    error: any
}

export const initialWeatherState: WeatherState = {
    currentWeather: undefined,
    loading: false,
    error: undefined
};

export function getInitialState(): WeatherState {
    return initialWeatherState;
}