import { refs } from './js/refs';
import { addTask } from './js/tasks';
import { initTasks } from './js/tasks';

initTasks();

refs.form.addEventListener('submit', addTask);
