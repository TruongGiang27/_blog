import { createAction, props } from "@ngrx/store";
import { News } from "src/app/models/new.models";



export const getPerginate = createAction('Articlel Get Oerginate', props<{page: number, itemPerPage: number}>());
export const getPerginateSuccess = createAction('[Artic] Get Perginate Success' ,props<{article: News[]}>());
export const getPerginateFailure = createAction('[Article] Get Perginate Failure', props<{error: string}>())