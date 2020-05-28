import React from 'react';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';

function App() {

  // const user ={
  //   name: "Fran",
  //   age: "33"
  // }

  const articulos = [
    {
      nombre: "Articulo 1",
      cantidad: 41,
      precio: "$50,01"
    },
    {
      nombre: "Articulo 2",
      cantidad: 4,
      precio: "$100,00"
    },
    {
      nombre: "Articulo 3",
      cantidad: 0,
      precio: "$110,00"
    }
  ]

  return (
    <div className="App">
      <header className='App-header'>
        <Navigation />
        <ProductList articulos = { articulos } />
      </header>
    </div>
  );

  }
  


export default App;
