import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { News } from './models/new.models';
import { AuthService } from './service/auth.service';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyLogin';

  news$: Observable<News> = this.newsService.get();




    constructor(private newsService: NewsService, public authServices:AuthService, private auth: Auth){ }
    ngOnInit(){
      onAuthStateChanged(this.auth,(user) => {
        if(user){
          this.authServices.currentUser = user;
          console.log(user)
        }
        else{
          console.log('no user')
          this.authServices.currentUser = null;
        }
      })
    }
}
