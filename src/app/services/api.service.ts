import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostCommentModel } from '@models/post-comment.model';
import { PostModel } from '@models/post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${environment.path_api}posts`);
  }

  public getPostById(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${environment.path_api}posts/${id}`);
  }

  public getPostsComments(idPost: number): Observable<PostCommentModel[]> {
    return this.http.get<PostCommentModel[]>(`${environment.path_api}posts/${idPost}/comments`);
  }
}
