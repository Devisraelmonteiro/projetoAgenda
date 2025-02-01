import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { RegisterRequestDTO } from "../models/registre.response.dto";
import { RegisterResponseDTO } from "../models/registre.request.dto";




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
      return this.httpClient.post<RegisterResponseDTO>(environment.usuariosApi, request);
  }


}




