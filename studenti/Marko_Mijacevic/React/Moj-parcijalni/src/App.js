//App.js
//src/App.js
import { Provider } from 'react-redux';
import './App.css';
import { Main } from './components/index';
import store from './store/redux-store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
