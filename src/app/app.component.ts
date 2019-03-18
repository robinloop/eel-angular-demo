import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export const eel = window.eel
// eel.set_host( 'ws://localhost:8000')
export class AppComponent {
  title = 'app';
}

// Point Eel web socket to the instance
export const eel = window.eel
eel.set_host( 'ws://localhost:8000' )
eel.say_hello_py( 'Javascript World!' )