export function addTask(event) {
  event.preventDefault();
  const title = event.target.elements.taskName.value.trim();
  const description = event.target.elements.taskDescription.value.trim();

  if (title === '' || description === '') {
    alert(' Fill all fields');
    return;
  }

  const task = { title, description };
  console.log(task);
  event.target.reset();
}
