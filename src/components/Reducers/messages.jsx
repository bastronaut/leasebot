const message = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        nr: action.nr,
        text: action.text
      };
    default:
      return state;
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        message(undefined, action)
      ];
    case 'CLICK_SOMETHING':
      // TODO
      return '';
    default:
      return state;
  }
}





// https://github.com/reactjs/redux/blob/master/examples/todos-with-undo/src/reducers/todos.js
