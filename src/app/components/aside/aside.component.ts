import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';


@Component({
    selector:'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss']
})

export class Aside implements OnInit{

  id:number;

  ngOnInit() {
    this.id = environment.id;
  }

}
