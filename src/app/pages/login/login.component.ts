import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/new.models';
import { ArticleService } from 'src/app/service/article.service';
import { AuthService } from 'src/app/service/auth.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  article$: Observable<News> = this.articleService.get();
  article: any;

 constructor(public authService:AuthService,public articleService: ArticleService){} 
 
}
