import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  name = "Aqueeb";
}

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `,
  styles: ['h2 { font-color: blue; }']
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}