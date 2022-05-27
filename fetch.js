fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => addTodos(data));

const addTodos = data => {
  data.forEach(item => {
    // console.log(item);

    let todoList = document.querySelector('#todo-list');
    let listTodo = document.createElement('ul');

    listTodo.setAttribute('class', 'list-todo');

    todoList.append(listTodo);

    listTodo.innerHTML += `<li class='todo-item'>
      <div class='item-left'>
        <input type='checkbox' id='complete' />
        ${item.title}
      </div>
      <div class='item-right'>
        <i class="fas fa-pencil-alt"></i>
        <i class="fas fa-trash"></i>
      </div>
    </li>`;
  });
};

// let todoContainer = document.querySelector('#todo-container');
// let box = document.createElement('div');
// let boxId = document.createElement('h2');
// let taskComplete = document.createElement('div');
// let boxTodo = document.createElement('h3');
// let checkBox = document.createElement('input');
// let done = document.createElement('span');

// todoContainer.append(box);
// box.appendChild(boxId);
// box.appendChild(taskComplete);
// taskComplete.appendChild(boxTodo);
// taskComplete.appendChild(checkBox);
// taskComplete.appendChild(done);

// box.setAttribute('class', 'todo-info');
// taskComplete.setAttribute('class', 'complete-section');
// checkBox.setAttribute('type', 'checkbox');

// boxId.innerText = `${item.id}.`;
// boxTodo.innerText = item.title;
// done.innerText = 'Done';
