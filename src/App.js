import React, { Component } from 'react';
import logo from './logo.svg';
import initialData from './initial-data';
import './App.css';
import styled from 'styled-components';

const Header = styled.div`

`;

const Title = styled.h3`
  margin-top: 0;
  padding-top: 20px;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: white;
  margin: auto;
`;

const Category = styled.div`
  margin: 10px;
  border: 2px solid lightgrey;
`;

const Habit = styled.li`
  background: dodgerblue;
`;

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
  state = initialData;

  render() {
    console.log(this.state.categories.primary);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Habit tracking app to get your life on track.
          </p>
        </header>
        <Container>
          <Title>Test</Title>
          <Category>

            {}
          </Category>
        </Container>
      </div>



    );
  }
}

export default App;
