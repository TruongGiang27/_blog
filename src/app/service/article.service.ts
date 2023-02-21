import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  get(): import("rxjs").Observable<import("../models/new.models").News> {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  url = ' https://social.runwayclub.dev/api/articles';
  getArticle(page:number,itemPerPage:number){
    return this.http.get(`${this.url}/latest?page=${page}&per_page=${itemPerPage}`)
  }
}
