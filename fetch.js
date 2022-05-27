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
        <label for='complete'>${item.title}</label>
      </div>
      <div class='item-right'>
        <i class="fas fa-pencil-alt"></i>
        <i class="fas fa-trash"></i>
      </div>
    </li>`;
  });
};
