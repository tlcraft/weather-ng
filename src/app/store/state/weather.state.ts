import { Weather } from 'src/app/models/weather.model';

export interface WeatherState {
    currentWeather: Weather;
    error: any;
}

export const initialWeatherState: WeatherState = {
    currentWeather: null,
    error: null
};

export function getInitialState(): WeatherState {
    return initialWeatherState;
}