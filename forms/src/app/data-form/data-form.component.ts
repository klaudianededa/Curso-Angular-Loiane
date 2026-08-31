import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
        dados => {
          console.log(dados);
          // reseta o form
          // this.formulario.reset();
          //this.resetar();
        },
        (error: any) => alert('erro')
      );
  }
  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: any) {

    this.formulario.get(campo).valid &&  this.formulario.get(campo)?.touched
    return !campo.valid && campo.touched;
  }

verificaEmailInvalido(){
  let campoEmail = this.formulario.get('email');
if(campoEmail.errors){
  return campoEmail.errors['email'] && campoEmail?.touched;
}
}

  aplicaCssErro(campo: any) {
    return {
      'class.has-error': this.verificaValidTouched(campo),
      'class.has-feedback': this.verificaValidTouched(campo)
    };
  }

}
