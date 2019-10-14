import React, { Component } from 'react';
import './App.css';
import { TableBody } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react';
import main from './components/layouts/main';

export default function App() {
  return (
    <div className="App">
      <main/>
    </div>
  );
}

