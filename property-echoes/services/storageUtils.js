// utils/storageUtils.js

export function getLocalStorage(key, defaultValue) {
  if (typeof window === "undefined") return defaultValue;

  const stickyValue = localStorage.getItem(key);

  try {
    return stickyValue !== null && stickyValue !== "undefined"
      ? JSON.parse(stickyValue)
      : defaultValue;
  } catch (e) {
    console.error("Error parsing localStorage value", e);
    return defaultValue;
  }
}

export function setLocalStorage(key, value) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error setting localStorage value", e);
  }
}
