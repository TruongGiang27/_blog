import { createReducer, on } from "@ngrx/store";
import { ArticleState } from '../../states/article.states'
import * as ArticleActions from '../../actions/article.actions';

const initialState: ArticleState = {
    article: [],  
    isSuccess: true,
    error: '',
    loading: false
}

export const articleReducer = createReducer(
    initialState,
    on(ArticleActions.getPerginate, (state) =>({...state, loading:true})),
    on(ArticleActions.getPerginateSuccess, (state, action) =>({...state, articles:action.article })),
    on(ArticleActions.getPerginateFailure, (state, action) =>({...state, loading: false, isSuccess: true})),
)