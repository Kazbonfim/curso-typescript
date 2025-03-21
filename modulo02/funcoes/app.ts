/**
 * Funções são blocos de código reutilizáveis que executam uma tarefa específica.
 * Elas permitem organizar e modularizar o código, facilitando a manutenção e reutilização.
 * Podem receber parâmetros e retornar valores, tornando-as flexíveis e dinâmicas.
 * São essenciais para a construção de aplicações escaláveis e bem estruturadas.
 */

// => Funções
function multiplicarNum(numero1: number, numero2: number) {
    const resultado: number = numero1 * numero2;
    console.log('O resultado é: ' + resultado);
    return resultado;
}

// => Chamando funções
multiplicarNum(5, 2);

// => 1. Criar um sistema de tarefas, simples e hardcoded
const estadoTarefa: boolean = false; // True = concluída

if (estadoTarefa) {
    console.log('Tarefa concluída!');
} else {
    console.log('Tarefa pendente!');
}

// => 2. Criar um sistema de tarefas, simples e hardcoded 
const tarefaConcluida: boolean = true;

interface Tarefa {
    nome: string,
    estado: string,
}

const listaTarefas: Tarefa[] = [];

// Adiciona um novo objeto à lista de tarefas (listaTarefas).
// O objeto contém duas propriedades:
// - 'nome': Define o nome da tarefa como 'acordar'.
// - 'estado': Usa um operador ternário para definir o estado da tarefa:
//    - Se 'tarefaConcluida' for verdadeiro, o estado será 'Pendente'.
//    - Caso contrário, o estado será 'Concluída'.
listaTarefas.push({
    nome: 'acordar', estado: tarefaConcluida ? 'Pendente' : 'Concluída'
});


listaTarefas.push({
    nome: 'acordar', estado: tarefaConcluida ? 'Pendente' : 'Concluída'
});


listaTarefas.push({
    nome: 'acordar', estado: tarefaConcluida ? 'Pendente' : 'Concluída'
});

for (let index = 0; index < listaTarefas.length; index++) {
    const element = listaTarefas[index];
    console.log(element);
}