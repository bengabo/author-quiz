import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Sum from './Components/Sum';
import ClickCounter from './Components/ClickCounter';

function AuthorQuiz() {
  return (
    <>
      <ClickCounter />
      <Sum a={"key"} b={"board"} /> 
      <p>Author Quiz</p>
    </>
  );
}

export default AuthorQuiz;