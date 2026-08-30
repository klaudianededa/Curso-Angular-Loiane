import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(form: any) {
    console.log(form);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'class.has-error': this.verificaValidTouched(campo),
      'class.has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep) {
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this.http
          .get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => console.log(dados));
      }
    }
  }
}