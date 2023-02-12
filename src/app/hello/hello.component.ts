import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit(): void {

    console.log("hello : " + JSON.stringify(this.routerInfo.snapshot.queryParams))
  }

}
