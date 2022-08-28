import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './Actions';

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <div className="container">
      <h1>Count : {state}</h1>
      <div>
        <button className="plusBtn" onClick={plusNum}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
  );
}
