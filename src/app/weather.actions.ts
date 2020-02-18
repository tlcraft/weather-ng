import { createAction, props } from '@ngrx/store';

export const getWeather = createAction('[Weather] GetCurrentWeather', props<{ zipCode: string }>());