import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  public ngOnInit(): void {
    this.apiService.getPostById(1).pipe(

      tap(console.log)
    );
  }

}
