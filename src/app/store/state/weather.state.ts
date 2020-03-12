import { Weather } from 'src/app/Models/weather.model';

export interface WeatherState {
    weather: Weather;
    error: any;
}

export const initialWeatherState: WeatherState = {
    weather: null,
    error: null
};

export function getInitialState(): WeatherState {
    return initialWeatherState;
}