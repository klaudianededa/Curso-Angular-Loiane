import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../../enviar-valor.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-poc-take',
  templateUrl: './poc-take.component.html',
  styleUrls: ['./poc-take.component.scss']
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome = 'Componente com take';
  valor: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.service.getValor()
      .pipe(
        tap(v => console.log(this.nome, v)),
        take(1)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }

}