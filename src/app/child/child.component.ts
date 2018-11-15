import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {

  @Input() person : Observable<any>;
  _data: any;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.person.subscribe( (data)=>
      {
        this._data = data;
    this.cd.markForCheck();

  });

  }

}
