import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from './components/Head';

function App() {
  return (
    <>
      <Head/>
      <Header />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
