import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

// Pages imports
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SingUpPage";
import ClassroomsPage from "./pages/ClassroomsPage";
import TeachersPage from "./pages/TeachersPage";
import TimetablePage from "./pages/TimetablePage";
import Header from "./components/Header";
import AddClassroomPage from "./pages/AddClassroomPage";
import AddTeachersPage from "./pages/AddTeachersPage";
import AddTimeTablePage from "./pages/AddTimeTablePage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/classrooms" component={ClassroomsPage} />
        <Route path="/teachers" component={TeachersPage} />
        <Route path="/timetable" component={TimetablePage} />
        <Route path="/addclassroom" component={AddClassroomPage} />
        <Route path="/addteachers" component={AddTeachersPage} />
        <Route path="/addtimetable" component={AddTimeTablePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
