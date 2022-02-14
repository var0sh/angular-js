import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPots() {
    return this.http.get(this.url)
    .pipe(retry(3), catchError(this.handleError))
  }

  creatPost(post: HttpClient) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(post: any) {
    return this.http.put(this.url + '/' + post?.id, JSON.stringify(post))
  }

  deletePost(post: any) {
    return  this.http.delete(this.url + 'a' + '/' + post.id)
    .pipe(retry(3), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // true ise -> client error
      console.log(`client error: ${error.error.message}`);
    }else {
      // backend error
      console.log(`backend error: status code: ${error.status}' error: ${error.error}`);
    }

    return throwError('An error occurred.')
  }

}
