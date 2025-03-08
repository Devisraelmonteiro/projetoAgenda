//DTO para requisição de cadastro e edição de tarefas
export interface TarefasRequestDTO {    
    nome : string; //nome da tarefa
    data : string; //data da tarefa
    categoria : string; //categoria da tarefa
    prioridade : string; //prioridade da tarefa
    usuarioId : string; //id do usuário
}


