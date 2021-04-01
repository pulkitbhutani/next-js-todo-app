import Head from "next/head";
import styles from "../styles/Home.module.css";
import thunk from 'redux-thunk';
import Todo from "./Todo/index";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
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
