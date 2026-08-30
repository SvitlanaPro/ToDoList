import { nanoid } from 'nanoid';
import { renderTasks } from './render-tasks';
import { getState, saveState, LS_KEYS } from './local-storage-api';

let tasks = getState(LS_KEYS.tasks) || [];

export function addTask(event) {
  event.preventDefault();
  const title = event.target.elements.taskName.value.trim();
  const description = event.target.elements.taskDescription.value.trim();

  if (title === '' || description === '') {
    alert(' Fill all fields');
    return;
  }

  const task = { id: nanoid(), title, description };
  tasks.push(task);
  renderTasks(tasks);
  saveState(LS_KEYS.tasks, tasks);
  event.target.reset();
}

export function initTasks() {
  renderTasks(tasks);
}
export function deleteTask(event) {
  // if (event.target.nodeName !== 'BUTTON') {
  //   return
  // }
  if (!event.target.classList.contains('task-list-item-btn')) {
    return;
  }
  const id = event.target.closest('li').id;
  tasks = tasks.filter(task => task.id !== id);
  renderTasks(tasks);
  saveState(LS_KEYS.tasks, tasks);
}
