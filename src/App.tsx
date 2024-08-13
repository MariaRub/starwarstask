import React, {  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CategoryPage from './components/CategoryPage/CategoryPage';
import SearchPage from './components/Search/SearchPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  </Router>
);

export default App;
