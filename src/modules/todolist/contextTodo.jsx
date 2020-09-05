import { createContext } from 'react';

const TodoContext = createContext({
    showDrawer: false,
    toggleCheckoutDrawer: () => {},
  });

export default TodoContext;