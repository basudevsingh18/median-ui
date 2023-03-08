import { Component, OnInit } from '@angular/core';
import { AuthorAPIService } from '../services/author-api.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit{
  
  dataSource : any = [];
  author = {};

  ngOnInit() {
      this.getAuthors();
    }

  constructor(private authorApiService: AuthorAPIService) {}

  getAuthors() {
    this.authorApiService.getAuthors().subscribe((result)=>{
      this.dataSource = result;
    })
  }
}

