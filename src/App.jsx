/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

export default function App() {
  return (
    <>
      <NavBar nombre="Urban Diamond Beats" />
      <ItemListContainer greeting="Tienda de Beats" />
      <p>Beats de Trap, Drill, Rkt.</p>
    </>
  );
}