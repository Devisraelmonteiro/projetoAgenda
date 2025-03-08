//DTO para resposta de consulta de tarefas
export interface TarefasResponseDTO {    
    id: string; //id da tarefa
    nome : string; //nome da tarefa
    data : string; //data da tarefa
    categoria : string; //categoria da tarefa
    prioridade : string; //prioridade da tarefa
    usuarioId : string; //id do usuário
}

