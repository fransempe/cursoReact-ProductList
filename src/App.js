import React from 'react';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ProductListStock from './components/ProductListStock';

function App() {

  const articulos = [
    {
      nombre: "Coca-Cola 2 1/2",
      cantidad: 41,
      precio: "$110,01"
    },
    {
      nombre: "Cerveza Andes Rubia",
      cantidad: 2,
      precio: "$101,20"
    },
    {
      nombre: "Pepsi 1 1/2",
      cantidad: 0,
      precio: "$90,50"
    }
  ]

  return (
    <div className="App">
      <header className='App-header'>
        <Navigation />
        <ProductList articulos = {articulos} />
        <ProductListStock articulos = {articulos} />
      </header>
    </div>
  );

  }
  


export default App;
