export const LS_KEYS = {
  tasks: 'tasks',
  theme: 'theme',
};

export function saveState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getState(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
