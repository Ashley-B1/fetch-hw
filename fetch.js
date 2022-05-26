fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => applyTodo(data));

const applyTodo = data => {
  data.forEach(item => {
    console.log(item);
    let todoContainer = document.querySelector('#todo-container');
    let box = document.createElement('div');
    let boxId = document.createElement('h2');
    let taskComplete = document.createElement('div');
    let boxTodo = document.createElement('h3');
    let checkBox = document.createElement('input');
    let done = document.createElement('span');

    todoContainer.append(box);
    box.appendChild(boxId);
    box.appendChild(taskComplete);
    taskComplete.appendChild(boxTodo);
    taskComplete.appendChild(checkBox);
    taskComplete.appendChild(done);

    box.setAttribute('class', 'todo-info');
    taskComplete.setAttribute('class', 'complete-section');
    checkBox.setAttribute('type', 'checkbox');

    boxId.innerText = `${item.id}.`;
    boxTodo.innerText = item.title;
    done.innerText = 'Done';
  });
};
