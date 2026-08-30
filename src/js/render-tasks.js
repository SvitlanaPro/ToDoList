import { refs } from './refs';

export function renderTasks(tasks) {
  const markup = tasks
    .map(
      ({ id, title, description }) => `
  <li class="task-list-item" id="${id}">
    <button class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
  </li>
  `
    )
    .join('');

  refs.taskList.innerHTML = markup;
}
