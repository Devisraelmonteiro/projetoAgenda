import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../components/services/usuario.service';
import { RegisterRequestDTO } from '../../components/models/registre.response.dto';


@Component({
  selector: 'app-register',
  imports: [ RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //instanciando a classe HttpClient (injeção de dependência)
  constructor(private usuarioService: UsuarioService) { }


  //construindo um formulário
  form = new FormGroup({
    nome : new FormControl(''), //campo 'nome'
    email : new FormControl(''), //campo 'email'
    senha : new FormControl('') //campo 'senha'
  });


  //capturar do evento submit
  onSubmit() {

    //criar os dados do DTO de requisição
    const request : RegisterRequestDTO = {
      //capturando o valor do campo nome do formulário
      nome: this.form.get('nome')?.value as string,
      //capturando o valor do campo email do formulário
      email: this.form.get('email')?.value as string,
      //capturando o valor do campo senha do formulário
      senha: this.form.get('senha')?.value as string
    };


    //chamando o serviço de registro de usuário
    this.usuarioService.register(request)
      .subscribe({ //capturando a resposta da requisição
        next: (response) => { //caso a requisição seja bem sucedida
          console.log(response); //exibindo a resposta no console
        },
        error: (e) => { //caso a requisição falhe
          console.error(e.error); //exibindo o erro no console
        }
      });
  }


}


