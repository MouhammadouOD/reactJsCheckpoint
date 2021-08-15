//import logo from './logo.svg';
//import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
   return(
     <div className="App">
       <h1>Hello World!</h1>
      <div class="container border">
        <form class="mt-5 mb-5">
          <div class="form-group">
            <label for="lastname">Last Name:</label>
            <input type="text" placeholder="enter your Last name" class="form-control" name="lastname" id=""/><br></br>
          </div>
            
          <div class="form-group">
            <label for="name">First Name:</label>
            <input type="text" placeholder="enter your First name" class="form-control" name="name" id=""/><br></br>
          </div>

          <div class="form-group">
            <label for="mail">Email:</label>
            <input type="text" placeholder="enter your name" class="form-control" name="mail" id=""/> <br></br>
          </div>

            <button className="btn btn-primary">Soumettre</button>

        </form>
      </div>

    </div>


);

}

export default App;
