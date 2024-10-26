import React, { useState } from 'react';

function TTSForm() {
  const [text, setText] = useState('');
  const [speechFile, setSpeechFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSpeechFile(null);

    try {
      const response = await fetch('/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (data.error) {
        setErrorMessage(data.error);
      } else {
        setSpeechFile(data.speech_file);
      }
    } catch (error) {
      setErrorMessage('An error occurred: ' + error.message);
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
        <button type="submit" className="android-metal-button">Submit</button>
      </form>
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
