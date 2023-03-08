import { Component, OnInit } from '@angular/core';
import { AuthorFormAPIService } from '../services/author-form-api.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit{

  displayedColumns  :  string[] = ['id', 'firstName', 'surname'];

  dataSource = [];
  author = {};

  constructor(private authorFormApiService: AuthorFormAPIService) {}

  ngOnInit(): void {
    
  }

  selectedAuthor(author : any) {
    this.author = author;
  }

  newAuthor() {
    this.author = {};
  }

  createAuthor(f: any) {
    this.authorFormApiService.createAuthor(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

  updateAuthor(f: any) {
    // f.value.id = this.author['id'];
    this.authorFormApiService.updateAuthor(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

  deleteAuthor(id :number) {
    this.authorFormApiService.deleteAuthor(id).subscribe((result)=>{
      console.log(result);
    });
  }

}
