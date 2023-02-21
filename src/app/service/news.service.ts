import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { News } from '../models/new.models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  get(){
    let url = "https://social.runwayclub.dev/api/articles/latest";
    return this.httpClient.get(url).pipe(map((data:any)=>{
      return <News>data;
    }));
  }
}
