import { useState } from 'react'
import SearchInput from './components/SearchInput';
import LoadingIndicator from './components/LoadingIndicator';
import ResultList from './components/ResultList';
import './App.css';

function App() {
  const [keyword,, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const mockResults = [
        { title: 'Avengers: Endgame' },
        { title: 'The Matrix' },
        { title: 'Inception' },
      ];
      setResults(mockResults);
      setLoading(false);
    },1500);
  }

  return (
    <div>
      <h1>Movie Search Engine</h1>
      <SearchInput keyword={keyword} setKeyword={setKeyword} onSearch={handleSearch} />
      {loading ? <LoadingIndicator /> : <ResultList results={results} />}
    </div>
  )
}

export default App
