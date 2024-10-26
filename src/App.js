import React from 'react';
import TTSForm from './components/TTSForm';

function App() {
  return (
    <div className="App android-metal-container">
      <header className="App-header android-metal-header">
        <h1>Text to Speech</h1>
      </header>
      <main>
        <TTSForm />
      </main>
    </div>
  );
}

export default App;
