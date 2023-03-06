import { Component, OnInit } from '@angular/core';
import { AuthorsInterface } from '../interfaces/authors-interface';
import { AuthorAPIService } from '../services/author-api.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit{
  
  AuthorList : any = [];

  ngOnInit(): void {
      this.getAuthors();
    }

  constructor(private authorApiService: AuthorAPIService) {}

  getAuthors() {
    this.authorApiService.getAuthors().subscribe((data: {}) => {
      this.AuthorList = data;
    });
  }
}
