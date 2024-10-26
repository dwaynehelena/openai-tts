import React, { useState } from 'react';
import TTSForm from './components/TTSForm';

function App() {
  const [openaiKey, setOpenaiKey] = useState('');

  return (
    <div className="App android-metal-container">
      <header className="App-header android-metal-header">
        <h1>Text to Speech</h1>
      </header>
      <main>
        <TTSForm openaiKey={openaiKey} setOpenaiKey={setOpenaiKey} />
      </main>
    </div>
  );
}

export default App;
