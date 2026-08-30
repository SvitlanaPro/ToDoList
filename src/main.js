import { refs } from './js/refs';
import { addTask, deleteTask } from './js/tasks';
import { initTasks } from './js/tasks';
import { buttonClick, initTheme } from './js/theme-switcher';

initTasks();
initTheme();

refs.form.addEventListener('submit', addTask);
refs.taskList.addEventListener('click', deleteTask);
refs.button.addEventListener('click', buttonClick);
