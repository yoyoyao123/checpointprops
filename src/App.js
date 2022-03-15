import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Profil from './component/Profil';

function App() {
  return (
    <div className="App">
      <Profil 
        Nom ="Yao"
        Prenom= "yoyo"
        Profession ="Etudiante"
        Bio = "abidjan"

      />
    </div>
  );
}

export default App;
