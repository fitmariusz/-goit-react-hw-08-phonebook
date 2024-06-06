import { initialContactsState } from "./constants";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contactsRedux');
    if (serializedState === null) {
      return initialContactsState; // If no state is found, return undefined
    }
      return {
          contacts: JSON.parse(serializedState),
          filter:'',
       };
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};
