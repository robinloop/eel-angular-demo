import { Component, OnInit } from '@angular/core';
import { eel } from '../app.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    eel.line_data()(n => alert(n))
  }

}


