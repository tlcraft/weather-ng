import { Weather } from 'src/app/Models/weather.model';

export interface WeatherState {
    weather: Weather;
}

export const initialWeatherState: WeatherState = {
    weather: null
};

export function getInitialState(): WeatherState {
    return initialWeatherState;
}