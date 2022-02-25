import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostCommentModel } from '@models/post-comment.model';
import { PostModel, PostModelDTO } from '@models/post.model';
import { UserModel, UserModelDTO } from '@models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModelDTO[]>(`${environment.path_api}posts`).pipe(
      map((posts: PostModelDTO[]) => posts.map((e: PostModelDTO) => PostModel.fromDto(e)))
    );
  }

  public getPostById(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${environment.path_api}posts/${id}`).pipe(
      map((post: PostModelDTO) => PostModel.fromDto(post))
    )
  }

  public getPostsComments(idPost: number): Observable<PostCommentModel[]> {
    return this.http.get<PostCommentModel[]>(`${environment.path_api}posts/${idPost}/comments`).pipe(
      map((comments: PostCommentModel[]) => comments.map((e: PostCommentModel) => PostCommentModel.fromDto(e)))
    );
  }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModelDTO[]>(`${environment.path_api}users`).pipe(
      map((users: UserModelDTO[]) => users.map((e: UserModelDTO) => UserModel.fromDto(e)))
    );
  }

  public getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.path_api}users/${id}`).pipe(
      map((user: UserModelDTO) => UserModel.fromDto(user))
    )
  }
}
