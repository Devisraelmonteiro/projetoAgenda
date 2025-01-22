import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //instanciando a classe HttpClient (injeção de dependência)
  constructor(private http: HttpClient) { }

  //construindo um formulário
  form = new FormGroup({
    nome : new FormControl(''), //campo 'nome'
    email : new FormControl(''), //campo 'email'
    senha : new FormControl('') //campo 'senha'
  });

  //capturar do evento submit
  onSubmit() {
    //enviando uma requisição POST para API (gravar usuário)
    this.http.post('http://localhost:3000/usuarios', this.form.value)


      .subscribe({ //aguardando a resposta da API
        next: () => { //caso a requisição seja bem sucedida
          alert('Usuário cadastrado com sucesso!');
          this.form.reset(); //limpar o formulário
        }
      });
  }
}
