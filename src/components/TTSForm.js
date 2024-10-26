import React, { useState } from 'react';

function TTSForm({ openaiKey, setOpenaiKey }) {
  const [text, setText] = useState('');
  const [speechFile, setSpeechFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSpeechFile(null);
    setProgress(0);
    setStatusMessage('Starting OpenAI call...');

    try {
      const response = await fetch('/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setSpeechFile(data.speech_file);
          setProgress(100);
          setStatusMessage('OpenAI call completed.');
        }
      } else {
        setErrorMessage('An error occurred: ' + response.statusText);
        setStatusMessage('OpenAI call failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred: ' + error.message);
      setStatusMessage('OpenAI call failed.');
    }
  };

  return (
    <div className="android-metal-form-container">
      <h1 className="android-metal-title">Text to Speech</h1>
      <form onSubmit={handleSubmit} className="android-metal-form">
        <label htmlFor="text" className="android-metal-label">Enter text:</label>
        <textarea
          id="text"
          name="text"
          rows="4"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="android-metal-textarea"
        />
        <br />
        <label htmlFor="openaiKey" className="android-metal-label">Enter OpenAI Key:</label>
        <input
          type="text"
          id="openaiKey"
          name="openaiKey"
          value={openaiKey}
          onChange={(e) => setOpenaiKey(e.target.value)}
          className="android-metal-input"
          maxLength="256"
        />
        <br />
        <button type="submit" className="android-metal-button">Submit</button>
      </form>
      <div className="android-metal-progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="android-metal-status-message">{statusMessage}</div>
      {speechFile && (
        <div>
          <p>Download your speech file: <a href={speechFile} className="android-metal-link">speech.mp3</a></p>
        </div>
      )}
      {errorMessage && (
        <div className="android-metal-error-message">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default TTSForm;
