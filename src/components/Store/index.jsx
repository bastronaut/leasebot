import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../Reducers'

let store = createStore();

store.subscribe(() => console.log(store.getState()))


// https://github.com/cloudmu/react-redux-starter-kit/blob/master/src/store/configureStore.js

//  https://github.com/tj/frontend-boilerplate/blob/master/client/store/index.js

// design the state:

{
  userid: '123abc',
  username: 'hank',
  messages: [
    {
      nr: 1,
      text: 'blabla numero 1',
      sender: user,
      timestamp: '10:30',
      isSending: false
    },
    {
      nr: 2,
      text: 'certainly nr 2',
      sender: bot,
      timestamp: '10:31',
      isSending: false
    },
    {
      nr: 3,
      text: 'alright nr 3',
      sender: user,
      timestamp: '10:32',
      isSending: false
    },
    {
      nr: 4,
      text: 'ok ok ok nr 4',
      sender: bot,
      timestamp: '10:33',
      isSending: false
    },
    ,
    {
      nr: 5,
      text: 'sending ... 5',
      sender: bot,
      timestamp: '10:34',
      isSending: true
    }
  ]
}
