import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/NavigationBar/Header/Header';
import Footer from './components/NavigationBar/Footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}

export default App;