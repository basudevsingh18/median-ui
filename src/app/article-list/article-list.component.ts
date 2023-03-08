import { Component, OnInit } from '@angular/core';
import { ArticleAPIService } from '../services/article-api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  dataSource : any = [];
  article = {};

  constructor(private articleApiService : ArticleAPIService) {}

  ngOnInit() {
    
    this.getArticles();

  }

  getArticles(){
    this.articleApiService.getArticles().subscribe((result)=>{
      this.dataSource = result;
    })
  }
}
