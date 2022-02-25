import { Component, OnInit } from '@angular/core';
import { PostModel } from '@models/post.model';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public post$!: Observable<PostModel>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.post$ = this.apiService.getPostById(1).pipe(
      tap((post: PostModel) => console.log(post)),
      map((post: PostModel) => post.addCurrentDate())
    );
  }

}
