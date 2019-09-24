import React from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import './App.css';

// Pages imports
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SingUpPage";
import ClassroomsPage from "./pages/ClassroomsPage";
import TeachersPage from "./pages/TeachersPage";
import TimetablePage from "./pages/TimetablePage";

function App() {
  return (
    <div className="App">

            <BrowserRouter>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/classrooms" component={ClassroomsPage} />
                <Route path="/teachers" component={TeachersPage} />
                <Route path="/timetable" component={TimetablePage} />
            </BrowserRouter>

    </div>
  );
}

export default App;
