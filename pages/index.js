import thunk from 'redux-thunk';
import Todo from "../components/Todo";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/rootReducer'

const store = createStore(rootReducer,applyMiddleware(thunk));

export default function Home() {
  return (
    <div className="bg-gray-300 h-full">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}
