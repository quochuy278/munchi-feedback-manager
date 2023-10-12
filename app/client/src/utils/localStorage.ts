export const FEEDBACK_KEY = "feedback";
type AVAILABLE_KEYS = typeof FEEDBACK_KEY;

const setLocalStorage = (key: AVAILABLE_KEYS, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// const addLocalStorage = (key: AVAILABLE_KEYS, value: any) => {
//     const data = localStorage.setItem(key, JSON.stringify(value));
//     setLocalStorage(key, [...data, ...value])
//   };

export { setLocalStorage };
