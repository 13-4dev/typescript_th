import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Textblock from './components/Textblock';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/message/:hash" element={<Textblock />} />
      </Routes>
    </Router>
  );
};

export default App;
