import { Component, OnInit } from '@angular/core';
import { PostModel } from '@models/post.model';
import { UserModel } from '@models/user.model';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  public user$!: Observable<UserModel>;

  constructor(private apiService: ApiService) { }

  public ngOnInit(): void {
    this.user$ = this.apiService.getPostById(1).pipe(
      switchMap((post: PostModel) => this.apiService.getUserById(post.userId)),
      tap(console.log)
    );
  }

}
