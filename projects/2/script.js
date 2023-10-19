// Variáveis:
const form = document.querySelector('.form');
const tasks = document.querySelector('.tasks');

// Como adicionar uma task?
function addTask(event){
    event.preventDefault();
    const new_task_input = form.querySelector('#new-task').value;
    if (new_task_input.trim() !== ''){
        const new_task = document.createElement('li');
        new_task.innerHTML += `
        <input type="checkbox" id="task-${tasks.childElementCount + 1}">
        <label for="task-${tasks.childElementCount + 1}" class="task">${new_task_input}</label>
        <button class="delete-task">Excluir</button>
        `;
        tasks.appendChild(new_task)
        form.reset()
    }
};

// Como riscar a tarrefa?
function completeTask(event){
    const label = event.target.nextElementSibling;

    if (event.target.checked){
        label.innerHTML = `<del>${label.textContent}</del>`;
    }
    else {
        label.innerHTML = `${label.textContent}`;
    }
}

// Como deletar a task?
function deleteTask(event){
    const listItem = event.target.parentNode;
    tasks.removeChild(listItem);
}

// Rodando funções:
form.addEventListener(
    'submit',
    addTask
)

tasks.addEventListener(
    'change',
    function(event){
        if (event.target.type === 'checkbox'){
            completeTask(event)
        }
    }
)

tasks.addEventListener(
    'click',
    function(event) {
        if (event.target.classList.contains('delete-task')){
            deleteTask(event)
        }
    }
)