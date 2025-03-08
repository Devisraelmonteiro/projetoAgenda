import { HttpClient } from "@angular/common/http";
import { RegisterRequestDTO } from "../models/register.request.dto";
import { RegisterResponseDTO } from "../models/register.response.dto";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { LoginRequestDTO } from "../models/login.request.dto";
import { LoginResponseDTO } from "../models/login.response.dto";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    /*
        Método construtor utilizado para injeção de dependência
        do serviço de requisições HTTP (HttpClient)
    */
    constructor(private httpClient: HttpClient) { }

    /*
         Método para realizar uma requisição POST para a API de usuários
    */
    register(request: RegisterRequestDTO): Observable<RegisterResponseDTO> {
        return this.httpClient
            .post<RegisterResponseDTO>
            (environment.usuariosApi, request);
    }

    /*
        Método para realizar a requisição de autenticação do usuário
    */
    login(request: LoginRequestDTO): Observable<LoginResponseDTO> {
        return this.httpClient
            .get<LoginResponseDTO>
            (environment.usuariosApi + "?email=" + request.email + "&senha=" + request.senha)
            .pipe(
                map(usuario => {
                  if(usuario != null && usuario != undefined) {
                    //gravar os dados do usuário em uma session storage do navegador
                    sessionStorage.setItem('usuario', JSON.stringify(usuario));                    
                  }
                  return usuario;
                })
            );
    }

}