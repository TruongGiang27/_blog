import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, of, switchMap } from "rxjs";
import * as ArticleActions from '../../actions/article.actions'
import { News } from "../models/new.models";
import { ArticleService } from "../service/article.service";


@Injectable()
export class ArticleEffect {
    constructor(private action$: Actions,private articleService: ArticleService ) { }

    getArticles$ = createEffect(
        () => this.action$.pipe(
            ofType(ArticleActions.getPerginate),
            switchMap((action) => {
                return this.articleService.getArticle(action.page,action.itemPerPage);
            }),
            map((response)=>{
                return ArticleActions.getPerginateSuccess({article: <Array<News>>response})
            }),
            catchError((error)=>{
                return of(ArticleActions.getPerginateFailure({error: error.message}));
            })
        )
    )
}