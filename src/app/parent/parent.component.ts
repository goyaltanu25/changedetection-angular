import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 p: any;
 data: any;

  constructor() { }

  ngOnInit() {

    this.p = {
      firstname: 'tanu',
      lastname: 'goyal'
    }
    this.data = new BehaviorSubject(this.p);

  }
  //******************************************************************************************
  // DEFAULT WAY OF CHANGE DETECTION PROCESS IN ANGULAR-
  // CHANGE DETECTOR WILL TRAVERSE THROUGH ALL COMPONENTS TO DETECT AND UPDATE CHANGE
  //AND ITS A HEAVY PROCESS.
  // onChange(){
  //   this.p.firstname = 'rupali';
  // }
  //********************************************************************************************
  //ONPUSHCHANGEDETECTION strategy - angular will only run change detector
  // when a new reference is passed to @INPUT() data.
  // onChange(){
  //   this.p = {
  //     firstname: 'aarti',
  //     lastname: 'sabarwal'
  //   }
  // }

  //To avoid performance degradation bcoz of this heavy process of traversing from root component to bottom,
  // we can use BehaviourSubject of rxJS Library here is how.
  //*******************************************************************************************

  onChange(){
    this.p = {
      firstname: 'aarti',
      lastname: 'sabarwal'
    };
    this.data.next(this.p);
  }
}
