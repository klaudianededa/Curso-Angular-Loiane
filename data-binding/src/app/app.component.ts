import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  title = 'data-binding';
}
