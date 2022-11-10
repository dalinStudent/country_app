import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CountryInfo from './pages/CountryInfo';
import CountryList from './pages/CountryList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/country/:name" element={<CountryInfo />} />
        <Route path="/" element={<CountryList />} />
      </Routes>
    </Router>
  );
}

export default App;
