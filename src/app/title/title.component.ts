import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerInfo.params.subscribe((params : Params) => {
      console.log("title : " + JSON.stringify(params))
    })
  }

}
