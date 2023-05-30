import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss'
import LanguageWrapper from './features/languages/LanguageWraper';
import DishFormik from './features/DishForm'

function App(props: any) {
  return (
    <LanguageWrapper>
      <Routes>
        <Route path="/" element={<Layout><DishFormik {...props} /></Layout>} />
      </Routes>
    </LanguageWrapper>
  );
}

export default App;
