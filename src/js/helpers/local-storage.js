export function saveToLs(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

export function loadFromLs(key, defaultValue) {
  const loadData = localStorage.getItem(key);
  try {
    const parsedData = JSON.parse(loadData);
    return parsedData ?? defaultValue;
  } catch {
    return loadData ?? defaultValue;
  }
}
