export interface Weather {
    weather: WeatherData[];
    main: any;
    name: string;
}

export interface WeatherData {
    id: number;
    main: string;
    description: string;
    icon: string;
}