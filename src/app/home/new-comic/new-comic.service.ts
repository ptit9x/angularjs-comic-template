import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface GetPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewComicBookService {
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<GetPostResponse> {
    return this.http.get('https://jsonplaceholder.typicode.com/postsw').pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
