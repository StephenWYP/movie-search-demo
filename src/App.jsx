import { useState } from 'react'  // Import React and state hook
import SearchInput from './components/SearchInput';
import LoadingIndicator from './components/LoadingIndicator';
import ResultList from './components/ResultList';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    // Call local API backend
    fetch(`https://1rwvtngenk.execute-api.us-west-2.amazonaws.com/search?keyword=${keyword}`)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        setResults(data);     // Set the result list from server
        setLoading(false);    // Hide loading spinner
      })
        .catch(error => {
          console.error('Error fetching search results: ', error);
          setLoading(false);   // Even if error, stop loading
        });
  };

  return (
    <div>
      <h1>Movie Search Engine</h1>
      <SearchInput 
        keyword={keyword} 
        setKeyword={setKeyword} 
        onSearch={handleSearch} 
      />
      {loading ? <LoadingIndicator /> : <ResultList results={results} />}
    </div>
  );
}

export default App
