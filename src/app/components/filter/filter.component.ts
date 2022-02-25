import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public ngOnInit(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(

    ).subscribe((e: number) => console.log(e));
  }
}
