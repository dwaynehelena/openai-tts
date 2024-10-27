import TTSForm from '../components/TTSForm';
import SearchForm from '../components/SearchForm';

const HomePage = () => {
  return (
    <div className="App android-metal-container">
      <header className="App-header android-metal-header">
        <h1>Text to Speech</h1>
      </header>
      <main>
        <TTSForm />
        <SearchForm />
      </main>
    </div>
  );
};

export default HomePage;
