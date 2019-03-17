import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Habit tracking app to get your life on track.

// List habits on left, set desired amount times to partake per week
// User can add habits and set number
// Habits are broken down by categories
    // Personal
    // Health/Fitness
    // Financial
    // etc.
// Days of week are displayed
// User can check off activities when they have been completed
// Reminders sent when goals are not close to being met for the week
// Notes section


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Habit tracking app to get your life on track.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
