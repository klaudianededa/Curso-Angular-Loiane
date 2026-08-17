import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
          background-color: yellow;
          font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  url: string = 'www.google.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/200/300';


  valorAtual: string = '';
  valorSalvo = 0;

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';


  valorInicial = 15;
  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }
  botaoClicado() {
    alert('Botão clicado!');
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: number) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
  console.log(evento.novoValor);
}
  constructor() { }

  ngOnInit(): void {
  }

}
