import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';
import Card from './Card';

function App() {
  const numVotes = 3.4

  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Card
          title='Hola Mundo'
          description='lorem'
          numVotes={numVotes}
        />

        <Card
          title='Hola Mundo'
          description='lorem'
        >
          <p>Este es el children</p>
        </Card>
      </header>
    </div>
  );
}

export default App;
