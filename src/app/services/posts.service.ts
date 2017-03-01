import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {

  constructor(private http: Http){
    console.log('PostsService initialized..');
  }


  // constructor(private http: Http){
  //   console.log('PostsService initialized..');
  // }
  //    ---is the same---
  // private http: Http;
  // constructor(http: Http){
  //   this.http = http;
  //   console.log('PostsService initialized..');
  // }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }
}


