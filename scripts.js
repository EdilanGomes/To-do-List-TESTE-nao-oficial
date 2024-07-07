let botaoAdd = document.getElementById('botao');
let input = document.getElementById('input-tarefas');
let tarefas = document.getElementById('tarefas');

botaoAdd.addEventListener('click', function() {
    if (input.value !== '') {
        var tarefa = document.createElement('p');
        tarefa.innerText = '-> ' + input.value;
        tarefas.appendChild(tarefa);
        input.value = '';
        tarefa.addEventListener('click', function() {
            if (tarefa.style.textDecoration === 'line-through') {
                tarefa.style.textDecoration = 'none';
            } else {
                tarefa.style.textDecoration = 'line-through';
            }
        });
        tarefa.addEventListener('dblclick', function(){
            tarefas.removeChild(tarefa);
        })
    }
});
